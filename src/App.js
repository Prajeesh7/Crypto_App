import React from "react";
import { Route, Link } from "react-router-dom";
import { Layout, Space, Switch, Typography } from "antd";
import "./App.css";

import {
  Navbar,
  CryptoDetails,
  Cryptocurrencies,
  Exchange,
  Homepage,
  News,
} from "./Component";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchange">
                <Exchange />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
