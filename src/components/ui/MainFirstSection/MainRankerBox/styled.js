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
  margin: 3.5rem 0;
  padding-top: 2rem;
  border-top: 0.1rem solid ${color.white};
  border-bottom: 0.1rem solid ${color.white};
  font-size: 1.6rem;
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
  transition: 0.2s;
`;
