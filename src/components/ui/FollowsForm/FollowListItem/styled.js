/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  BREAK_POINTS as media,
} from '../../../../style';

export const StyledFollowListItem = styled.li`
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
      width: 50px;
      height: 50px;
      margin-right: 15px;
      border-radius: ${br.default};
    }

    span {
      font-size: 14px;
    }
  }
`;
