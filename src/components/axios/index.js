import React, { Component, createContext } from "react";
import { User } from "../design/user";
import { Button } from "../design/button";
import { Email } from "../design/email";
import { Name } from "../design/name";
import { Phone } from "../design/phone";
import UserContext from "../../context";


class People extends Component {
  render() {
    const { people, handleChange } = this.props;
    return (
      <UserContext.Consumer>
        <div>
          {people.map((person) => (
            <User key={person.id}>
              <Name>
                <h3>{person.name}</h3>
              </Name>
              <Email>{person.email}</Email>
              <Phone>{person.phone}</Phone>
              <Button onClick={() => handleChange(person)}>
                Click to View Details
              </Button>
            </User>
          ))}
        </div>
      </UserContext.Consumer>
    );
  }
}

export default People;
