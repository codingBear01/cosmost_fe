import React from "react";
import styled from "styled-components";
import { COLOR_LIST } from "../../../style";

// 페이지의 전체 배경색과 가로 중앙 정렬이 지정된 ROOT DIV 컴포넌트.
const PageRootDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLOR_LIST.darkBlue};
  height: 100vh;
`;

export default PageRootDiv;
