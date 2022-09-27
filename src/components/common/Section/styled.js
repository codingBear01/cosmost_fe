import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
