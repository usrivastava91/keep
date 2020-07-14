import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewNote } from "../types";
import { NoteCard } from "./NoteCard";
interface Props {
  notes: NewNote[];
}
export const NotesGrid: React.FC<Props> = (props: Props) => {
  const { notes } = props;
  return (
    <>
      {notes.map((note: NewNote) => {
        const { id, body, title } = note;
        return <NoteCard key={id} body={body} id={id} title={title}></NoteCard>;
      })}
    </>
  );
};
