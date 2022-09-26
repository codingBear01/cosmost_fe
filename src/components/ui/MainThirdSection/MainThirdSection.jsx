import React from 'react';
import { Section, SectionTitle } from '../..';
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
        <SectionTitle># 새로 추가된</SectionTitle>
        <AddedCourseContainer></AddedCourseContainer>
      </div>
    </Section>
  );
}

export default MainThirdSection;
