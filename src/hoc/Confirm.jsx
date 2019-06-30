import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { showNotification } from "../actions/uiActions";

import ConfirmMark from "../icons/ConfirmMark";
import RejectMark from "../icons/RejectMark";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ConfirmBox = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: opacity 0.5s;
  display: ${({ show }) => (show ? "flex" : "none")};
`;

function Confirm(WrappedComponent) {
  class Confirm extends Component {
    state = {
      show: false
    };

    toogleConfirm = e => {
      e.stopPropagation();
      this.setState(prevState => ({ show: !prevState.show }));
    };

    render() {
      return (
        <Wrapper onClick={this.toogleConfirm}>
          <ConfirmBox show={this.state.show}>
            <ConfirmMark
              onClick={e => {
                this.setState({
                  show: false
                });
                e.stopPropagation();
                this.props.showNotification(this.props.id, "delete");
              }}
            />
            <RejectMark onClick={this.toogleConfirm} />
          </ConfirmBox>
          <WrappedComponent {...this.props} />
        </Wrapper>
      );
    }
  }

  return connect(
    null,
    { showNotification }
  )(Confirm);
}

export default Confirm;
