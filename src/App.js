import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>소현의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} /> {/* / */}
        <Route path="post-write" element={<PostWritePage />} />
        {/* /post-write */}
        <Route path="post/:postId" element={<PostViewPage />} /> {/* /post/1 */}
      </Routes>
    </BrowserRouter>
  );
}

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export default App;
