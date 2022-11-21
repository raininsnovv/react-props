import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Nav />
        <Body />
      </div>
    </div>
  );
};

export default App;
