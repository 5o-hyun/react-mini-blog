import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const PostWritePage = (props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput
          height={20}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          title="글작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
  width: calc() (100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export default PostWritePage;
