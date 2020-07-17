import React from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, SHOW_SEARCH_RESULTS, SHOW_SIDE_BAR } from "../store/actions";
interface Props {}
export const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();

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
      <button onClick={toggleSideBar}>
        <i className="fas fa-bars"></i>
      </button>
      <input type="text" onChange={search} onBlur={cancelSearch} />
      <div>{}</div>
    </div>
  );
};
