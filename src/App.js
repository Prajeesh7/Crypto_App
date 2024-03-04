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
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/news" element={<News />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </Layout>
        </div>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ textAlign: "center", color: "white" }}
          >
            Crytoworld <br/>
             All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchange'>Exchange</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
