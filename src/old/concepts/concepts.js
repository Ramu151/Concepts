import React from "react";
// import ReactDOM from "react-dom";
// import DerivedClass from "./derivedClass";
import ArrayMethods from "./Arraymethods";

class Concepts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { age: 9 };
    this.sasi = 0;
  }
  checkSetStateFunction(val) {
    this.setState({ age: val });
    console.log("check state", this.state.age, val, this.sasi);
  }
  // handleStateCbk = () => {
  //   this.setState({ age: 10 });
  //   console.log("callback state", this.state.age);
  // };

  componentDidMount() {
    let cbk = () => {
      console.log("sync update state : ", this.state.age);
      this.checkSetStateFunction();
      console.log("componentdidmount: ", this.state.age);
    };

    // this.setState(state => {
    //   state.age = "11";
    //   console.log('isasync', this.state.age)
    // }, cbk);
    this.setState({ age: 11 });
    console.log("isasync not update state immediately", this.state.age);
    /**in above state update state not updates immediately
     * bcoz setstate is async
     */
    /** to make state changes work sync use set state cbk function */
    this.setState(state => {
      state.age = 21;
      console.log(
        "async also while using function in setstate",
        this.state.age
      );
    }, cbk);
  }
  render() {
    //1. this.setState({age:this.state.age})

    /** this line will cause infinite loop as
     * render will be called repeatedly due to setstate*/

    // 2.this.setState(() => {
    //   console.log("render infinite", this.state.age);
    // }, this.handleStateCbk);

    /** above snippet causes cross origin error, one cannot change
     * state value inside render or update state inside render using
     * a callback function outside a render function
     */

    return <ArrayMethods />;
  }
}

// class DerivedClass extends Concepts {
//   age = 22;

//   derivedClass = () => {
//     console.log("from derived class");
//     this.setState({ age: 22 });
//     this.checkSetStateFunction(55);
//   };

//   render() {
//     return <input type="button" value="derived" onClick={this.derivedClass} />;
//   }
// }

export default Concepts;
