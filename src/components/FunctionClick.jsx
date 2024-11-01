// import React, { Component } from "react";

// export class FunctionClick extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.clickhandler()}>Click</button>
//       </div>
//     );
//   }
// }

// export default FunctionClick;

import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
