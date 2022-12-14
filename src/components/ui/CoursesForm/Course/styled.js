/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  BREAK_POINTS as media,
  GAP_LIST as gap,
} from '../../../../style';

export const StyledCourse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 34.8rem;
  margin: 0 0.5rem 2.4rem 0.5rem;
  border-radius: ${br.default};
  background-color: ${color.white};
  color: ${color.black};
  ${media.mobile} {
    width: 50rem;
  }
`;

export const CourseFeaturedImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: ${br.default} ${br.default} 0 0;
`;

export const CourseContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${color.lightGrey};
`;

export const CourseTitle = styled.span`
  font-size: ${fs.m};
  font-weight: 600;
`;

export const CoursePopularityWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: end;
`;

export const CourseRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  margin-left: 1rem;
  font-size: ${fs.s};
  font-weight: 600;

  span {
    margin-left: 0.5rem;
  }
`;

export const CourseTag = styled.p`
  margin: 0.25rem 1rem 0.25rem 0;
  padding: 0.5rem 1rem;
  background-color: ${color.darkBlue};
  border-radius: ${br.default};
  font-size: ${fs.xs};
  font-weight: 600;
  color: ${color.white};
`;

export const CourseAuthorWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const CourseAuthorNickname = styled.span`
  margin-left: 1rem;
  font-size: ${fs.s};
  font-weight: 600;
`;

export const CourseCreatedDate = styled.span`
  font-weight: 600;
`;

export const CourseOrderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem 2rem 3rem;
  border-radius: 0 0 ${br.default} ${br.default};
`;

export const CourseName = styled.span`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: ${fs.m};
  font-weight: 600;

  svg {
    margin: 0 ${gap.m};
  }
`;
