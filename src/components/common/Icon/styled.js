import styled from 'styled-components';
import { COLOR_LIST as color } from './../../../style/';

export const StyledHeaderIcon = styled.button`
  height: 2.5rem;
  margin: auto 0;
  margin-right: ${({ marginRight }) => marginRight};
  color: ${color.white};

  svg {
    margin-right: 0;
    font-size: 20px;
  }
`;
