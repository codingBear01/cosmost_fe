import React from 'react';
import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

const StyledSection = styled.section`
  height: 868px;
  background-color: ${(props) => props.backgroundColor};
`;

function Section({ backgroundColor, children }) {
  return (
    <StyledSection backgroundColor={backgroundColor}>{children}</StyledSection>
  );
}

export default Section;
