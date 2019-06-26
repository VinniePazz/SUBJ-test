import React, { Component } from "react";
import { connect } from "react-redux";

import { getNotes, getNote, createNote } from "./actions";

class App extends Component {
  render() {
    return (
      <button onClick={() => this.props.getNotes(1257)}>Notes app</button>
    );
  }
}

export default connect(
  null,
  { getNotes, getNote, createNote }
)(App);
