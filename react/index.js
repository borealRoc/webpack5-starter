import React, { Component } from "react";
import ReactDom from "react-dom";

class ReactApp extends Component {
  render() {
    return <div>Hello React!</div>;
  }
}

ReactDom.render(<ReactApp />, document.getElementById("reactRoot"));
