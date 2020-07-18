import React from "react";
import "./SideBar.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
interface Props {}
export const SideBar: React.FC<Props> = () => {
  const history = useHistory();
  const selectionMade = (e: any) => {
    const sectionSelected = e.target.getAttribute("data-section");
    history.push(sectionSelected);
  };
  const sideBarVisibility = useSelector((state: any) => {
    return state.util.showSideBar;
  });
  return (
    // <div className={sideBarVisibility === true ? "sidebar" : "display-none"}>
    <CSSTransition
      in={sideBarVisibility}
      timeout={100}
      classNames="sidebar"
      appear
    >
      <div className="">
        <div className="items" data-section="active" onClick={selectionMade}>
          Active
        </div>
        <div className="items" data-section="archived" onClick={selectionMade}>
          Archived
        </div>
      </div>
    </CSSTransition>
  );
};
