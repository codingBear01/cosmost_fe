import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

export const StyledEachCourseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: ${({ column }) => column};
  height: ${({ height }) => (height ? height : '35%')};
  padding: ${({ padding }) => (padding ? padding : `${gap.xs}`)};
`;
