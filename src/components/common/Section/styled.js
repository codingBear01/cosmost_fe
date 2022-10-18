import styled from 'styled-components';
import { COLOR_LIST as color } from './../../../style/';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  background-color: ${color.black};
`;
