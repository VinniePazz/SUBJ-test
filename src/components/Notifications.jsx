import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import { createNote, editNote, deleteNote } from "../actions/notesActions";
import { closeNotification } from "../actions/uiActions";

const progress = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0)
  }
`;

const Dimmer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SnackBar = styled.div`
  padding: 1rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: 3px;
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

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RejectButton = styled.button`
  background: #ff6b6b;
  padding: 0.5rem 1rem;
  color: #f7fff7;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: #ec3535;
  }
`;

class Notification extends Component {
  timer = false;

  componentDidMount() {
    const {
      type,
      createNote,
      editNote,
      deleteNote,
      currentNoteId
    } = this.props;

    switch (type) {
      case "create":
        this.timer = setTimeout(() => {
          createNote();
        }, 20000);
        break;
      case "edit":
        this.timer = setTimeout(() => {
          editNote(currentNoteId);
        }, 2000);
        break;
      case "delete":
        this.timer = setTimeout(() => {
          deleteNote(currentNoteId);
        }, 2000);
        break;
      default:
        return null;
    }
  }

  rejectTimer = () => {
    clearTimeout(this.timer);
    this.props.closeNotification();
  };

  render() {
    const { type } = this.props;

    return ReactDOM.createPortal(
      <Dimmer>
        <SnackBar>
          <Line>
            <Progress />
          </Line>
          <Body>
            <Text>
              {type === "create"
                ? "Note is creating"
                : type === "edit"
                ? "Note is editing"
                : "Note is deleting"}
              ...
            </Text>
            <RejectButton onClick={this.rejectTimer}>cancel</RejectButton>
          </Body>
        </SnackBar>
      </Dimmer>,
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
  { createNote, editNote, deleteNote, closeNotification }
)(Notification);
