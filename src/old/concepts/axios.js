import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

Axios.defaults.baseURL = "https://api.github.com";

//https://stackoverflow.com/questions/55020041/react-hooks-useeffect-cleanup-for-only-componentwillunmount
// Axios.interceptors.request.use(function(config) {
//   // Do something before request is sent
//   console.log("Request interceptor: ", config);
//   return config;
// });

Axios.interceptors.response.use(
  res => {
    //console.log("Response interceptor: ", res);
    return res;
  },
  err => {
    //console.log("Error Response interceptor: ", err);
  }
);

let streamData = null;

const GetData = streamData => {
  let temp = streamData.data ? streamData.data[0] : [];
  console.log("stream data inside function ", temp.login);
  let a = temp.login ? temp.login : "";
  return a;
};

// const getData = streamData => {
//   let temp = streamData.data ? streamData.data[0] : [];
//   console.log("inside function ", temp.login);
//   let a = temp.login ? temp.login : "";
//   return a;
// };

/**
 * update cycle wont work if second param is []
 * only mount and unmount will work for []
 * unmount will be called at mounting and final unmount
 * mount will be called once while mounting
 *
 */
/**
 * update cycle work for specific state value changes
 *  if second param is [props.ele]
 * mount and unmount will work as normal
 * componentDidUpdate works only for specific state value mentioned
 * as second param, does not work for other state value updates
 *
 */
const HookFunc = props => {
  console.log(props);

  //only change for state changes done by hook value in state
  useEffect(
    props => {
      console.log("HOOK Called After Each Life Cycle");
      let streamFunction = () => {
        streamData = Axios("/users/hadley/orgs")
          .then(res => {
            streamData = res;
            console.log("res from stream : ", res);
            // let abc = GetData(streamData); // = {streamData} />
            let abc = GetData(streamData); // = {streamData} />
            // let abc = <GetData streamData/>;
            console.log("abc : ", abc);
            document.getElementById("abc").innerHTML = abc;
            return streamData;
          })
          .catch(res => {
            console.log("error res : ", res);
          });
      };
      streamFunction();
      return () => {
        console.log("unmount completed", props);
      };
    },
    [props.hook1]
  ); //props.hook

  return (
    <>
      <div onClick={props.hookClick}>hook Click {props.children}</div>
      <div onClick={props.unmountClick}>unmount Click</div>
    </>
  );
};
const DummyFunc = props => {
  console.log(props);

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return (
    <>
      <div onClick={props.dummyClick}>dummy Click</div>
    </>
  );
};

const HookFuncComponent = () => {
  const [hook, setHookState] = useState(true);
  const [hook1, setHookState1] = useState(1);
  const [dummy, setDummyState] = useState(true);
  const [unmount, setunmountState] = useState(true);

  const changeHookState = () => {
    setHookState1(hook1 + 1);
  };
  const changeDummyState = () => {
    setDummyState(!dummy);
  };
  const unmountState = () => {
    setunmountState(!unmount);
  };
  return (
    <>
      {dummy ? (
        <DummyFunc dummyClick={changeDummyState} />
      ) : (
        <div>Unmounted ALL</div>
      )}
      {hook ? (
        <HookFunc
          hook1={hook1}
          hookClick={changeHookState}
          unmountClick={unmountState}
        >
          {" "}
          {hook1}{" "}
        </HookFunc>
      ) : (
        ""
      )}
      <div id="abc">
        <GetData />
      </div>
    </>
  );
};

class AxiosDemo extends Component {
  state = {
    hook: true,
    dummy: true,
    unmount: true
  };
  changeHookState = () => {
    this.setState({ hook: !this.state.hook });
  };
  changeDummyState = () => {
    this.setState({ dummy: !this.state.dummy });
  };
  unmountState = () => {
    this.setState({ unmount: !this.state.unmount });
  };
  componentDidUpdate() {
    console.log("componentDidUpdate before hook", this.state);
  }
  componentDidMount() {
    console.log("componentDidMount before hook", this.state);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount before hook", this.state);
  }
  render() {
    return (
      <>
        {this.state.dummy ? (
          <DummyFunc dummyClick={this.changeDummyState} />
        ) : (
          <div>Unmounted ALL</div>
        )}
        <HookFunc
          props={this.state.hook}
          hookClick={this.changeHookState}
          unmountClick={this.unmountState}
        />
        <div id="abc">
          <GetData props={this.state} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<HookFuncComponent />, document.getElementById("root"));
