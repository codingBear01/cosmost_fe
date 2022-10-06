import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const StyledButton = styled.button`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  margin: ${({ mr }) => mr};
  border-radius: ${br.default};
  background-color: ${({ bg_col }) => bg_col};
  font-size: ${({ fs }) => fs};
  font-weight: 600;
  color: ${({ col }) => col};
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    border: none;
    background-color: ${({ hov_bg_col }) => hov_bg_col};
  }
`;
