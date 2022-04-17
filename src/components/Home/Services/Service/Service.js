import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, img, description } = service;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top img-fluid card-img" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <a href="#home" className="btn btn-primary">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
