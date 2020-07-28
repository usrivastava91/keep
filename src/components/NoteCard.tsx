import React from "react";
import "./NoteCard.scss";
import { NewNote } from "../types";
import { useDispatch } from "react-redux";
import {
  ARCHIVE_NOTE,
  PIN_NOTE,
  DELETE_NOTE,
  ADD_NOTE_TO_ACTIVE,
} from "../store/actions";
import { useHistory } from "react-router-dom";
interface Props {
  note: NewNote;
}
export const NoteCard: React.FC<Props> = (props: Props) => {
  const { note } = props;
  const { id, body, title, type } = note;
  const dispatch = useDispatch();
  const history = useHistory();

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

  const addToActive = (e: any) => {
    e.stopPropagation();
    dispatch({ type: ADD_NOTE_TO_ACTIVE, payload: { note } });
  };
  const summary = body != undefined ? body.substring(0, 20) + "..." : "";
  const validatedTitle = title != undefined ? title.substring(0, 15) : "";
  return (
    <div className="note-card" onClick={showNote}>
      <h4 className="title">{validatedTitle}</h4>
      <div className="body">{summary}</div>
      <div className="actions">
        <i
          onClick={archiveNote}
          className={
            type === "archivedNotes"
              ? "display-none"
              : "fa fa-archive cursor-pointer"
          }
        ></i>

        <i
          onClick={pinNote}
          className={
            type === "pinnedNotes"
              ? "display-none"
              : "fa fa-thumb-tack cursor-pointer"
          }
        ></i>
        <i
          onClick={addToActive}
          className={
            type === "activeNotes"
              ? "display-none"
              : "fa fa-bolt cursor-pointer"
          }
        ></i>
        <i onClick={deleteNote} className="fa fa-trash cursor-pointer"></i>
      </div>
    </div>
  );
};
