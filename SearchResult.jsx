import React from "react";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/300x300/?${props.name}`;
  return (
    <>
      <div>
        <img src={img} alt="Image" />
      </div>
    </>
  );
};

export default SearchResult;
