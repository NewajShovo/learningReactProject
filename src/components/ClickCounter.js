import React, { Component } from "react";

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
        {" "}
        Clicked {this.state.count} times
      </button>
    );
  }
}

export default ClickCounter;
