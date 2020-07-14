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
  db.table("activeNotes")
    .add(note)
    .then((id) => {
      console.log("NOTE SAVED", id);
    });
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
        resolve(id);
      });
  });

  db.table("activeNotes").delete(note.id);

  const archivedNoteId = yield promise;

  //TODO: Figure out a way to remove the archived note from the activeNotes state. so wont have to make db call again
  yield put(actions.getActiveNotes()); //To rerender the active notes section on archiving a note
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

const appSagas = [
  watchCreateNote(),
  watchGetActiveNotes(),
  watchArchiveNote(),
  watchGetArchivedNotes(),
];

export function* rootSaga() {
  try {
    yield all([...appSagas]);
  } catch (e) {}
}
