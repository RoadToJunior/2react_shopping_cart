import "./style.css";
import React from "react";

class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  };
  render() {
    return (
      <>
        <button disabled={this.state.shoppingCart ? false : true}>-</button>
        <span> {this.state.shoppingCart} </span>
        <button>+</button>
      </>
    );
  }
}

export default App;
