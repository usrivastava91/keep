import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewNote } from "../types";
import { NoteCard } from "./NoteCard";
import "./NotesGrid.scss";
interface Props {
  notes: NewNote[];
  showNoteActions: boolean;
}
export const NotesGrid: React.FC<Props> = (props: Props) => {
  const { notes, showNoteActions } = props;
  return (
    <div className="notes-grid">
      {notes.map((note: NewNote) => {
        const { id } = note;
        return (
          <NoteCard
            showNoteActions={showNoteActions}
            key={id}
            note={note}
          ></NoteCard>
        );
      })}
    </div>
  );
};
