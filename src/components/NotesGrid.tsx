import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewNote } from "../types";
import { NoteCard } from "./NoteCard";
interface Props {}
export const NotesGrid: React.FC<Props> = () => {
  const notes: NewNote[] = useSelector((state: any) => state.activeNotes);
  debugger;
  return (
    <>
      {notes.map((note: NewNote) => {
        const { id, title, body } = note;
        return <NoteCard id={id} title={title} body={body}></NoteCard>;
      })}
    </>
  );
};
