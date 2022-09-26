import React from 'react';
import * as S from './styled';
import { CourseTitle, Section } from '../..';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';
import { PopularCourseRow } from './PopularCourseRow';

function MainSecondSection() {
  return (
    <Section backgroundColor={color.white}>
      <div>
        <CourseTitle># 요새 가장 인기 많은</CourseTitle>
        <PopularCourseRow></PopularCourseRow>
        <div>새로 추가된 코스</div>
      </div>
    </Section>
  );
}

export default MainSecondSection;
