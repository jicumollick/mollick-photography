import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <h2>I am Checkout</h2>
    </div>
  );
};

export default Checkout;
