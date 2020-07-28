import React, { useState } from "react";
import { Modal } from "../ui-components/Modal";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { CREATE_NOTE } from "../store/actions";
import uuid from "../utils/uuid";
import "./CreateBox.scss";
import { CSSTransition } from "react-transition-group";

interface Props {}
export const CreateBox: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const createNote = (values: any, formAPI: any) => {
    const { reset } = formAPI;
    const id = uuid();
    if (Object.keys(values).length === 0) {
      hideModal();
    } else {
      const note = { ...values, type: "activeNotes", id };
      dispatch({ type: CREATE_NOTE, payload: { ...note } });
      hideModal();
    }
    setTimeout(() => {
      reset();
    }, 0);
  };

  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <CSSTransition in={show} timeout={100} classNames="modal">
        <Modal triggerName="new note" showModal={showModal} show={show}>
          <Form
            onSubmit={createNote}
            render={({ handleSubmit, reset }: any) => (
              <form
                onSubmit={(event) => {
                  const promise = handleSubmit(event);
                  promise &&
                    promise.then(() => {
                      reset();
                    });
                  return promise;
                }}
              >
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
                    placeholder="take a note..."
                  />
                </div>
                <button className="create-note-button" type="submit">
                  Close
                </button>
              </form>
            )}
          />
        </Modal>
      </CSSTransition>
    </>
  );
};
