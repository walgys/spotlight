import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Languages from "./pages/Languages";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TicketPurchase from "./pages/TicketPurchase";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Languages} />
      <Route path="/home/:lang" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/purchase" component={TicketPurchase} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default App;
