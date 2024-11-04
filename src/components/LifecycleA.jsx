import React, { Component } from "react";
import LifeCycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shovo",
    };
    console.log("Lifecycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LivecycleA componentDidMount");
  }

  render() {
    console.log("LivecycleA Render");
    return (
      <div>
        <div>Lifecycle A</div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifecycleA;
