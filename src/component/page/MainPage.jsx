import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const MainPage = (props) => {
  const navigate = useNavigate(); // 페이지를 이동하기 위해 사용한 useNavigate() 훅

  return (
    <Wrapper>
      <Container>
        <Button title="글 작성하기" onClick={() => navigate("/post-write")} />
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/$(item.id)`);
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

export default MainPage;