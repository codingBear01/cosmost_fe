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

export const CourseReviewWrap = styled.div`
  display: flex;
  alignt-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 4rem;
  border-bottom: 1px solid ${color.white};
`;

export const CourseReviewAuthorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CourseReviewAuthorNickname = styled.span`
  width: 8rem;
  margin-top: ${gap.m};
  font-size: ${fs.m};
  font-weight: 600;
  text-align: center;
`;

export const CourseReviewContentWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-left: ${gap.l};
`;

export const CourseReviewInnerContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${gap.s};
`;

export const CourseReviewStar = styled.div`
  font-size: ${fs.s};
  color: ${color.darkYellow};
`;

export const CourseReviewCreatedDateWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  span {
    margin-right: ${gap.s};
    font-size: ${fs.s};
  }
  svg {
    font-size: ${fs.s};
    cursor: pointer;
  }
`;

export const CourseReviewLikeCountWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid ${color.white};
  border-radius: ${br.default};
  font-size: ${fs.s};
  font-weight: 600;
  svg {
    margin-right: ${gap.s};
  }
`;

export const CourseReviewLikeButton = styled.button`
  font-size: ${fs.m};
  color: ${color.white};
`;

export const CourseReviewDescription = styled.p`
  font-size: ${fs.s};
`;
