import React, { useState } from "react";
import SearchResult from "./SearchResult";
const Search = () => {
  const [image, setImage] = useState("");
  const inputEvent = (e) => {
    const data = e.target.value;
    setImage(data);
  };
  return (
    <>
      <div className="searchBox">
        <div className="search">
          <input
            type="text"
            placeholder="Enter Your Search Here..."
            onChange={inputEvent}
            value={image}
          />
        </div>
        {image === "" ? null : <SearchResult name={image} />}
      </div>
    </>
  );
};

export default Search;
