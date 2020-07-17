import React, { useState } from "react";
import { Modal } from "../ui-components/Modal";
import { Form, Field } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { CREATE_NOTE } from "../store/actions";
import uuid from "../utils/uuid";
import "./CreateBox.scss";
import { CSSTransition } from "react-transition-group";

interface Props {}
export const CreateBox: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const createNote = (values: any) => {
    const id = uuid();
    if (Object.keys(values).length === 0) {
      hideModal();
    } else {
      const note = { ...values, type: "activeNotes", id };
      dispatch({ type: CREATE_NOTE, payload: { ...note } });
      hideModal();
    }
  };

  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <CSSTransition in={show} timeout={400} classNames="sidebar">
        <Modal triggerName="Write a note" showModal={showModal} show={show}>
          <Form
            onSubmit={createNote}
            render={({ handleSubmit }: any) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="title"
                    component="input"
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <Field
                    name="body"
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
      </CSSTransition>
    </>
  );
};
