import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../../style/';

export const PopularContentWrap = styled.div`
  width: 27.5rem;
  border: 1px solid black;
`;

// 따로 분리 해서 오른쪽 하단에 평점 띄우게 ㅇㅅaㅇ
export const PopularContentImg = styled.img`
  width: 100%;
  height: 65%;
  border-radius: ${br.default};
`;
// 따로분리
export const CourseTotalRate = styled.div``;

export const PoplularContentBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 35%;
  padding: ${gap.xs};
`;

export const PopularCourseTitle = styled.span`
  margin-bottom: ${gap.l};
  font-size: ${fs.l};
  font-weight: 600;
`;

export const PopularHashtag = styled.button`
  margin: 0.25rem;
  border-radius: ${br.default};
  background-color: ${color.blue};
  opacity: 0.5;
  color: ${color.white};
`;
