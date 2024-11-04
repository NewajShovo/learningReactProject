import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComponent";

export class ParentComp extends Component {
  state = {
    name: "Shovo",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Shovo",
      });
    }, 2000);
  }

  render() {
    console.log("*******Parent Comp render ********");
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
