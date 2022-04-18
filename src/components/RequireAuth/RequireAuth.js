import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, Navigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init.js";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  let location = useLocation();
  if (loading) {
    return (
      <div
        className=" w-100 d-flex align-items-center justify-content-center"
        style={{ height: "300px" }}
      >
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
