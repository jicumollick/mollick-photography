import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import auth from "../../Firebase/Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // for create user
  const [createUserWithEmailAndPassword, user, loading, error1] =
    useCreateUserWithEmailAndPassword(auth);
  // for login user
  const [signInWithEmailAndPassword, user1, loading1, error2] =
    useSignInWithEmailAndPassword(auth);

  const [registered, setRegistered] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted", email, password);
    if (registered) {
      // login

      signInWithEmailAndPassword(email, password);
    } else {
      // sign up
      createUserWithEmailAndPassword(email, password);

      setRegistered(true);
      navigate("/login");
    }
  };
  const handleRegister = (event) => {
    setRegistered(event.target.checked);
  };

  if (error1) {
    setError(error1);
    return;
  }
  if (error2) {
    setError(error2);
    console.log(error);
    return;
  }
  if (user1) {
    return navigate("/home");
  }

  return (
    <div className="py-5 login">
      <h2 className="py-5">Please {registered ? "Login" : "Register"}</h2>
      <form className="w-50 mx-auto" onSubmit={handleFormSubmit}>
        {registered ? (
          ""
        ) : (
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
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
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onBlur={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Password</label>
          <input
            onBlur={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Password"
            required
          />
        </div>
        {registered ? (
          ""
        ) : (
          <div className="form-group">
            <label htmlFor="exampleInputPassword3">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword3"
              placeholder="Confirm Password"
            />
          </div>
        )}
        <div className="form-check py-4">
          <label className="form-check-label " htmlFor="exampleCheck1">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={handleRegister}
            />
            Already Have An Account ?
          </label>
        </div>
        <p className="text-danger">{error ? error : ""}</p>
        <button type="submit" className="btn btn-primary">
          {registered ? "Login" : "Register"}
        </button>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
