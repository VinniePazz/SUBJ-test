import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getNotes } from "./actions/notesActions";
import { openModal } from "./actions/uiActions";
import Note from "./components/Note";
import Modal from "./components/Modal";
import Notification from "./components/Notification";
import Form from "./components/Form";

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const CreateNote = styled.button`
  font-size: 18px;
  padding: 0.75em 1.5em;
  text-transform: uppercase;
  background-color: #ff6b6b;
  color: #f7fff7;
  border: none;
  align-self: center;
  margin-top: 1rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ec3535;
  }

  &:active {
    transform: translateY(2%);
  }

  &:disabled {
    background: #f5aaaa;
    cursor: not-allowed;
  }
`;

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <Container>
        {this.props.notes.map(({ id, title, content }, i) => (
          <Note key={id} id={id} title={title} content={content} />
        ))}
        <CreateNote onClick={() => this.props.openModal()}>add note</CreateNote>
        {this.props.modal && <Modal render={() => <Form />} />}
        {this.props.notification && <Notification />}
      </Container>
    );
  }
}

const mapStateToProps = ({ notes, ui }) => {
  return {
    notes,
    modal: ui.modal,
    notification: ui.notification
  };
};

export default connect(
  mapStateToProps,
  { getNotes, openModal }
)(App);
