import React from "react";
import styled from "styled-components";
import { COLOR_LIST } from "../../../style";

// 페이지를 대표하는 텍스트(타이틀)를 나타내는 컴포넌트
const PageTitle = styled.h1`
  color: ${COLOR_LIST.white};
  font-size: 8rem;
  margin-top: 0;
  margin-bottom: 0;
`;

export default PageTitle;
