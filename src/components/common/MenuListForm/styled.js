/* libraries */
import styled from 'styled-components';
/* static data */
import { COLOR_LIST as color } from '../../../style';

export const MenuList = styled.ul`
  width: 340px;
  padding: 20px;
`;

export const MenuItem = styled.li`
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
    align-self: center;
    margin: auto 0;
    margin-right: 10px;
  }
`;
