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
    <Section height={'100%'} pd_b={'7rem'} backgroundColor={color.lightGrey}>
      <S.MainPageContainer>
        <S.MainPageContent
          jc={'space-between'}
          pd={'5rem 10rem'}
          bg_color={color.black}
        >
          {/* 메인 텍스트 */}
          <S.MainPageTextWrap>
            <S.MainPageText fs={'3.5rem'} col={color.grey}>
              <S.MainPageText fs={'4rem'} col={color.white}>
                공유
              </S.MainPageText>
              하세요
            </S.MainPageText>
            <S.MainPageText fs={'2.5rem'} col={color.grey}>
              당신의{' '}
              <S.MainPageText fs={'3rem'} col={color.white}>
                일상
              </S.MainPageText>
              을
            </S.MainPageText>
            <S.MainPageText fs={fs.xl} col={color.grey}>
              여기서 지금
            </S.MainPageText>
            <S.StyledLink to="/course/register">
              나만의 일상 공유하기
            </S.StyledLink>
          </S.MainPageTextWrap>
          <MainHashTags></MainHashTags>
        </S.MainPageContent>

        {/* 랭커 박스 */}
        <S.MainPageContent jc={'center'} pd={'2rem 10rem'}>
          <MainRankerBox></MainRankerBox>
        </S.MainPageContent>

        {/* 메인 슬라이더 */}
        <S.MainPageContent
          bg_color={color.black}
          h={'53rem'}
        ></S.MainPageContent>
      </S.MainPageContainer>
    </Section>
  );
}

export default MainPageSection;
