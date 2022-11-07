import styled from 'styled-components';
import { COLOR_LIST as color, mainTextFadeIn } from '../../../style';

export const StyledUtilForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  flex-direction: column;
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : '100%')};
  padding: ${({ padding }) => padding};
  color: ${color.white};
  animation: ${mainTextFadeIn} 1.2s;
`;
