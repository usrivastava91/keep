import { combineReducers } from "redux";
import * as actions from "./actions";
import { NewNote } from "../types";
const activeNoteState: NewNote[] = [];
const activeNotes = (state = activeNoteState, action: any): NewNote[] => {
  const { type, payload } = action;
  switch (type) {
    case actions.CREATE_NOTE:
      debugger;
      const { body, id, title } = payload;
      const note = { body, id, title };
      const newState = [...state, note];
      return newState;
    default:
      return state;
  }
};
const appReducers = { activeNotes };

export const rootReducer = combineReducers({
  ...appReducers,
});
