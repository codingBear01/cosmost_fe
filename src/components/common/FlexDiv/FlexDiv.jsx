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
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "normal"};
  align-items: center;
  margin: ${(props) => props.margin || "0 0 0 0"};
`;

export default FlexDiv;
