import React from "react";
import { pizzaStore } from "./store";
import { observer } from "mobx-react";
//https://www.freecodecamp.org/news/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56/
@observer
class Pizza extends React.Component {
  renderUI = () => {
    let ui = "";
    for (let item in pizzaStore.count) {
      return (ui += (
        <div>
          <input type="button" value="-" />
          {pizzaStore.count[item]}
          <input type="button" value="+" />
        </div>
      ));
    }
    return "";
  };

  render() {
    const minimumPrice = 200;
    const pizzaPrice = {
      small: 100,
      medium: 200,
      large: 300
    };
    const maxPerPerson = {
      adult: 200,
      children: 100
    };

    return (
      <div>
        min: {minimumPrice}
        {this.renderUI()}
      </div>
    );
  }
}
export { Pizza };

//let pizzaSmall = Object.entries(pizzaStore.count);
//console.log(...pizzaSmall);

// const pizzaSmallEle = pizzaStore.map(ele => {
//   //console.log(ele);
//   return (
//     <div>
//       <input type="button" value="-" />
//       <span />
//       <input type="button" value="+" />
//     </div>
//   );
// });
