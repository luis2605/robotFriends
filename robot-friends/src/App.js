import React, { Component, Fragment } from "react";
import "./app.css";
import Card from "./Card";
import { robots } from "./robots";
import SearchBox from "./Searchbox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <>
        <div className="container-input">
          <h1 className="">RoboPals </h1>
          <SearchBox onSearch={this.onSearchChange} />
        </div>

        <div className="container-robots">
          <Card robot={filteredRobots} />
        </div>
      </>
    );
  }
}
