import React from "react";
import Ideate from "./components/sub-apps/Ideate";
import Homepage from "./components/sub-apps/Homepage";
import { Link, Switch, Route } from "react-router-dom";

export default () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Container APP!</h1>
      <hr />
      <nav>
        <Link to="/">Home</Link>
        <span style={{ paddingLeft: "16px" }}></span>
        <Link to="/ideate">Ideate</Link>
      </nav>
      <hr />
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/ideate" exact component={Ideate}></Route>
      </Switch>
      <hr />
    </div>
  );
};
