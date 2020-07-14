import React, { useEffect } from "react";
import "./NoteCard.scss";
import { NewNote } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { ARCHIVE_NOTE } from "../store/actions";
interface Props {
  note: NewNote;
  showNoteActions: boolean;
}
export const NoteCard: React.FC<Props> = (props: Props) => {
  const { note, showNoteActions } = props;
  const dispatch = useDispatch();
  const archiveNote = () => {
    console.log("archive");
    dispatch({ type: ARCHIVE_NOTE, payload: note });
  };
  const summary = note.body.substring(0, 50);
  return (
    <div className="note-card">
      <h4 className="title">{note.title}</h4>
      <div className="body">{summary + "..."}</div>
      <div className={showNoteActions ? "actions" : "display-none"}>
        <button onClick={archiveNote}>archive</button>
        <button>pin</button>
      </div>
    </div>
  );
};
