import "./style.css";
import React from "react";

class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  };
  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };
  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };
  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };
  render() {
    const style =
      this.state.shoppingCart === 0
        ? {
            opacity: 0.3,
          }
        : {};

    const { shoppingCart, availableProducts } = this.state;

    return (
      <>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span style={style}>{shoppingCart}</span>
        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>BUY</button>}
      </>
    );
  }
}

export default App;
