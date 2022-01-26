import React, { Component, useState } from "react";
import styled from "styled-components";
import HOC from "../../HOC";
// import People from "./../axios/index";

const Div = styled.div`
  position: fixed;
`;
class Exact extends Component {
  render() {
    console.log(this.props);

    if (!this.props.activePerson) {
      return null;
    }
    const { name, email, phone } = this.props.activePerson;
    // console.log(this.props);
    return (
        <Div>
          <div>{name}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </Div>
    
    );
  }
}

export default Exact;
