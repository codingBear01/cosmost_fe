import React from "react";
import styled from "styled-components";
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from "../../../style";

const FlexDiv = styled.div`
  width: ${(props) => props.width || "100%"};
  display: flex;
  justify-content: ${(props) => props.justifyContent || "normal"};
  align-items: ${(props) => props.alignItems || "center"};
  margin: ${(props) => props.margin || "0 0 0 0"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export default FlexDiv;
