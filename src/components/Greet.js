import React, { Component } from "react";

function Greet(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
}

// const Greet = () => <h1>Hello Shovo</h1>;

export default Greet;
