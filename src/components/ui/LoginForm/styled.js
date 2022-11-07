/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../style';

/* styled components */
export const LoginFindWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;
  margin: ${gap.m} 0;
`;

export const LoginServiceLink = styled(Link)`
  font-size: 12px;
  color: ${color.white};
  transition: all 0.15s ease-in;

  &:hover {
    color: ${color.skyBlue};
  }

  span {
    color: ${color.white};
  }
`;
