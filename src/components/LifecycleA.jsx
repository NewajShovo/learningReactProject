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

  shouldComponentUpdate() {
    console.log("LivecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LivecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LivecycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "leo Shovo",
    });
  };

  render() {
    console.log("LivecycleA Render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifecycleA;
