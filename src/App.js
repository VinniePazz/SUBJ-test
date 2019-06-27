import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { getNotes, getNote, createNote } from "./actions";
import Note from "./components/Note";
// const progress = keyframes`
//   0% {
//     transform: translateX(-100%)
//   }
//   100% {
//     transform: translateX(0)
//   }
// `;

// const SnackBar = styled.div`
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Line = styled.div`
//   width: 300px;
//   height: 10px;
//   background: #333333;
//   overflow: hidden;
// `;
// const Progress = styled.div`
//   background: #ff6b6b;
//   width: 100%;
//   height: 100%;
//   /* transform: translateX(-100%); */
//   animation: ${progress} 2s linear;
//   animation-delay: 1s;
//   animation-fill-mode: both;
// `;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <Container>
        {this.props.notes.map(({ id, title, content }, i) => (
          <Note
            key={id}
            id={id}
            title={title}
            content={content}
            color={i % 2 ? "#F7FFF7" : "#FF6B6B"}
          />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return {
    notes
  };
};

export default connect(
  mapStateToProps,
  { getNotes, getNote, createNote }
)(App);
