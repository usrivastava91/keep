import React from "react";
import { useState } from "react";
import "./Modal.scss";
interface Props {
  triggerName: string;
  showModal: any;
  show: boolean;
}
export const Modal: React.FC<Props> = ({
  showModal,
  show,
  triggerName,
  children,
}) => {
  const conditionalShowHideClass = show ? "display-block" : "display-none";
  const overlayClass = show ? "overlay" : "";
  return (
    <div>
      <button className="trigger-button" onClick={showModal}>
        {triggerName}
      </button>
      <div className={conditionalShowHideClass + " " + overlayClass}>
        <section className="modal-main">{children}</section>
      </div>
    </div>
  );
};
