import React from "react";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorMessage = "";

  if (error || error1) {
    errorMessage = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorMessage}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-dark w-50 d-block mx-auto my-3"
        >
          <FcGoogle />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-dark w-50 d-block mx-auto my-3">
          <CgFacebook />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark w-50 d-block mx-auto my-3"
        >
          <AiFillGithub />
          <span className="px-2">GitHub Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
