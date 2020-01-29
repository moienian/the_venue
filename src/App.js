import React, { Component } from "react";
import "./resources/style.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNFO from "./components/venueNFO";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Featured />
        <VenueNFO />
      </div>
    );
  }
}

export default App;
