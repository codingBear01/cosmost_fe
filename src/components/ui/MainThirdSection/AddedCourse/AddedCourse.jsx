/* hooks */
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { CourseImg, CourseTitle, HashTag } from '../../..';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../../style';

function AddedCourse() {
  return (
    <Link to="/course/detail" style={{ color: `${color.black}` }}>
      <S.AddedCourseWrap>
        <CourseImg width={'28rem'} height={'100%'}></CourseImg>
        <S.AddedCourseInfo>
          <CourseTitle fontSize={fs.l}>코스 제목</CourseTitle>
          <S.AddedCourseDesc>
            코스 설명이당!!ㅇㅅㅇ// 코스 설명이당!!ㅇㅅㅇ//코스
            설명이당!!ㅇㅅㅇ// 코스 설명이당!!ㅇㅅㅇ// 코스 설명이당!!ㅇㅅㅇ//
            코스 설명이당!!ㅇㅅㅇ// 코스 설명이당!!ㅇㅅㅇ// 코스
            설명이당!!ㅇㅅㅇ// 코스 설명이당!!ㅇㅅㅇ// 코스 설명이당!!ㅇㅅㅇ//
            코스 설명이당!!ㅇㅅㅇ// 코스 설명이당!!ㅇㅅㅇ// 코스
            설명이당!!ㅇㅅㅇ// 코스 설명이당!!ㅇㅅㅇ//
          </S.AddedCourseDesc>
          <div>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
          </div>
        </S.AddedCourseInfo>
      </S.AddedCourseWrap>
    </Link>
  );
}

export default AddedCourse;
