import React, { useState } from "react";
import { Modal } from "../ui-components/Modal";
import { Form, Field } from "react-final-form";
import "./CreateBox.scss";
interface Props {}
export const CreateBox: React.FC<Props> = () => {
  const createNote = (values: any) => {
    console.log(values);
    hideModal();
  };

  const [show, setShow] = useState(false);
  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <Modal triggerName="Write a note" showModal={showModal} show={show}>
        <Form
          onSubmit={createNote}
          render={({ handleSubmit }: any) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="note-title"
                  component="input"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div>
                <Field
                  name="note-body"
                  component="textarea"
                  rows={25}
                  type="text"
                  placeholder="Title"
                />
              </div>
              <button className="create-note-button" type="submit">
                Create Note
              </button>
            </form>
          )}
        />
      </Modal>
    </>
  );
};
