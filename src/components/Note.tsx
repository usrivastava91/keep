import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../ui-components/Modal";
import { Form, Field } from "react-final-form";
import "./NotesGrid.scss";
import { useParams, useHistory } from "react-router-dom";
interface Props {}
export const Note: React.FC<Props> = (props: Props) => {
  const { id, title, body } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };
  const editNote = () => {
    history.replace("/active");
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
                Edit Note
              </button>
            </form>
          )}
        />
      </Modal>
    </div>
  );
};
