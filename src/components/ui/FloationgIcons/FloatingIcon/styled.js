import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const StyledFloatingIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin: ${gap.xs} 0;
  border-radius: ${br.circle};
  background: none;
  border: 0.2rem solid ${color.darkBlue};
  font-size: ${fs.l};
  color: ${color.darkBlue};
  cursor: pointer;
  transition: all 0.15s ease-in;

  &: hover {
    background-color: ${color.darkBlue};
    color: ${color.white};
  }
`;
