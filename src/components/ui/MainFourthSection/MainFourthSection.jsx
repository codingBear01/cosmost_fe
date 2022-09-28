/* hooks */
import React from 'react';
/* components */
import { Section, SectionTitle } from '../..';
import { TheMostGuContainer } from './TheMostGuContainer';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';

function MainFourthSection() {
  return (
    <Section backgroundColor={color.white}>
      <div>
        <SectionTitle># 가장 코스가 많은 지역</SectionTitle>
        <TheMostGuContainer></TheMostGuContainer>
      </div>
    </Section>
  );
}

export default MainFourthSection;
