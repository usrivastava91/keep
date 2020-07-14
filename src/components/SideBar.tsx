import React from "react";
import "./SideBar.scss";
import { useHistory } from "react-router-dom";

interface Props {}
export const SideBar: React.FC<Props> = () => {
  const history = useHistory();
  const selectionMade = (e: any) => {
    const sectionSelected = e.target.getAttribute("data-section");
    history.push(sectionSelected);
  };
  return (
    <div className="sidebar">
      <div className="items" data-section="active" onClick={selectionMade}>
        Active Notes
      </div>
      <div className="items" data-section="archieved" onClick={selectionMade}>
        Archived Notes
      </div>
    </div>
  );
};
