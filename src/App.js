import React, { Component } from "react";
import "./resources/style.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
