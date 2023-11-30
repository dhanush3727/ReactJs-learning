import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" action="" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        placeholder="Search Items"
        id="search"
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
