import React from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

var style = {
  "text-decoration": "line-through"
};
var style2 = {
  "text-decoration": "none"
};

@observer
class MobxExample extends React.Component {
  @observable loosu = "nags";
  @observable Stream = "";
  @observable todoListValue = "";
  @observable todoList = [];
  @action.bound
  testAction() {
    console.log("action func");
    this.loosu = "valli";
    this.getStream = null;
    this.todoListValue = this.input.value;
    this.todoList.push({
      todoListValue: this.todoListValue,
      strike: true
    });
    this.input.value = "";
    console.log("action func", this.todoList);
  }
  @action.bound
  strikeThrough(index) {
    this.todoList[index].strike = !this.todoList[index].strike;
  }
  @action.bound
  async getApi() {
    let loos = "";
    loos = await fetch("https://api.github.com/users/hadley/orgs").then(res => {
      console.log("fff", res);
      return res.json();
    });
    //   .then(jsonData => {
    //     this.Stream = jsonData;
    //     return jsonData;
    //   });

    //return await fetch("https://api.github.com/users/hadley/orgs").then(res=> res.json())
    console.log("loos", loos);
  }
  async componentDidMount() {
    this.Stream = await this.getApi();
  }
  render() {
    console.log("{count}", this.Stream);

    const count = this.todoList.filter(ele => {
      if (ele.strike == true) {
        console.log("strike count ", ele);
        return ele;
      }
    }).length;
    return (
      <>
        <input type="text" ref={inputEl => (this.input = inputEl)} />
        <input type="button" value={this.loosu} onClick={this.testAction} />
        {count} of {this.todoList.length}
        <ul>
          {this.todoList.map((list, index) => {
            return (
              <li
                style={this.todoList[index].strike ? style2 : style}
                onClick={() => this.strikeThrough(index)}
              >
                {list.todoListValue}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
// let getApi = () => {
//   return(
//   fetch("https://api.github.com/users/hadley/orgs")
//     .then(res => {
//       console.log("fff", res);
//       return res.json();
//     })
//     .then(res => {
//       console.log("ddd", res);
//       return res.id;
//     }))
// }
export default MobxExample;

ReactDOM.render(<MobxExample />, document.getElementById("root"));
