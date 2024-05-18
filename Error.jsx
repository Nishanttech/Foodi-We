import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="errorPage">
        <h1>Sorry</h1>
        <br />
        <h2 style={{ color: "red", textAlign: "center" }}>
          404 Error : Page Not Found
        </h2>
        <NavLink style={{ margin: "30px 0px" }} to="/">
          Go Back
        </NavLink>
      </div>
    </>
  );
};

export default Error;
