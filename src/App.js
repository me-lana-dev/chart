import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Chart from "./pages/Chart";
import Indicators from "./pages/Indicators";
import Purchases from "./pages/Purchases";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__link">
          <Link to="/chart">Chart</Link>
        </div>
        <div className="navbar__link">
          <Link to="/indicators">Indicators</Link>
        </div>
        <div className="navbar__link">
          <Link to="/purchases">Purchases</Link>
        </div>
      </div>

      <Switch>
        <Route path="/chart">
          <Chart />
        </Route>
        <Route path="/indicators">
          <Indicators />
        </Route>
        <Route path="/purchases">
          <Purchases />
        </Route>
        <Redirect to="/chart"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
