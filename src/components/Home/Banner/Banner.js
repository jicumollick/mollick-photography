import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="banner1 col-md-5 d-flex justify-content-end align-items-center">
          <div>
            <h1>
              Welcome to Mollick{" "}
              <span style={{ color: "orangeRed" }}> Photography</span>
            </h1>
            <p>
              <small>Your Trusted Photography partner</small>
            </p>
          </div>
        </div>
        <div className="banner2 col-md-7">
          <img
            src="https://i.ibb.co/QXrpVhS/ezgif-com-gif-maker.png"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
