import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { closeModal } from "../actions/uiActions";

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

const Body = styled.div``;

const Modal = ({ render, closeModal }) => {
  return ReactDOM.createPortal(
    <Dimmer onClick={() => closeModal()}>
      <Body onClick={e => e.stopPropagation()}>{render()}</Body>
    </Dimmer>,
    document.querySelector("#modal")
  );
};

export default connect(
  null,
  { closeModal }
)(Modal);
