import { NewNote } from "../types";
import { Action } from "redux";
export const CREATE_NOTE = "CREATE_NOTE";
export const GET_ACTIVE_NOTES = "GET_ACTIVE_NOTES";
export const ACTIVE_NOTES_RECIEVED = "ACTIVE_NOTES_RECIEVED";
export const ARCHIVE_NOTE = "ARCHIVE_NOTE";
export const GET_ARCHIVED_NOTES = "GET_ARCHIVED_NOTES";
export const ARCHIVED_NOTES_RECIEVED = "ARCHIVED_NOTES_RECIEVED";
export const PIN_NOTE = "PIN_NOTE";
export const GET_PINNED_NOTES = "GET_PINNED_NOTES";
export const PINNED_NOTES_RECIEVED = "PINNED_NOTES_RECIEVED";
export const UPDATE_NOTE = "UDPATE_NOTE";
interface CreateNote {
  type: typeof CREATE_NOTE;
  payload: {
    newNote: {};
  };
}

interface UpdateNote {
  type: typeof UPDATE_NOTE;
  payload: {
    updatedNote: NewNote;
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

interface PinNote {
  type: typeof PIN_NOTE;
  payload: {
    newNote: {};
  };
}

interface GetPinnedNotes {
  type: typeof GET_PINNED_NOTES;
  payload: {};
}

interface PinnedNotesRecieved {
  type: typeof PINNED_NOTES_RECIEVED;
  payload: {
    notes: NewNote[];
  };
}
export type Actions =
  | CreateNote
  | UpdateNote
  | GetActiveNotes
  | ActiveNotesRecieved
  | ArchiveNote
  | GetArchivedNotes
  | ArchivedNotesRecieved
  | PinNote
  | GetPinnedNotes
  | PinnedNotesRecieved;

export function createNote(newNote: NewNote): Actions {
  return {
    type: CREATE_NOTE,
    payload: {
      newNote,
    },
  };
}

export function updateNote(updatedNote: NewNote): Actions {
  return {
    type: UPDATE_NOTE,
    payload: {
      updatedNote,
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

export function pinNote(newNote: NewNote): Actions {
  return {
    type: PIN_NOTE,
    payload: {
      newNote,
    },
  };
}

export function getPinnedNotes(): Actions {
  return {
    type: GET_PINNED_NOTES,
    payload: {},
  };
}

export function pinnedNotesRecieved(notes: NewNote[]): Actions {
  return {
    type: PINNED_NOTES_RECIEVED,
    payload: {
      notes,
    },
  };
}
