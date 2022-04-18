import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-sm-12">
            <img
              src="https://i.ibb.co/58DZnYx/IMG-20211003-212100.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-6 col-sm-12 px-5">
            <h2 style={{ color: "orangered" }}>My Goal</h2>
            <p>
              I have a serious goal to acheive in next 5 years. first of all, i
              want to finish this course and start job in 2022, then within 2
              years i want to join in a good company to get more challenges.
              then i want to see myself as a CTO of a tech giant like
              google,amazon,facebook in next 10 years .That's all about me.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
