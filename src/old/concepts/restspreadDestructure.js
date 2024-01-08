import Concepts from "./concepts";

/** spread- to copy/clone object or array immutabley,
 * shallow copy
 *
 *  destructure- allows to access/get values easily form array/object
 * const printName = ({name}) => {
    console.log(name);
  }
  printName({name: 'Max', age: 28}); // prints 'Max')
  only pulls out needed value from multiple values
  destructure only pulls out needed value 

  rest- form an array with list of arguments passed to
  a function
 */

class TripleDot extends Concepts {
  render() {
    const destructure = { name: "rama", age: 12 };
    let { age } = destructure;

    /**cloningobject using spread and object.assign
     * not copying reference but create new element
     */
    let spread = { ...destructure, gender: "male" };
    spread.name = "murthi";

    let spread1 = Object.assign({ ...destructure, gender: "male" });
    spread1.name = "";

    console.log("spread ", spread1, spread, age);
    console.log("render: ", this.state.age);
    return "";
  }
}

export default TripleDot;
