import React, { useEffect, useRef } from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, SHOW_SEARCH_RESULTS, SHOW_SIDE_BAR } from "../store/actions";
import { useLocation } from "react-router-dom";
interface Props {}
export const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const activeNotes = useSelector((state: any) => {
    return state.activeNotes;
  });
  const archivedNotes = useSelector((state: any) => {
    return state.archivedNotes;
  });
  const pinnnedNotes = useSelector((state: any) => {
    return state.pinnedNotes;
  });
  //Getting all the notes from the state here and calling useEffect whenever there is a change
  //in the notes' state. this has to be done because the SEARCH effect is being fired before
  //the notes are being added to the state.
  const notes = [...activeNotes, ...archivedNotes, ...pinnnedNotes];
  useEffect(() => {
    if (localStorage.getItem("searchQuery") != null) {
      const current: any = searchInput.current!;
      current.value = localStorage.getItem("searchQuery");
      dispatch({ type: SEARCH, payload: current.value });
      dispatch({ type: SHOW_SEARCH_RESULTS, payload: true });
    }
  }, [notes]);
  let location = useLocation();
  const title = location.pathname.substr(1);
  const search = (e: any) => {
    localStorage.setItem("searchQuery", e.target.value);
    dispatch({ type: SEARCH, payload: e.target.value });
    dispatch({ type: SHOW_SEARCH_RESULTS, payload: true });
  };
  const cancelSearch = (e: any) => {
    const searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      dispatch({ type: SHOW_SEARCH_RESULTS, payload: true });
    } else {
      dispatch({ type: SHOW_SEARCH_RESULTS, payload: false });
      localStorage.removeItem("searchQuery");
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
        ref={searchInput}
        onChange={search}
        onBlur={cancelSearch}
      />
      <div></div>
    </div>
  );
};
