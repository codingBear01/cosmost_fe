import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../style';

export const StyledUtilDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  flex-direction: column;
  width: ${({ width }) => width || '360px'};
  height: ${({ height }) => (height ? height : '100%')};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-color: ${({ bgColor }) => bgColor};
  color: ${color.white};
  animation: ${mainTextFadeIn} 1.2s;

  ${media.mobile} {
    width: 100%;
  }
`;
