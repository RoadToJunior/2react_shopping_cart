import "./style.css";
import React from "react";

class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  };
  handleRemoveFromCart = () => {
    this.setState({
      shoppindCart: this.state.shoppingCart - 1,
    });
  };
  render() {
    return (
      <>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span> {this.state.shoppingCart} </span>
        <button>+</button>
      </>
    );
  }
}

export default App;
