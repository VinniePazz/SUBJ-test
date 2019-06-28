import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { CreateNote } from "../App";

import { closeModal, showNotification } from "../actions/uiActions";
import { changeFormValues } from "../actions/formActions";

const Wrapper = styled.div`
  background: #ffffff;
  padding: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

class Form extends Component {
  state = {
    title: this.props.title,
    content: this.props.content,
    error: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { title, content } = this.state;
    const { id } = this.props;

    e.preventDefault();
    if (!title || !content) {
      this.setState({
        error: true
      });
      return;
    }
    const type = this.props.id ? "edit" : "create";
    this.props.closeModal();
    this.props.showNotification(id, type);
    this.props.changeFormValues({ title, content });
  };

  render() {
    return (
      <Wrapper>
        <StyledForm onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            autoComplete="off"
            placeholder="title of note"
            onChange={this.handleChange}
          />
          <textarea
            name="content"
            value={this.state.content}
            placeholder="описание"
            rows={5}
            cols={5}
            autoComplete="off"
            onChange={this.handleChange}
            maxLength={200}
          />
          {this.state.error && <label>Please, fill all fields</label>}
          <CreateNote>add note</CreateNote>
        </StyledForm>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const note = state.ui.id && state.notes.find(note => note.id === state.ui.id);
  return {
    title: note ? note.title : "",
    content: note ? note.content : "",
    id: state.ui.id || ""
  };
};

export default connect(
  mapStateToProps,
  { changeFormValues, closeModal, showNotification }
)(Form);
