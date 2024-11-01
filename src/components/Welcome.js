import React, { Component } from "react";

class Welcome extends Component {
  state = {};
  render() {
    return <h1> Class component{this.props.name} </h1>;
  }
}

export default Welcome;
