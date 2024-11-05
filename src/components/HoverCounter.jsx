import React, { Component } from "react";

import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  state = {
    hoverCount: 0,
  };

  incrementHover = () => {
    this.setState((prevState) => {
      return { hoverCount: prevState.hoverCount + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementHover}>
          {this.props.name} Hovered {this.state.hoverCount} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter);
