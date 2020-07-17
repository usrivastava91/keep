import { combineReducers } from "redux";
import * as actions from "./actions";
import { NewNote, SearchState } from "../types";
const activeNoteState: NewNote[] = [];
const activeNotes = (state = activeNoteState, action: any): NewNote[] => {
  const { type, payload } = action;
  switch (type) {
    // Manually updating the activeNotes state when a note is created, instead of doing it through the saga's
    // response because indexedDB only returns the id of the object saved, and not the whole,
    //  hence failing the NOTE_CREATED_SUCCESSFULLY action approach
    case actions.CREATE_NOTE: {
      const { body, id, title, type } = payload;
      const note = { body, id, title, type };
      const newState = [...state, note];
      return newState;
    }
    case actions.ACTIVE_NOTES_RECIEVED: {
      const { notes } = payload;
      const newState = [...notes];
      return newState;
    }
    default:
      return state;
  }
};

const archivedNotesState: NewNote[] = [];
const archivedNotes = (state = archivedNotesState, action: any): NewNote[] => {
  const { type, payload } = action;
  switch (type) {
    case actions.ARCHIVED_NOTES_RECIEVED: {
      const { notes } = payload;
      const newState = [...notes];
      return newState;
    }
    default:
      return state;
  }
};

const pinnedNotesState: NewNote[] = [];
const pinnedNotes = (state = pinnedNotesState, action: any): NewNote[] => {
  const { type, payload } = action;
  switch (type) {
    //Manually updating the pinned note state when a note is created for the same reason
    // I had to update the state manually on note creation
    case actions.PIN_NOTE: {
      const { body, id, title, type } = payload;
      const note = { body, id, title, type };
      const newState = [...state, note];
      return newState;
    }

    case actions.PINNED_NOTES_RECIEVED: {
      const { notes } = payload;
      const newState = [...notes];
      return newState;
    }
    default:
      return state;
  }
};

const searchState: SearchState = {
  showSearchResults: false,
  searchResults: [],
};
const search = (state = searchState, action: any): any => {
  const { type, payload } = action;
  switch (type) {
    case actions.SEARCH_DATA_COLLATED: {
      const { allNotes, query } = payload;
      const result = allNotes.filter((note: NewNote) => {
        return (
          note.body.toLowerCase().includes(query.toLowerCase()) ||
          note.title.toLowerCase().includes(query.toLowerCase())
        );
      });
      const newState = {
        searchResults: [...result],
        showSearchResults: state.showSearchResults,
      };
      return newState;
    }

    case actions.SHOW_SEARCH_RESULTS: {
      const showSearchResults = payload;
      return { showSearchResults, searchResults: state.searchResults };
    }
    default:
      return state;
  }
};

const util = (state: any = { showSideBar: true }, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SHOW_SIDE_BAR: {
      const showSideBar = payload;
      return { showSideBar };
    }
    default:
      return state;
  }
};
const appReducers = { activeNotes, archivedNotes, pinnedNotes, search, util };

export const rootReducer = combineReducers({
  ...appReducers,
});
