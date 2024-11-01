import React, { Component } from "react";

class EventBind extends Component {
  state = {
    Message: "Hello Everyone",
  };

  changeMessae() {
    console.log("hello");
    this.setState({
      Message: "Hello Shovo",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.Message}</div>

        <div>
          <button onClick={this.changeMessae.bind(this)}>Click Here</button>
        </div>

        <div>
          <button onClick={() => this.changeMessae()}>Click Here</button>
        </div>
      </div>
    );
  }
}

export default EventBind;
