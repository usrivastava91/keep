import React from "react";
import { Modal } from "../ui-components/Modal";
import "./CreateBox.scss";
import { create } from "domain";
interface Props {}
export const CreateBox: React.FC<Props> = () => {
  const createNote = () => {
    console.log("note created");
  };
  return (
    <div>
      <Modal triggerName="Write a note">
        <form onSubmit={createNote}>
          <label htmlFor="note-title"> Note Title</label>
          <input type="text" id="note-title" name="note-title" />
          <label htmlFor="note-body">Note Body</label>
          <input type="text" id="note-body" name="note-body" />
          <input type="submit" value="create Note" />
        </form>
      </Modal>
    </div>
  );
};
