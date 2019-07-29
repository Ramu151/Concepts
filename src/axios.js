import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

Axios.defaults.baseURL = "https://api.github.com";

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
    [props.hook]
  ); //props.hook

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return (
    <>
      <div onClick={props.hookClick}>hookClick</div>
      <div onClick={props.dummyClick}>dummyClick</div>
      <div onClick={props.unmountClick}>unmountClick</div>
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
      <div onClick={props.dummyClick}>dummyClick</div>
    </>
  );
};

// const FunComponent = () => {
//   return (
//     <>
//       <HookFunc />

//       <div id="abc">
//         <GetData />
//       </div>
//     </>
//   );
// };

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
          <DummyFunc dummyClick={this.changeDummyState}/>
          <HookFunc
            props={this.state.hook}
            hookClick={this.changeHookState}
            unmountClick={this.unmountState}
          />
        ) : (
          <div>Unmounted ALL</div>
        )}
        <div id="abc">
          <GetData props={this.state} />
        </div>
      </>
    );
  }
}

ReactDOM.render(<AxiosDemo />, document.getElementById("root"));
