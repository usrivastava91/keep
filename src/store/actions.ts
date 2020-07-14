import { NewNote } from "../types";
export const CREATE_NOTE = "CREATE_NOTE";
export const GET_ACTIVE_NOTES = "GET_ACTIVE_NOTES";
export const ACTIVE_NOTES_RECIEVED = "ACTIVE_NOTES_RECIEVED";

interface CreateNote {
  type: typeof CREATE_NOTE;
  payload: {
    newNote: {};
  };
}

interface GetActiveNotes {
  type: typeof GET_ACTIVE_NOTES;
  payload: {};
}

interface ActiveNotesRecieved {
  type: typeof ACTIVE_NOTES_RECIEVED;
  payload: {
    notes: NewNote[];
  };
}

export type Actions = CreateNote | GetActiveNotes | ActiveNotesRecieved;

export function createNote(newNote: NewNote): Actions {
  return {
    type: CREATE_NOTE,
    payload: {
      newNote,
    },
  };
}

export function getActiveNotes(): Actions {
  return {
    type: GET_ACTIVE_NOTES,
    payload: {},
  };
}

export function activeNotesRecieved(notes: NewNote[]): Actions {
  return {
    type: ACTIVE_NOTES_RECIEVED,
    payload: {
      notes,
    },
  };
}
