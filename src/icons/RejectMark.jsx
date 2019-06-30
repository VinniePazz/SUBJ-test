import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #c11c1c;
  padding: 5px;
`;

const SVG = styled.svg`
  fill: #ffffff;
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
  transition: fill 0.2s;
  cursor: pointer;
  &:hover {
    fill: #ff6b6b;
  }
`;

const RejectMark = props => {
  return (
    <Wrapper>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        id="RejectMark"
        viewBox="0 0 174.239 174.239"
        {...props}
      >
        <path
          d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047
	c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077
	L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802
	c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077
	l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z"
        />
      </SVG>
    </Wrapper>
  );
};

export default RejectMark;
