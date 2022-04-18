import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { price, title, img, description } = service;
  return (
    <div className="col">
      <div
        className="card"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <img src={img} className="card-img-top img-fluid card-img" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h4>Price: ${price} </h4>
          <p className="card-text">{description}</p>
          <Link to="/checkout" className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
