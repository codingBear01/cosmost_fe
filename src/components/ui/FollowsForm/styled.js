/* libraries */
import styled from 'styled-components';
/* static data */
import { COLOR_LIST as color } from '../../../style';

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
