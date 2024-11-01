import React, { Component } from "react";

class Welcome extends Component {
  state = {};
  render() {
    const { name } = this.props.name;
    const { state1, state2 } = this.state;
    return <h1> Class component{name} </h1>;
  }
}

export default Welcome;
