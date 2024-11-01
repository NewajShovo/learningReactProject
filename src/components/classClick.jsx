import React, { Component } from "react";

class classClick extends Component {
  classClickHander() {
    console.log("Button clicked");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.classClickHander()}>Click Here</button>

        {/* <button>Click Here</button> */}
      </div>
    );
  }
}

export default classClick;
