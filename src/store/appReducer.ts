import { combineReducers } from "redux";
import * as actions from "./actions";
import { NewNote } from "../types";
const activeNoteState: NewNote[] = [];
const activeNotes = (state = activeNoteState, action: any): NewNote[] => {
  const { type, payload } = action;
  switch (type) {
    case actions.CREATE_NOTE: {
      const { body, id, title } = payload;
      const note = { body, id, title };
      const newState = [...state, note];
      return newState;
    }
    case actions.ACTIVE_NOTES_RECIEVED: {
      console.log(payload);
      const { notes } = payload;
      const newState = [...notes];
      return newState;
    }
    default:
      return state;
  }
};
const appReducers = { activeNotes };

export const rootReducer = combineReducers({
  ...appReducers,
});
