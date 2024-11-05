import React, { Component } from "react";

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
          Hovered {this.state.hoverCount} times
        </h2>
      </div>
    );
  }
}

export default HoverCounter;
