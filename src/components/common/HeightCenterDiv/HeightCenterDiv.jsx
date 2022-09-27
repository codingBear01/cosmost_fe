import React from "react";
import styled from "styled-components";
import { COLOR_LIST } from "../../../style";

// 세로 중앙 정렬이 지정된 DIV 컴포넌트.
const HeightCenterDiv = styled.div`
  display: flex;
  width: ${(props) => props.width || "auto"};
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: center;
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0 0 0 0"};
`;

export default HeightCenterDiv;
