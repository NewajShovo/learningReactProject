import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shovo",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LivecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LivecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LivecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LivecycleB componentDidUpdate");
  }

  render() {
    console.log("LivecycleB Render");
    return <div>Lifecycle B</div>;
  }
}

export default LifeCycleB;
