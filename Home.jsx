import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div classNameName="hero">
      <div className="card text-bg-dark text-white border-0">
        <img src="/Assets/BCK.jpg" className="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-centre">
            <div classNameName="container">
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2">
            CHECK OUT ALL THE TREND S
          </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
