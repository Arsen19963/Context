import React, { Component } from "react";
import UserContext from "../../context";
import Exact from "../Exact";
import People from "../axios";
import axios from "axios";
class Data extends Component {
  state = {
    people: [],
    activePerson: null,
  };
  handleChange = (id) => {
    this.setState({ activePerson: id });
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users/`).then((res) => {
      const people = res.data;
      this.setState({ people: people });
    });
  }
  render() {
    console.log(this.state.activePerson);
    console.log(this.context);
    return (
      <UserContext.Provider value={this.state} className="Users">
        <People handleChange={this.handleChange} people={this.state.people} />
        <Exact activePerson={this.state.activePerson} />
      </UserContext.Provider>
    );
  }
}
export default Data;
// Data.contextType = UserContext;
