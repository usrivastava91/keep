import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewNote } from "../types";
import { NoteCard } from "./NoteCard";
import "./NotesGrid.scss";
import { CSSTransition } from "react-transition-group";
interface Props {
  notes: NewNote[];
}
export const NotesGrid: React.FC<Props> = (props: Props) => {
  const { notes } = props;
  return (
    <div className="notes-grid">
      {notes.map((note: NewNote) => {
        const { id } = note;
        return (
          <CSSTransition in={true} timeout={100} classNames="note-card" appear>
            <NoteCard key={id} note={note}></NoteCard>
          </CSSTransition>
        );
      })}
    </div>
  );
};
