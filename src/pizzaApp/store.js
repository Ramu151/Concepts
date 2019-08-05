import React from "react";
import { observable } from "mobx";

class PizzaStore extends React.Component {
  @observable count = {
    small: 0,
    medium: 1,
    large: 0,
    adult: 1,
    children: 0
  };
  @observable disablePizzaAddState = {
    small: false,
    medium: false,
    large: false,
    adult: false,
    children: false
  };
  @observable disablePizzaRemoveState = {
    small: true,
    medium: true,
    large: true,
    adult: true,
    children: true
  };
}

/* export let pizzaConfig = [
  {
    type: "small",
    count: 0,
    price: 100,
    disablePizzaAddState: false,
    disablePizzaRemoveState: true
  },
  {
    type: "medium",
    count: 1,
    price: 200,
    disablePizzaAddState: false,
    disablePizzaRemoveState: true
  },
  {
    type: "large",
    count: 0,
    price: 300,
    disablePizzaAddState: false,
    disablePizzaRemoveState: true
  },
  {
    type: "adult",
    count: 1,
    price: 200,
    disablePizzaAddState: false,
    disablePizzaRemoveState: true
  },
  {
    type: "children",
    count: 0,
    price: 100,
    disablePizzaAddState: false,
    disablePizzaRemoveState: true
  }
]; */

const pizzaStore = new PizzaStore();

export { pizzaStore };
