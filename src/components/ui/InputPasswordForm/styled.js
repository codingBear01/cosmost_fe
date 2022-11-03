/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';

export const InputPasswordFormText = styled.span`
  align-self: start;
  margin: 15px 0;
  font-size: 20px;
  font-weight: 600;
`;

export const InvalidPasswordAlertMessage = styled.span`
  margin-top: 15px;
  color: ${color.red};
  font-weight: 600;
`;
