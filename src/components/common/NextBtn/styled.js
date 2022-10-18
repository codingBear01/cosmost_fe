/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../style';

export const StyledNextBtn = styled(Link)`
  display: flex;
  align-items: center;
  align-self: end;
  font-size: 16px;
  color: ${color.lightGrey};
  transition: 0.15s ease-in;

  &:hover {
    color: ${color.white};
  }

  span {
    margin-right: ${gap.xs};
  }

  svg {
    align-self: center;
  }
`;
