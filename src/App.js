import React from "react";
import { Route, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import './App.css'

import { Navbar } from "./Component";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        
      </div>
      <div className="footer">

      </div>
    </div>
  );
};

export default App;
