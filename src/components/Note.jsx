import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getNotes, getNote, createNote, deleteNote } from "../actions";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background: ${({ color }) => color};
  margin: 0.5rem;
  border-radius: 5px;
`;

const Title = styled.h2``;

const Content = styled.p``;

class Note extends Component {
  editNote = id => {};
  deleteNote = id => {};
  render() {
    return (
      <Wrapper color={this.props.color}>
        <Title>{this.props.title}</Title>
        <Content>{this.props.content}</Content>
        <button>edit</button>
        <button onClick={() => this.props.deleteNote(this.props.id)}>
          delete
        </button>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { getNotes, getNote, createNote, deleteNote }
)(Note);
