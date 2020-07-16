import React, { useEffect } from "react";
import "./NoteCard.scss";
import { NewNote } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { ARCHIVE_NOTE, PIN_NOTE } from "../store/actions";
import { useHistory, useLocation } from "react-router-dom";
interface Props {
  note: NewNote;
  showNoteActions: boolean;
}
export const NoteCard: React.FC<Props> = (props: Props) => {
  const { note, showNoteActions } = props;
  const { id, body, title, type } = note;
  const dispatch = useDispatch();
  const history = useHistory();
  // let location = useLocation();
  // const type = location.pathname.substr(1);

  const archiveNote = (e: any) => {
    e.stopPropagation();
    const archivedNote = { ...note, type: "archivedNotes" };
    dispatch({ type: ARCHIVE_NOTE, payload: archivedNote });
  };

  const pinNote = (e: any) => {
    e.stopPropagation();
    const pinnedNote = { ...note, type: "pinnedNotes" };
    dispatch({ type: PIN_NOTE, payload: pinnedNote });
  };

  const showNote = () => {
    history.push(
      `note/${id}/${encodeURI(title)}/${encodeURI(body)}/${encodeURI(type)}`
    );
  };

  const summary = body != undefined ? body.substring(0, 50) + "..." : "";
  const validatedTitle = title != undefined ? title : "";
  return (
    <div className="note-card" onClick={showNote}>
      <h4 className="title">{validatedTitle}</h4>
      <div className="body">{summary}</div>
      <div className={showNoteActions ? "actions" : "display-none"}>
        <button onClick={archiveNote}>archive</button>
        <button onClick={pinNote}>pin</button>
      </div>
    </div>
  );
};
