import React from 'react';
import * as S from './styled';
import { Section, SectionTitle } from '../..';
import { PopularCourseContainer } from './PopularCourseContainer';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';

function MainSecondSection() {
  return (
    <Section backgroundColor={color.white}>
      <div>
        <SectionTitle># 요새 가장 인기 많은</SectionTitle>
        <PopularCourseContainer></PopularCourseContainer>
      </div>
    </Section>
  );
}

export default MainSecondSection;
