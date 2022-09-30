import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const AddedCourseWrap = styled.div`
  display: flex;
  width: 58rem;

  @media (max-width: 1250px) {
    width: 56rem;
  }

  ${media.tablet} {
    width: 28rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  ${media.mobile} {
    width: 28rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const AddedCourseInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0 0 ${gap.m} ${gap.m};
`;

export const AddedCourseDesc = styled.p`
  margin-bottom: ${gap.m};
  font-size: ${fs.xs};
  color: ${color.grey};
`;
