import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => this.props.greetHandler("Child")}>
          Greet Parent
        </button>
      </div>
    );
  }
}

export default ChildComponent;
