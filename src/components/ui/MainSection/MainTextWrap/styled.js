/* libraries */
import styled from 'styled-components';
/* static data */
import { mainTextFadeIn } from '../../../../style';

export const StyledMainTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  animation: ${mainTextFadeIn} 3s;
`;

export const MainText = styled.span`
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  color: ${({ color }) => color};
  transition: all 0.15s ease-in;

  &:hover {
    color: ${({ hoveredColor }) => hoveredColor};
  }
`;
