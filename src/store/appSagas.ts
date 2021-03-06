import { takeEvery, put, select } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import * as actions from "./actions";
import db from "../utils/DBConfig";
import { Action } from "../types";

function* watchCreateNote() {
  yield takeEvery(actions.CREATE_NOTE, createNote);
}

function* createNote(action: Action) {
  const note = action.payload;
  const promise = new Promise((resolve, reject) => {
    db.table("activeNotes")
      .add(note)
      .then((id) => {
        resolve(id);
      });
  });
  const id = yield promise;
}

function* watchUpdateNote() {
  yield takeEvery(actions.UPDATE_NOTE, updateNote);
}

function* updateNote(action: Action) {
  const { updatedNote } = action.payload;
  const { id, type, body, title } = updatedNote;
  const promise = new Promise((resolve, reject) => {
    db.table(type)
      .update(id, { body, title, type })
      .then((id) => {
        resolve(id);
      });
  });
  const updatedId = yield promise;
}

function* watchDeleteNote() {
  yield takeEvery(actions.DELETE_NOTE, deleteNote);
}

function* deleteNote(action: Action) {
  const { deletedNote } = action.payload;
  const { id, type } = deletedNote;

  const promise = new Promise((resolve, reject) => {
    db.table(type)
      .delete(id)
      .then((id) => {
        resolve(id);
      });
  });
  const deletedId = yield promise;
  if (type === "archivedNotes") yield put(actions.getArchivedNotes());
  else if (type === "activeNotes") yield put(actions.getActiveNotes());
  else if (type === "pinnedNotes") yield put(actions.getPinnedNotes());
}

function* watchGetActiveNotes() {
  yield takeEvery(actions.GET_ACTIVE_NOTES, getActiveNotes);
}

function* getActiveNotes(action: Action) {
  const promise = new Promise((resolve, reject) => {
    db.table("activeNotes")
      .toArray()
      .then((notes) => {
        resolve(notes);
      });
  });
  const notes = yield promise;
  yield put(actions.activeNotesRecieved(notes));
}

function* watchArchiveNote() {
  yield takeEvery(actions.ARCHIVE_NOTE, archiveNote);
}
function* archiveNote(action: Action) {
  const note = action.payload;
  const promise = new Promise((resolve, reject) => {
    db.table("archivedNotes")
      .add(note)
      .then((id) => {
        db.table("activeNotes").delete(note.id);
        db.table("pinnedNotes").delete(note.id);
        resolve(id);
      });
  });
  const archivedNoteId = yield promise;
  //To rerender the active notes section on archiving a note
  yield put(actions.getPinnedNotes());
  yield put(actions.getActiveNotes());
}

function* watchGetArchivedNotes() {
  yield takeEvery(actions.GET_ARCHIVED_NOTES, getArchivedNotes);
}

function* getArchivedNotes(action: Action) {
  const promise = new Promise((resolve, reject) => {
    db.table("archivedNotes")
      .toArray()
      .then((notes) => {
        resolve(notes);
      });
  });

  const notes = yield promise;
  yield put(actions.archivedNotesRecieved(notes));
}

function* watchPinNote() {
  yield takeEvery(actions.PIN_NOTE, pinNote);
}

function* pinNote(action: Action) {
  const note = action.payload;
  const promise = new Promise((resolve, reject) => {
    db.table("pinnedNotes")
      .add(note)
      .then((id) => {
        db.table("activeNotes").delete(note.id);
        db.table("archivedNotes").delete(note.id);
        resolve(id);
      });
  });
  const pinnedNoteId = yield promise;
  yield put(actions.getArchivedNotes());
  yield put(actions.getActiveNotes()); //To rerender the active notes section on pinning a note
}

function* watchGetPinnedNotes() {
  yield takeEvery(actions.GET_PINNED_NOTES, getPinnedNotes);
}

function* getPinnedNotes() {
  const promise = new Promise((resolve, reject) => {
    db.table("pinnedNotes")
      .toArray()
      .then((notes) => {
        resolve(notes);
      });
  });
  const notes = yield promise;
  yield put(actions.pinnedNotesRecieved(notes));
}

function* watchSearch() {
  yield takeEvery(actions.SEARCH, search);
}

function* search(action: Action) {
  const query = action.payload;
  const allNotesFromState = (state: any) => [
    ...state.activeNotes,
    ...state.archivedNotes,
    ...state.pinnedNotes,
  ];
  let allNotes = yield select(allNotesFromState);
  yield put(actions.searchDataCollated(allNotes, query));
}

function* watchAddNoteToActive() {
  yield takeEvery(actions.ADD_NOTE_TO_ACTIVE, addNoteToActive);
}

function* addNoteToActive(action: Action) {
  const { note } = action.payload;
  const { type } = note;
  const noteToAdd = { ...note, type: "activeNotes" };
  const promise = new Promise((resolve, reject) => {
    db.table("activeNotes")
      .add(noteToAdd)
      .then((id) => {
        db.table(type).delete(note.id);
        resolve(id);
      });
  });
  const id = yield promise;
  yield put(actions.getArchivedNotes());
  yield put(actions.getPinnedNotes());
  yield put(actions.getActiveNotes());
}

const appSagas = [
  watchCreateNote(),
  watchGetActiveNotes(),
  watchDeleteNote(),
  watchArchiveNote(),
  watchGetArchivedNotes(),
  watchPinNote(),
  watchGetPinnedNotes(),
  watchUpdateNote(),
  watchSearch(),
  watchAddNoteToActive(),
];

export function* rootSaga() {
  try {
    yield all([...appSagas]);
  } catch (e) {}
}
