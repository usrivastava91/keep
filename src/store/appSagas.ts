import {
  takeEvery,
  put,
  takeLatest,
  call,
  select,
  fork,
} from "redux-saga/effects";
import { all } from "redux-saga/effects";
import * as actions from "./actions";
import db from "../utils/DBConfig";
import { Action } from "../types";

function* watchCreateNote() {
  yield takeLatest(actions.CREATE_NOTE, createNote);
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
  yield takeLatest(actions.UPDATE_NOTE, updateNote);
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
  yield takeLatest(actions.DELETE_NOTE, deleteNote);
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
  yield takeLatest(actions.ARCHIVE_NOTE, archiveNote);
}
//TODO FIGURE OUT WHY WRAPPING UNDER PROMISE ALLOWS YIELD LATER. READ ABOUT YIELD IN SAGA
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
  //TODO: Figure out a way to remove the archived note from the activeNotes state. so wont have to make db call again
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
  yield takeLatest(actions.PIN_NOTE, pinNote);
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
  const pinnedNotes = yield promise;
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
  yield takeLatest(actions.SEARCH, search);
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
];

export function* rootSaga() {
  try {
    yield all([...appSagas]);
  } catch (e) {}
}
