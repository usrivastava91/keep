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
export const DELETE_NOTE = "DELETE_NOTE";
export const SEARCH = "SEARCH";
export const SEARCH_DATA_COLLATED = "SEARCH_DATA_COLLATED";
export const SHOW_SEARCH_RESULTS = "SHOW_SEARCH_RESULTS";
export const ADD_NOTE_TO_ACTIVE = "ADD_NOTE_TO_ACTIVE";
export const SHOW_SIDE_BAR = "SHOW_SIDE_BAR";
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

interface DeleteNote {
  type: typeof DELETE_NOTE;
  payload: {
    deletedNote: NewNote;
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

interface Search {
  type: typeof SEARCH;
  payload: {
    query: string;
  };
}

interface SearchDataCollated {
  type: typeof SEARCH_DATA_COLLATED;
  payload: {
    allNotes: NewNote[];
    query: string;
  };
}

interface ShowSearchResults {
  type: typeof SHOW_SEARCH_RESULTS;
  payload: {
    showSearchResults: boolean;
  };
}

interface ShowSideBar {
  type: typeof SHOW_SIDE_BAR;
  payload: {
    showSideBar: boolean;
  };
}

interface AddNoteToActive {
  type: typeof ADD_NOTE_TO_ACTIVE;
  payload: {
    note: NewNote;
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
  | PinnedNotesRecieved
  | Search
  | SearchDataCollated
  | ShowSearchResults
  | ShowSideBar
  | DeleteNote
  | AddNoteToActive;

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

export function addNoteToActive(note: NewNote): Actions {
  return {
    type: ADD_NOTE_TO_ACTIVE,
    payload: {
      note,
    },
  };
}

export function deleteNote(deletedNote: NewNote): Actions {
  return {
    type: DELETE_NOTE,
    payload: {
      deletedNote,
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

export function search(query: string): Actions {
  return {
    type: SEARCH,
    payload: {
      query,
    },
  };
}

export function searchDataCollated(
  allNotes: NewNote[],
  query: string
): Actions {
  return {
    type: SEARCH_DATA_COLLATED,
    payload: {
      allNotes,
      query,
    },
  };
}

export function showSearchResults(showSearchResults: boolean): Actions {
  return {
    type: SHOW_SEARCH_RESULTS,
    payload: {
      showSearchResults,
    },
  };
}

export function showSideBar(showSideBar: boolean): Actions {
  return {
    type: SHOW_SIDE_BAR,
    payload: {
      showSideBar,
    },
  };
}
