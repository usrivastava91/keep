import { NewNote } from "../types";
import { Action } from "redux";
export const CREATE_NOTE = "CREATE_NOTE";
export const GET_ACTIVE_NOTES = "GET_ACTIVE_NOTES";
export const ACTIVE_NOTES_RECIEVED = "ACTIVE_NOTES_RECIEVED";
export const ARCHIVE_NOTE = "ARCHIVE_NOTE";
export const GET_ARCHIVED_NOTES = "GET_ARCHIVED_NOTES";
export const ARCHIVED_NOTES_RECIEVED = "ARCHIVED_NOTES_RECIEVED";

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

interface ArchiveNote {
  type: typeof ARCHIVE_NOTE;
  payload: {
    note: NewNote;
  };
}

interface GetArchivedNotes {
  type: typeof GET_ARCHIVED_NOTES;
  payload: {};
}

interface ArchivedNotesRecieved {
  type: typeof ARCHIVED_NOTES_RECIEVED;
  payload: {
    notes: NewNote[];
  };
}
export type Actions =
  | CreateNote
  | GetActiveNotes
  | ActiveNotesRecieved
  | ArchiveNote
  | GetArchivedNotes
  | ArchivedNotesRecieved;

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

export function archiveNote(note: NewNote): Actions {
  return {
    type: ARCHIVE_NOTE,
    payload: {
      note,
    },
  };
}

export function getArchivedNotes(): Actions {
  return {
    type: GET_ARCHIVED_NOTES,
    payload: {},
  };
}

export function archivedNotesRecieved(notes: NewNote[]): Actions {
  return {
    type: ARCHIVED_NOTES_RECIEVED,
    payload: {
      notes,
    },
  };
}
