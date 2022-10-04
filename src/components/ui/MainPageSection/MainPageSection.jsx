/* hooks */
import React from 'react';
/* components */
import * as S from './styled';
import { Section } from '../..';
/* icons */
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

function MainPageSection() {
  return (
    <Section height={'100vh'} pd_b={'7rem'} bg_color={color.black}>
      <S.MainPageContainer>
        <S.MainContentWrap pd={'10rem'}>
          <S.MainTextWrap>
            <S.MainText
              fs={'10rem'}
              col={color.white}
              hover_col={color.darkBlue}
            >
              공유
              <S.MainText fs={'7rem'} col={color.lightGrey}>
                하세요
              </S.MainText>
            </S.MainText>
            <S.MainText fs={'4rem'} mr={'5rem 0 0 0'} col={color.lightGrey}>
              당신만의{' '}
              <S.MainText fs={'6rem'} col={color.white} hover_col={color.blue}>
                코스
              </S.MainText>
              를
            </S.MainText>
            <S.MainText fs={'3rem'} mr={'8rem 0 0 0'} col={color.lightGrey}>
              여기서 지금
            </S.MainText>
          </S.MainTextWrap>

          <S.CourseRegisterBtn to="/course/register">
            나만의 코스 공유하기
            <FaIcons.FaChevronRight />
          </S.CourseRegisterBtn>
        </S.MainContentWrap>

        <S.MainContentWrap pd={'0 10rem'}>
          <S.MainCourse align_self={'start'}>
            <S.CourseTextWrap>
              <S.CourseTitle>공유된 모든 코스</S.CourseTitle>
              <S.CoureseLink>
                더 둘러보기
                <FaIcons.FaChevronRight />
              </S.CoureseLink>
            </S.CourseTextWrap>
            <S.CourseIcon>
              <GiIcons.GiRoad />
            </S.CourseIcon>
          </S.MainCourse>
        </S.MainContentWrap>
        <S.MainContentWrap pd={'0 10rem'}>
          <S.MainCourse align_self={'end'}>
            <S.CourseTextWrap>
              <S.CourseTitle>인기 있는 코스</S.CourseTitle>
              <S.CoureseLink>
                더 둘러보기
                <FaIcons.FaChevronRight />
              </S.CoureseLink>
            </S.CourseTextWrap>
            <S.CourseIcon>
              <FiIcons.FiThumbsUp />
            </S.CourseIcon>
          </S.MainCourse>
        </S.MainContentWrap>
        <S.MainContentWrap pd={'0 10rem'}>
          <S.MainCourse align_self={'start'}>
            <S.CourseTextWrap>
              <S.CourseTitle>높은 평가 받은 코스</S.CourseTitle>
              <S.CoureseLink>
                더 둘러보기
                <FaIcons.FaChevronRight />
              </S.CoureseLink>
            </S.CourseTextWrap>
            <S.CourseIcon>
              <FiIcons.FiStar />
            </S.CourseIcon>
          </S.MainCourse>
        </S.MainContentWrap>
        <S.MainContentWrap pd={'0 10rem'}>
          <S.MainCourse align_self={'end'}>
            <S.CourseTextWrap>
              <S.CourseTitle>최근 추가된 코스</S.CourseTitle>
              <S.CoureseLink>
                더 둘러보기
                <FaIcons.FaChevronRight />
              </S.CoureseLink>
            </S.CourseTextWrap>
            <S.CourseIcon>
              <MdIcons.MdOutlineAlarmOn />
            </S.CourseIcon>
          </S.MainCourse>
        </S.MainContentWrap>
      </S.MainPageContainer>
    </Section>
  );
}

export default MainPageSection;
