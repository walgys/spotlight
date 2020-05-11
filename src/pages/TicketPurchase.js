import React from "react";
import { Redirect } from "react-router-dom";

const TicketPurchase = () => {
  const redirectToLogin = true;
  return (
    <div>
      {redirectToLogin ? <Redirect to="/Login" /> : <h1>TicketPurchase</h1>}
    </div>
  );
};

export default TicketPurchase;
