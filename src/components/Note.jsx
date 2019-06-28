import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  getNotes,
  getNote,
  createNote,
  deleteNote
} from "../actions/notesActions";
import { openModal } from "../actions/uiActions";

import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.mintCream};
  margin: 0.5rem;
  border-left: 5px solid #ff6b6b;
  position: relative;
  word-break: break-all;
`;

const Header = styled.div`
  display: flex;
`;

const Title = styled.h3`
  width: 80%;
  color: ${({ theme }) => theme.colors.darkGreen};
`;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-style: italic;
  margin-top: 10px;
`;

const ActionBar = styled.div`
  margin-left: auto;
  & > * {
    margin-left: 0.5rem;
  }
`;

class Note extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Title>{this.props.title}</Title>
          <ActionBar>
            <EditIcon onClick={() => this.props.openModal(this.props.id)} />
            <DeleteIcon onClick={() => this.props.deleteNote(this.props.id)} />
          </ActionBar>
        </Header>
        <Content>{this.props.content}</Content>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { getNotes, getNote, createNote, deleteNote, openModal }
)(Note);
