import React from "react";
import logo from "../src/images/logo.jpg";

const Home = () => {
  return (
    <>
      <div className="head">
        <div className="info">
          <h1>
            Get Your Favourite
            <br />
            Food by
            <strong style={{ color: "green" }}> FoodieWe</strong>
          </h1>
          <h3>Delivery in 10 minutes</h3>
        </div>
        <div className="images">
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
