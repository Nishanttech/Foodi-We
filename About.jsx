import React from "react";
import about1 from "../src/images/about1.jpg";
import about2 from "../src/images/about2.jpg";
import about3 from "../src/images/about3.jpg";
import about4 from "../src/images/about4.jpg";
import about5 from "../src/images/about5.jpg";
import about6 from "../src/images/about6.webp";
import dish1 from "../src/images/dish1.jpg";
import dish2 from "../src/images/dish2.jpg";
import dish3 from "../src/images/dish3.jpg";
import dish4 from "../src/images/dish4.webp";
import dish5 from "../src/images/dish5.jpg";
import dish6 from "../src/images/dish6.jpg";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const About = () => {
  return (
    <>
      <div className="abt">
        <h1
          style={{
            fontWeight: "bolder",
            textAlign: "center",
            backgroundColor: "#FF9A00",
          }}
        >
          Foodie<strong style={{ color: "green" }}>We</strong>
        </h1>
        <div className="foodie">
          <div
            id="carouselExampleControls"
            className="carousel slide border border-dark rounded"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={dish1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={dish2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={dish3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={dish4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={dish5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={dish6} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="food">
          <img src={about1} alt="" />
          <img src={about2} alt="" />
          <img src={about3} alt="" />
          <img src={about4} alt="" />
          <img src={about5} alt="" />
          <img src={about6} alt="" />
        </div>
        <div className="story">
          <div className="ourmantra">
            <h1
              style={{
                backgroundColor: "black",
                width: "1140px",
                textAlign: "center",
                border: "1px solid black",
                borderRadius: "5px",
              }}
            >
              <strong
                style={{
                  fontWeight: "bolder",
                  fontSize: "30px",
                  fontFamily: "Dancing Script, cursive",
                  color: "green",
                }}
              >
                OUR STORY
              </strong>
            </h1>
          </div>
          <h3>
            <br />
            Founded in 2009 by Adriano Paganini, Foodie We, Inc. is the group
            behind some of India's most beloved concepts and favorite
            neighborhood spots: a Mano, Afterwork Bar, Beretta, Delarosa, El
            Techo, Flores, Lolinda, Starbelly, Super Duper Burgers, The Bird,
            The Tailor's Son, Uno Dos Tacos and Wildseed. Our group creates
            concept-driven restaurants that encompass the spirit of their
            neighborhood. We are servers, chefs, operators and restauranteurs.
            We are bussers, cooks, bartenders and hosts. We are a group of
            restaurants with concepts focused on creating memorable experiences
            for our guests. We are the front of the house, we are Foodie We
          </h3>
        </div>
        <div className="mantra">
          <div className="ourmantra">
            <h1
              style={{
                backgroundColor: "black",
                width: "1120px",
                textAlign: "center",
                border: "1px solid black",
                borderRadius: "5px",
                margin: "0px 15px",
              }}
            >
              <strong
                style={{
                  fontWeight: "bolder",
                  fontSize: "40px",
                  fontFamily: "Dancing Script, cursive",
                  margin: "0px 0px",
                  color: "green",
                }}
              >
                Our Mantra
              </strong>
            </h1>
          </div>
          <div className="carda">
            <div className="cardas">
              <h3>DO WHAT'S RIGHT </h3>
              <h5>
                It’s not always about being right. It’s about doing what’s right
                — from start to finish
              </h5>
            </div>
            <div className="cardas">
              <h3>ROLL UP YOUR SLEEVES</h3>
              <h5>
                Our ambitions are big, yet no job is too small. Our crew is
                known for their smarts, their work ethic, and their straight-up
                scrappiness
              </h5>
            </div>
            <div className="cardas">
              <h3>KEEP IT SIMPLE </h3>
              <h5>
                Simple is always in style. (And for the sake of simplicity,
                we’ll leave it at that.)
              </h5>
            </div>
            <div className="cardas">
              <h3>86 THE BULLSHIT</h3>
              <h5>
                In an industry filled with drama, egos, and pretense, we’ll be
                serving none of that.
              </h5>
            </div>
            <div className="cardas">
              <h3>CONNECT THE DOTS</h3>
              <h5>
                Everyone at Back of the House should think big picture, solve
                the small daily puzzles, and always be thinking one step ahead.
              </h5>
            </div>
            <div className="cardas">
              <h3>HOSPITALITY</h3>
              <h5>
                An unpretentious approach to creating great guest experiences
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
