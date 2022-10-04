/* hooks */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { MainHashTags, MainRankerBox, MainSlider } from '.';
import { Button, Section } from '../..';
/* icons */
import * as FaIcons from 'react-icons/fa';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

function MainPageSection() {
  return (
    <Section height={'100vh'} pd_b={'7rem'} bg_color={color.black}>
      <S.MainPageContainer>
        <S.MainContentWrap pd={'10rem'}>
          <S.MainTextWrap>
            <S.MainText fs={'10rem'} col={color.white}>
              공유
              <S.MainText fs={'7rem'} col={color.lightGrey}>
                하세요
              </S.MainText>
            </S.MainText>
            <S.MainText fs={'4rem'} col={color.lightGrey}>
              당신의{' '}
              <S.MainText fs={'6rem'} col={color.white}>
                일상
              </S.MainText>
              을
            </S.MainText>
            <S.MainText fs={'3rem'} mr={'3rem 0 0 0'} col={color.lightGrey}>
              여기서 지금
            </S.MainText>
          </S.MainTextWrap>

          <S.CourseRegisterBtn to="/course/register">
            나만의 일상 공유하기
            <FaIcons.FaChevronRight />
          </S.CourseRegisterBtn>
        </S.MainContentWrap>
      </S.MainPageContainer>
    </Section>
  );
}

export default MainPageSection;
