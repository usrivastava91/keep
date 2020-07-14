import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotesGrid } from "./NotesGrid";
interface Props {}
export const ArchivedNotes: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_ARCHIVED_NOTES", payload: {} });
  }, []);

  const archivedNotes = useSelector((state: any) => {
    return state.archivedNotes;
  });
  return (
    <div className="archived-notes">
      <NotesGrid showNoteActions={false} notes={archivedNotes} />
    </div>
  );
};
