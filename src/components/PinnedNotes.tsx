import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotesGrid } from "./NotesGrid";
import { GET_PINNED_NOTES } from "../store/actions";
import { NewNote } from "../types";
import "./PinnedNotes.scss";
interface Props {}
export const PinnedNotes: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PINNED_NOTES, payload: {} });
  }, []);

  const pinnnedNotes = useSelector((state: any) => {
    return state.pinnedNotes;
  });
  const searchResults = useSelector((state: any) => {
    return state.search.searchResults;
  });
  const showSearchResults = useSelector((state: any) => {
    return state.search.showSearchResults;
  });
  const pinnedNotesSearchResults = searchResults.filter((result: NewNote) => {
    return result.type === "pinnedNotes";
  });
  return (
    <div className={pinnnedNotes.length > 0 ? "pinned-notes" : "display-none"}>
      <i className="fa fa-thumb-tack"></i>
      <NotesGrid
        notes={
          showSearchResults === true ? pinnedNotesSearchResults : pinnnedNotes
        }
      />
    </div>
  );
};
