import React, { Component, Fragment } from "react";
import "./app.css";
import Card from "./Card";
import { robots } from "./robots";

import Scroll from "./Scroll";
import Error from "./Error";
import SearchBox from "./Searchbox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  //have to be an arrow function
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return (
        <div className="spinner-container">
          <div className="spinner"></div>
          <h1>Charging...</h1>
        </div>
      );
    } else {
      return (
        <>
          <div className="container-input">
            <h1 className="">BotList</h1>
            <SearchBox onSearch={this.onSearchChange} />
          </div>

          <div className="container-robots">
            <Scroll>
              <Error>
                <Card robot={filteredRobots} />
              </Error>
            </Scroll>
          </div>
        </>
      );
    }
  }
}
