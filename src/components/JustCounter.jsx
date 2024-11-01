import React, { Component } from "react";

class JustCounter extends Component {
  state = {
    // message: "Welcome Visitor",
    count: 0,
  };

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 0,
  //     };
  //   }
  incrementValue() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback Value", this.state.count);
      }
    );
  }

  handlerIncrementFive() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  incrementFive() {
    this.handlerIncrementFive();
    this.handlerIncrementFive();
    this.handlerIncrementFive();
    this.handlerIncrementFive();
    this.handlerIncrementFive();
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default JustCounter;
