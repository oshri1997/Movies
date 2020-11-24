import React from "react";

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="col col-sm-4">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="form-control"
        placeholder="type to search"
      ></input>
    </div>
  );
};

export default SearchBox;
