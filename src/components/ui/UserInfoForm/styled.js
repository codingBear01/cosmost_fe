/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../style';

export const UserProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ fd }) => fd};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
`;

export const UserInfoDropDownWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 340px;
  margin-bottom: ${gap.xl};
`;

export const UserInfoDropDown = styled.select`
  width: 160px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${color.white};
  background: none;
  color: ${color.white};

  option {
    color: ${color.black};
  }
`;
