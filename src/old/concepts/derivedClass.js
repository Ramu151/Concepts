import React from "react";
import Concepts from "./concepts";

class DerivedClass extends Concepts {
  constructor(props) {
    super(props);
    this.age = 22;
  }
  derivedClass = () => {
    console.log("from derived class", ++this.gokul);
    this.setState({ age: 22 });
    this.checkSetStateFunction(55);
  };

  render() {
    return <input type="button" value="derived" onClick={this.derivedClass} />;
  }
}

export default DerivedClass;
