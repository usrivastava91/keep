import React, { useEffect } from "react";
import { CreateBox } from "./CreateBox";
import "./ActiveNotes.scss";
import { NotesGrid } from "./NotesGrid";
import { useSelector, useDispatch } from "react-redux";
import { NewNote } from "../types";
import { PinnedNotes } from "./PinnedNotes";

interface Props {}
export const ActiveNotes: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_ACTIVE_NOTES", payload: {} });
    dispatch({ type: "GET_ARCHIVED_NOTES", payload: {} }); //Need to get the archived notes to have them available in the state for search functionality( bad design regret :\ )
  }, []);

  const activeNotes = useSelector((state: any) => {
    return state.activeNotes;
  });
  const searchResults = useSelector((state: any) => {
    return state.search.searchResults;
  });
  const showSearchResults = useSelector((state: any) => {
    return state.search.showSearchResults;
  });
  const activeNotesSearchResults = searchResults.filter((result: NewNote) => {
    return result.type === "activeNotes";
  });

  return (
    <div className="active-notes">
      <div className="create-box">
        <CreateBox />
      </div>
      <div className="grid-section">
        <PinnedNotes />
        <NotesGrid
          notes={
            showSearchResults === true ? activeNotesSearchResults : activeNotes
          }
        />
      </div>
    </div>
  );
};
