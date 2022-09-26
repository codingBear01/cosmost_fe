import React from 'react';
import * as S from './styled';
import { Section } from '../..';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';
import { PopularContentRow } from './PopularContentRow';
import { PopularContentTitle } from './PopularContentTitle/';

function MainSecondSection() {
  return (
    <Section backgroundColor={color.white}>
      <div>
        <PopularContentTitle></PopularContentTitle>
        <PopularContentRow></PopularContentRow>
      </div>
    </Section>
  );
}

export default MainSecondSection;
