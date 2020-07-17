import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotesGrid } from "./NotesGrid";
import { NewNote } from "../types";
interface Props {}
export const ArchivedNotes: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_ARCHIVED_NOTES", payload: {} });
  }, []);

  const archivedNotes = useSelector((state: any) => {
    return state.archivedNotes;
  });
  const searchResults = useSelector((state: any) => {
    return state.search.searchResults;
  });
  const showSearchResults = useSelector((state: any) => {
    return state.search.showSearchResults;
  });
  const archivedNotesSearchResults = searchResults.filter((result: NewNote) => {
    return result.type === "archivedNotes";
  });
  return (
    <div className="archived-notes">
      <NotesGrid
        notes={
          showSearchResults === true
            ? archivedNotesSearchResults
            : archivedNotes
        }
      />
    </div>
  );
};
