import React, { Component } from "react";

import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <button onClick={this.incrementCount}>
        {this.props.name}
        Clicked {this.state.count} times
      </button>
    );
  }
}

export default UpdatedComponent(ClickCounter);
