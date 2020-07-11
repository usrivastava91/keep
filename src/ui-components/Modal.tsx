import React from "react";
import { useState } from "react";
import "./Modal.scss";
interface Props {
  triggerName: string;
}
export const Modal: React.FC<Props> = ({ triggerName, children }) => {
  const [show, setShow] = useState(false);
  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };
  const showHideClassName = show ? "display-block" : "display-none";

  return (
    <div className="modal">
      <button onClick={showModal}>{triggerName}</button>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          {/* <button onClick={hideModal}>close</button> */}
        </section>
      </div>
    </div>
  );
};
