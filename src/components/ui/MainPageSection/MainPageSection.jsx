/* hooks */
import React from 'react';
/* components */
import * as S from './styled';
import { MainContentWrap, MainCourse, MainTextWrap } from '.';
import { Section } from '../..';
/* icons */
import * as FaIcons from 'react-icons/fa';
/* static data */
import { MAIN_COURSE_LIST } from './../../../data/';

function MainPageSection() {
  return (
    <Section height={'100vh'} pd_b={'7rem'}>
      <S.MainPageContainer>
        <MainContentWrap pd={'10rem'}>
          {/* 메인 텍스트 */}
          <MainTextWrap />
          {/* 코스 등록 버튼 */}
          <S.CourseRegisterBtn to="/course/register">
            나만의 코스 공유하기
            <FaIcons.FaChevronRight />
          </S.CourseRegisterBtn>
        </MainContentWrap>
        {/* 메인 코스 */}
        {MAIN_COURSE_LIST &&
          MAIN_COURSE_LIST.map((item, i) => (
            <MainContentWrap key={item.id} pd={'0 10rem'}>
              <MainCourse item={item} />
            </MainContentWrap>
          ))}
      </S.MainPageContainer>
    </Section>
  );
}

export default MainPageSection;
