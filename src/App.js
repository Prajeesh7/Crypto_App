import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
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
        <div className="routes">
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route path="/exchange" element={<Exchange/>}/>
              <Route path="/news" element={<News/>}/>            
            </Routes>
          </Layout>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
