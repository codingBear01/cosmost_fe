import React from 'react';
import { CourseTitle, Section } from '../..';
import { AddedCourseContainer } from './AddedCourseContainer/';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';

function MainThirdSection() {
  return (
    <Section backgroundColor={color.white}>
      <div>
        <CourseTitle># 새로 추가된</CourseTitle>
        <AddedCourseContainer></AddedCourseContainer>
      </div>
    </Section>
  );
}

export default MainThirdSection;
