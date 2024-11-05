import React, { Component } from "react";

class user extends Component {
  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default user;
