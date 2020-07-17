import React, { useEffect } from "react";
import "./NoteCard.scss";
import { NewNote } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { ARCHIVE_NOTE, PIN_NOTE, DELETE_NOTE } from "../store/actions";
import { useHistory, useLocation } from "react-router-dom";
interface Props {
  note: NewNote;
}
export const NoteCard: React.FC<Props> = (props: Props) => {
  const { note } = props;
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
  const deleteNote = (e: any) => {
    e.stopPropagation();
    const deletedNote = { id, type };
    dispatch({ type: DELETE_NOTE, payload: { deletedNote } });
  };
  const summary = body != undefined ? body.substring(0, 50) + "..." : "";
  const validatedTitle = title != undefined ? title : "";
  console.log(type);
  return (
    <div className="note-card" onClick={showNote}>
      <h4 className="title">{validatedTitle}</h4>
      <div className="body">{summary}</div>
      <div className="actions">
        <button
          className={
            type === "archivedNotes" ? "display-none" : "display-block"
          }
          onClick={archiveNote}
        >
          archive
        </button>
        <button
          className={type === "pinnedNotes" ? "display-none" : "display-block"}
          onClick={pinNote}
        >
          pin
        </button>
        <button onClick={deleteNote}> delete</button>
      </div>
    </div>
  );
};
