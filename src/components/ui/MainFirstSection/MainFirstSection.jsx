/* hooks */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { MainHashTags, MainRankerBox, MainSlider } from './';
import { Button, Section } from '../../';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from './../../../style/';

function MainFirstSection() {
  return (
    <Section
      height={'86.8rem'}
      backgroundColor={color.darkBlue}
      paddingTop={'7rem'}
    >
      <S.FirstSectionContainer>
        <S.FirstSectionContent>
          {/* 타이틀 및 서치바 */}
          <S.FirstSectionTitle
            title={'당신의 일상을 공유하세요'}
          ></S.FirstSectionTitle>
          <S.MainSearchArea>
            <S.SearchInput
              type="text"
              placeholder="키워드를 입력하세요."
              width={'42rem'}
              height={'5rem'}
              fontSize={fs.xl}
            ></S.SearchInput>
            <Link to="/course/result">
              <Button
                width={'10rem'}
                height={'5rem'}
                fontSize={'2.5rem'}
                bgColor={color.lightBlue}
              >
                검색
              </Button>
            </Link>
          </S.MainSearchArea>
          {/* 해시태그들 */}
          <MainHashTags></MainHashTags>
          {/* 랭커 박스 */}
          <MainRankerBox></MainRankerBox>
          {/* 메인 슬라이더 */}
          <MainSlider></MainSlider>
        </S.FirstSectionContent>
      </S.FirstSectionContainer>
    </Section>
  );
}

export default MainFirstSection;
