import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button";
import data from "../../data.json";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";

const PostViewPage = (props) => {
  const navigate = useNavigate();
  const { postId } = useParams;
  const [comment, setComment] = useState("");

  const post = data.find((item) => {
    return item.id === postId;
  });
  return (
    <Wrapper>
      <Container>
        <Button title="뒤로가기" onClick={() => navigate("/")} />
        <div className="postContainer">
          <p className="titleText">{postMessage.title}</p>
          <p className="contentText">{post.content}</p>
        </div>

        <p className="commentLabel">댓글</p>
        <CommentList comments={post.comments} />

        <TextInput
          height={48}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          title="댓글 작성하기"
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
  width: calc(100% - 32px);
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

  .postContainer {
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
    p.titleText {
      font-size: 28px;
      font-weight: 500;
    }
    p.contentText {
      font-size: 20px;
      line-height: 32px;
      white-space: pre-wrap;
    }
  }
  p.commentLabel {
    font-size: 16px;
    font-weight: 500;
  }
`;

export default PostViewPage;
