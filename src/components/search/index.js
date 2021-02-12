import React, { useState } from "react";

const Search = () => {
  return (
    <div className="search-box">
      <input type="text" onChange={(e) => e.target.value} />
    </div>
  );
};

export default Search;
