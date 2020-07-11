import { NewNote } from "../types";
export const CREATE_NOTE = "CREATE_NOTE";
interface CreateNote {
  type: typeof CREATE_NOTE;
  payload: {
    newNote: {};
  };
}

export type Actions = CreateNote;

export function createNote(newNote: NewNote): Actions {
  return {
    type: CREATE_NOTE,
    payload: {
      newNote,
    },
  };
}
