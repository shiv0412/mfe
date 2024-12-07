import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { History } from 'history';
import Landing from "./components/Landing";

interface AppProps{
  history:History
}

const App:React.FC<AppProps>= ({ history }) => {
  
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;