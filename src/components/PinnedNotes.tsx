import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotesGrid } from "./NotesGrid";
import { GET_PINNED_NOTES } from "../store/actions";
interface Props {}
export const PinnedNotes: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_PINNED_NOTES, payload: {} });
  }, []);

  const pinnnedNotes = useSelector((state: any) => {
    return state.pinnedNotes;
  });
  return (
    <div className="pinned-notes">
      <div className="spacer">pinned notes</div>
      <NotesGrid showNoteActions={false} notes={pinnnedNotes} />
    </div>
  );
};
