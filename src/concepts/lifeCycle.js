import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
  }

  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    this.setState({ hello: "Geek!" });
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
          <SubTest props={this.state.hello} />
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()", nextProps, nextState);
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

class SubTest extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillReceiveProps(newProps) {
    console.log(this.props, newProps);
  }
  componentWillMount() {
    console.log("sub componentWillMount()");
  }

  componentDidMount() {
    console.log("sub componentDidMount()");
  }

  render() {
    console.log("subrender");
    return "test";
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("sub shouldComponentUpdate()", nextProps, nextState);
    return true;
  }

  componentWillUpdate() {
    console.log("sub componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("sub componentDidUpdate()");
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));
