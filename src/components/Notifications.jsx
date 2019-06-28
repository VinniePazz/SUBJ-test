import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import { createNote, editNote } from "../actions/notesActions";
import { closeNotification } from "../actions/uiActions";

const progress = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0)
  }
`;

const SnackBar = styled.div`
  padding: 1rem 2rem;
  background: #454643;
  position: fixed;
  bottom: 10%;
  right: 10%;
  display: fixed;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  text-align: center;
  width: 150px;
  height: 10px;
  background: #333333;
  overflow: hidden;
`;

const Progress = styled.div`
  background: #ff6b6b;
  width: 100%;
  height: 100%;
  animation: ${progress} 2s linear;
  animation-fill-mode: both;
`;

const ActionBar = styled.div`
  display: flex;
`;

class Notification extends Component {
  timer = false;

  componentDidMount() {
    if (this.props.type === "create") {
      this.timer = setTimeout(() => {
        this.props.createNote();
      }, 2000);
    }
    
    if (this.props.type === "edit") {
      this.timer = setTimeout(() => {
        this.props.editNote(this.props.currentNoteId);
      }, 2000);
    }
  }

  componentWillMount() {}

  rejectTimer = () => {
    clearTimeout(this.timer);
    this.props.closeNotification();
  };

  render() {
    return ReactDOM.createPortal(
      <SnackBar>
        <Line>
          <Progress />
        </Line>
        <ActionBar>
          <button onClick={this.rejectTimer}>cancel</button>
        </ActionBar>
      </SnackBar>,
      document.querySelector("#notification")
    );
  }
}

const mapStateToProps = ({ ui }) => {
  return {
    type: ui.meta.type,
    currentNoteId: ui.meta.currentNoteId
  };
};

export default connect(
  mapStateToProps,
  { createNote, editNote, closeNotification }
)(Notification);
