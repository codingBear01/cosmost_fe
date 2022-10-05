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
  mainTextFadeIn,
} from '../../../../style';

export const UserPageMenuList = styled.ul`
  width: 340px;
  padding: 20px;
`;

export const UserPageMenuItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: ${color.grey};
  cursor: pointer;
  transition: all 0.15s ease-in;

  &:hover {
    color: ${color.white};
  }

  svg {
    margin-right: 10px;
  }
`;

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
