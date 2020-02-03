import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import MyButton from "../utils/MyButton";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    position: ["balcony", "medium", "star"],
    desc: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
      "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
      "has been the industrys standard dummy text Ipsum is simply dummy text of the printing and typesetting"
    ],
    linkto: ["http://google", "http://yahoo", "http://facebook"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_button">
              <MyButton
                color="secondary"
                text="purchase ticket"
                variant="contained"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper">
          <div className="pricing_section">
            <h2>Princing</h2>
            <div className="pricing_wrapper">{this.showBoxes()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
