import React from "react";
import MarketingApp from "./components/sub-apps/MarketingApp";
import DashboardApp from "./components/sub-apps/DashboardApp";
import { Link, Switch, Route } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Container APP!</h1>
      <hr />
      <nav>
        <Link to="/">Home</Link>
        <span style={{ paddingLeft: "16px" }}></span>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Switch>
        <Route path="/" exact component={MarketingApp}></Route>
        <Route path="/pricing" exact component={DashboardApp}></Route>
        <Route path="/dashboard" exact component={DashboardApp}></Route>
      </Switch>
      <hr />
    </div>
  );
};
