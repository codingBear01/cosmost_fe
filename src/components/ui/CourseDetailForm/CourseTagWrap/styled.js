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

export const StyledCourseTagWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  width: 100%;
  height: ${({ height }) => (height ? height : '6.5rem')};
  padding: 1rem;
  border-bottom: 1px solid ${color.white};
`;

export const CourseTitleAndRateWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CourseTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const CourseAverageRate = styled.span`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${color.white};
  border-radius: ${br.default};
  font-size: ${fs.l};
  font-weight: 600;
`;

export const CourseCreatedDateAndMoreIconWrap = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;

  svg {
    margin-left: ${gap.l};
    font-size: ${fs.xl};
    cursor: pointer;
  }
`;

export const CourseCreatedDate = styled.div`
  font-size: ${fs.m};
  font-weight: 600;
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

// 공유, 좋아요 버튼
export const ShareAndLikeButton = styled.button`
  margin-left: ${gap.l};
  font-size: ${fs.xl};
  color: ${color.white};
`;

// 코스 평균 평점 및 별 개수별 퍼센테이지
export const AverageRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: ${gap.l};
  font-size: 2.5rem;
  font-weight: 600;

  span {
    margin-bottom: ${gap.l};
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
