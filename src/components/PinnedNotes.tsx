import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotesGrid } from "./NotesGrid";
import { GET_PINNED_NOTES } from "../store/actions";
import { NewNote } from "../types";
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
    <div className="pinned-notes">
      <div className="spacer">pinned notes</div>
      <NotesGrid
        notes={
          showSearchResults === true ? pinnedNotesSearchResults : pinnnedNotes
        }
      />
    </div>
  );
};
