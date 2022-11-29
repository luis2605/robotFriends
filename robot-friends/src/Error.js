import React, { Component } from "react";

export default class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>That didn't went well....Error</h1>;
    } else return this.props.children;
  }
}
