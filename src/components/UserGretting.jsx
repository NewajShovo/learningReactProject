import React, { Component } from "react";

class UserGretting extends Component {
  state = {
    isLoggedIn: true,
  };

  render() {
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Shovo</div>;
    // } else {
    //   message = <div> Welcome Guest</div>;
    // }
    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1> Welcome Shovo</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1> Welcome Guest</h1>
    //     </div>
    //   );
    // }
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Shovo</div>
    // ) : (
    //   <div> Welcome Guest</div>
    // );

    return this.state.isLoggedIn && <div> Welcome Shovo</div>;
  }
}

export default UserGretting;
