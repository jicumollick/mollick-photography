import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = (event) => {
    setRegistered(event.target.checked);
  };
  return (
    <div className="py-5 login">
      <h2 className="py-5">Please {registered ? "Login" : "Register"}</h2>
      <form className="w-50 mx-auto">
        {registered ? (
          ""
        ) : (
          <div className="form-group">
            <label for="name">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
            />
          </div>
        )}
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        {registered ? (
          ""
        ) : (
          <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
            />
          </div>
        )}
        <div className="form-check py-4">
          <label className="form-check-label " for="exampleCheck1">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={handleRegister}
            />
            Already Have An Account ?
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          {registered ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Login;
