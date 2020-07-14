import React, { useEffect } from "react";
import { CreateBox } from "./CreateBox";
import "./ActiveNotes.scss";
import { NotesGrid } from "./NotesGrid";
import { getActiveNotes } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

import { NewNote } from "../types";

interface Props {}
export const ActiveNotes: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const activeNotes = useSelector((state: any) => {
    return state.activeNotes;
  });
  useEffect(() => {
    console.log("reloaded");
    dispatch({ type: "GET_ACTIVE_NOTES", payload: {} });
  }, []);

  return (
    <div className="active-notes">
      <div className="create-box">
        <CreateBox />
      </div>
      <div className="notes-grid">
        <NotesGrid notes={activeNotes.length > 0 ? activeNotes : []} />
      </div>
    </div>
  );
};
