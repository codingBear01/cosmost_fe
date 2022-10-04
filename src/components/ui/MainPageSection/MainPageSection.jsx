/* hooks */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { MainHashTags, MainRankerBox, MainSlider } from '.';
import { Button, Section } from '../..';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

function MainPageSection() {
  return (
    <Section height={'100%'} pd_b={'7rem'} bg_color={color.black}>
      <S.MainPageContainer></S.MainPageContainer>
    </Section>
  );
}

export default MainPageSection;
