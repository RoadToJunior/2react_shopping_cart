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
        <button disabled>-</button>
        <span> 0 </span>
        <button>+</button>
      </>
    );
  }
}

export default App;
