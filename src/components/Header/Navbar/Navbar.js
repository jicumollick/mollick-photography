import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./Navbar.css";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div className="">
      <nav className="navbar  container-fluid navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <CustomLink className="navbar-brand" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="40"
              fill="currentColor"
              className="bi bi-camera"
              viewBox="0 0 16 16"
            >
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
            </svg>
          </CustomLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <CustomLink className="nav-link" to={"/home"}>
                  Home
                </CustomLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/#services"}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to={"/about"}>
                  About
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to={"/blog"}>
                  Blog
                </CustomLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={"/#contact"}>
                  Contact
                </a>
              </li>
            </ul>

            <span className="text-light ms-auto">
              {user ? user?.email : ""}
            </span>
            <button
              className="btn btn-outline-success text-light my-2 my-sm-0 ms-auto"
              type="submit"
              onClick={user ? () => signOut(auth) : navigate("/login")}
            >
              {user ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
