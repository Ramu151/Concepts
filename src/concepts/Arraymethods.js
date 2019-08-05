import React from "react";

class ArrayMethods extends React.Component {
  sampleArr = [1, 2, 3, 4, 5];
  newArray = [];
  getMap = () => {
    this.newArray = this.sampleArr.map(ele => {
      return ele * 2;
    });
    console.log("array methods getMap", this.newArray);
  };
  findIndexEle = () => {
    this.newArray = this.sampleArr.findIndex(ele => {
      if (ele === 4) {
        return ele;
      }
    });
    console.log("array methods findIndexEle", this.newArray);
  };
  filterEle = () => {
    this.newArray = this.sampleArr.filter(ele => {
      if (ele === 4) {
        return ele;
      }
    });
    console.log("array methods filterEle", this.newArray);
  };
  findEle = () => {
    this.newArray = this.sampleArr.find(ele => {
      if (ele === 3) {
        return ele;
      }
    });
    console.log("array methods findEle", this.newArray);
  };
  reduceEle = () => {
    this.newArray = this.sampleArr.reduce((a, b) => {
      return a + b;
    });
    console.log("array methods reduceEle", this.newArray);
  };
  concatEle = () => {};
  spliceEle = () => {
    let newArray = [1, 2, 3, 4, 5];
    console.log("array methods spliceEle", this.sampleArr);
    newArray.push(...this.sampleArr.splice(0, 2));
    //3,4,5 output
    console.log("array methods spliceEle", newArray);
  };

  sliceEle = () => {
    console.log("array methods sliceEle", this.sampleArr);
    this.newArray = this.sampleArr.slice(0, 2);
    //1,2 o/p
    console.log("array methods sliceEle", this.newArray);
  };
  componentDidMount() {
    this.getMap();
    this.filterEle();
    this.findIndexEle();
    this.reduceEle();
    this.findEle();
    this.spliceEle();
    this.sliceEle();
  }
  render() {
    console.log("array methods render", this.newArray);
    return "";
  }
}

export default ArrayMethods;
