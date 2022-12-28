import React from "react";
import styled from "styled-components";

const TextInput = (props) => {
  const { height, value, onChange } = props;

  return (
    <StyledTextarea
      height={height}
      value={value}
      onChange={onChange}
    ></StyledTextarea>
  );
};

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  height: ${(props) => props.height}px;
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

export default TextInput;
