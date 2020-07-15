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
    console.log("reloaded");
    dispatch({ type: "GET_ACTIVE_NOTES", payload: {} });
  }, []);

  const activeNotes = useSelector((state: any) => {
    return state.activeNotes;
  });
  return (
    <div className="active-notes">
      <div className="create-box">
        <CreateBox />
      </div>
      <div className="grid-section">
        <PinnedNotes />
        <NotesGrid showNoteActions={true} notes={activeNotes} />
      </div>
    </div>
  );
};
