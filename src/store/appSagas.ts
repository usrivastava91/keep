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
import { resolve } from "dns";
function* watchCreateNote() {
  yield takeLatest(actions.CREATE_NOTE, createNote);
}

function* createNote(action: Action) {
  const note = action.payload;
  debugger;
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
  debugger;
  yield put(actions.activeNotesRecieved(notes));
}
const appSagas = [watchCreateNote(), watchGetActiveNotes()];

export function* rootSaga() {
  try {
    yield all([...appSagas]);
  } catch (e) {}
}
