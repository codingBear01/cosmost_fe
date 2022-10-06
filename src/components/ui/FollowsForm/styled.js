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

export const FollowList = styled.ul`
  width: 300px;
`;

export const FollowListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${color.grey};

  a {
    display: flex;
    align-items: center;
    width: 220px;
    color: ${color.white};

    img {
      margin-right: 15px;
    }

    span {
      font-size: 14px;
    }
  }
`;
