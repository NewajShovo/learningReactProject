import React, { Component } from "react";

class NameList extends Component {
  render() {
    const names = ["Bruce", "Clark", "Diana"];
    const nameList = names.map((name) => <h2>{name}</h2>);
    return (
      <div>
        {names.map((name) => (
          <h2 key={name}>{name}</h2>
        ))}
      </div>
    );
    // return <div>{nameList}</div>;
  }
}

export default NameList;
