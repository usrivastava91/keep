import React from "react";
import "./Header.scss";
import { SearchResults } from "./SearchResults";
import { useDispatch } from "react-redux";
import { SEARCH } from "../store/actions";
interface Props {}
export const Header: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const search = (e: any) => {
    dispatch({ type: SEARCH, payload: e.target.value });
  };
  const cancelSearch = (e: any) => {
    const searchQuery = e.target.value;
    if (searchQuery.length === 0) {
    }
  };
  const searchStart = () => {
    console.log("yes");
  };
  return (
    <div className="header">
      <div className="search-bar">
        <input
          type="text"
          onChange={search}
          onBlur={cancelSearch}
          onFocus={searchStart}
        />
        <button>cancel</button>
      </div>
    </div>
  );
};
