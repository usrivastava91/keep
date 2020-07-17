import React from "react";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { SEARCH, SHOW_SEARCH_RESULTS } from "../store/actions";
interface Props {}
export const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const search = (e: any) => {
    dispatch({ type: SHOW_SEARCH_RESULTS, payload: true });
    dispatch({ type: SEARCH, payload: e.target.value });
  };
  const cancelSearch = (e: any) => {
    const searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      dispatch({ type: SHOW_SEARCH_RESULTS, payload: true });
    } else {
      dispatch({ type: SHOW_SEARCH_RESULTS, payload: false });
    }
  };

  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" onChange={search} onBlur={cancelSearch} />
        <button>cancel</button>
      </div>
    </div>
  );
};
