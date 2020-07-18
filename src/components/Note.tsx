import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../ui-components/Modal";
import { Form, Field } from "react-final-form";
import "./NotesGrid.scss";
import { useParams, useHistory } from "react-router-dom";
import { UPDATE_NOTE } from "../store/actions";
interface Props {}
export const Note: React.FC<Props> = (props: Props) => {
  const { id, title, body, type } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", cancelOnEscape, false);
    return () => {
      document.removeEventListener("keydown", cancelOnEscape, false);
    };
  }, []);

  const cancelOnEscape = (e: any) => {
    if (e.keyCode === 27) {
      if (type === "archivedNotes") {
        history.replace("/archived");
      } else {
        history.replace("/active");
      }
    }
  };
  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };
  const editNote = (values: any) => {
    const updatedNote = { ...values, id, type };
    dispatch({ type: UPDATE_NOTE, payload: { updatedNote } });
    if (type === "archivedNotes") {
      history.replace("/archived");
    } else {
      history.replace("/active");
    }
  };
  return (
    <div className="note">
      <Modal triggerName="" showModal={showModal} show={true}>
        <Form
          onSubmit={editNote}
          render={({ handleSubmit }: any) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  initialValue={title}
                  name="title"
                  component="input"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div>
                <Field
                  name="body"
                  initialValue={body}
                  component="textarea"
                  rows={25}
                  type="text"
                  placeholder="Title"
                />
              </div>
              <button className="edit-note-button" type="submit">
                Close
              </button>
            </form>
          )}
        />
      </Modal>
    </div>
  );
};
