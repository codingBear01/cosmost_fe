/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const RankergBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 21.5rem;
  height: 5rem;
  margin-bottom: 10rem;
  padding-top: 1rem;
  border-top: 0.1rem solid ${color.white};
  border-bottom: 0.1rem solid ${color.white};
  font-size: 1.6rem;
  font-weight: 600;
  color: ${color.white};
  gap: 2.5rem;
  overflow: hidden;
`;

export const EachRanker = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  transition: all 0.15s ease-in;
`;
