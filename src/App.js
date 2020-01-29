import React, { Component } from "react";
import CardList from "./CardComponents/CardList";
import SearchPanel from "./CardComponents/SearchPanel";
import Scroll from "./CardComponents/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboCop</h1>
        <div>
          <SearchPanel search={this.onSearchChange} />
        </div>
        <Scroll>
          <CardList robots={filteredRobot} />
        </Scroll>
      </div>
    );
  }
}
export default App;
