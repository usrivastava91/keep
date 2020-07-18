import React from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, SHOW_SEARCH_RESULTS, SHOW_SIDE_BAR } from "../store/actions";
import { useLocation } from "react-router-dom";
interface Props {}
export const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const title = location.pathname.substr(1);
  const search = (e: any) => {
    dispatch({ type: SEARCH, payload: e.target.value });
    dispatch({ type: SHOW_SEARCH_RESULTS, payload: true });
  };
  const cancelSearch = (e: any) => {
    const searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      dispatch({ type: SHOW_SEARCH_RESULTS, payload: true });
    } else {
      dispatch({ type: SHOW_SEARCH_RESULTS, payload: false });
    }
  };

  const sideBarVisibility = useSelector((state: any) => {
    return state.util.showSideBar;
  });
  const toggleSideBar = () => {
    dispatch({ type: SHOW_SIDE_BAR, payload: !sideBarVisibility });
  };
  return (
    <div className="header">
      <div className="title display-flex">
        <i onClick={toggleSideBar} className="fa fa-bars toggle-sidebar"></i>
        <h3>{title}</h3>
      </div>
      <input
        className="search-bar"
        placeholder="search..."
        type="text"
        onChange={search}
        onBlur={cancelSearch}
      />
      <div></div>
    </div>
  );
};
