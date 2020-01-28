import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({
        headerShow: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none"
        }}
      >
        <ToolBar>
          <div className="logo_wrapper">
            <div className="title_top font-rightous">The Venue</div>
            <div className="title_bottom">Musical Event</div>
          </div>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
