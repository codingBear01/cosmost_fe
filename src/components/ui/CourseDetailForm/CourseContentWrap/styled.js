/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../../style';

export const StyledCourseContentWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 100%;
  padding: 2rem 1rem;
  border-bottom: 1px solid ${color.white};
`;

// 작성자 프로필
export const AutorProfileVerticalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  margin-left: ${gap.l};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '1rem')};

  svg {
    font-size: ${fs.xl};
    cursor: pointer;
  }

  span {
    font-size: ${fs.l};
    font-weight: 600;
    cursor: pointer;
  }
`;

export const AutorNickname = styled.span`
  margin-bottom: ${gap.s};
  font-size: ${fs.l};
  font-weight: 600;
`;

// 코스 순서
export const CourseName = styled.span`
  margin: 0 ${gap.l};
  font-size: ${fs.s};
  font-weight: 600;
  cursor: pointer;
`;

// 코스 평균 평점 및 별 개수별 퍼센테이지
export const AverageRate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: ${gap.l};
  font-size: 2.5rem;
  font-weight: 600;

  span {
    margin: ${gap.xs};
  }
`;

export const CourseRateStarWrap = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35rem;
`;

export const CourseRateStar = styled.span`
  width: 11rem;
  font-size: ${fs.m};
`;

export const CourseRateStarPercentGaugeWrap = styled.div`
  width: 20rem;
  height: 1.5rem;
  border-radius: ${br.default};
  background-color: ${color.lightGrey};
`;

export const CourseRateStarPercentGauge = styled.div`
  width: ${({ width }) => width};
  height: 100%;
  border-radius: ${br.default} 0 0 ${br.default};
  background-color: ${color.darkYellow};
`;

export const CourseRateStarPercent = styled.span`
  align-self: end;
  width: 1.5rem;
  font-size: ${fs.s};
  font-weight: 600;
`;