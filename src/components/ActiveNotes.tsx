import React from "react";
import { CreateBox } from "./CreateBox";
import "./ActiveNotes.scss";
import { NotesGrid } from "./NotesGrid";
interface Props {}
export const ActiveNotes: React.FC<Props> = () => {
  return (
    <>
      <div className="createBox">
        <CreateBox />
      </div>
      <div className="notes-grid">
        <NotesGrid />
      </div>
    </>
  );
};
