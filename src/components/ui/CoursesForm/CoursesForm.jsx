/* libraries */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { isOrderingModalOpenedAtom } from '../../../store';
/* components */
import * as S from './styled';
import { Course, SelectingCategoryArea } from '.';
import { OrderingButton, ToTopBtn, UtilDiv } from '../..';
/* static data */
// import { COURSES } from '../../../store';

function CoursesForm() {
  // const token = localStorage.getItem('token');
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjY3MjAxNTE0LCJleHAiOjM3NjY3MjAxNTE0fQ.mKmlkc8vX5YIO2AFoE_1chICSOyTpa8OYDVzAmsZLp8';
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );
  const [courses, setCourses] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const page = useRef(0);
  const observedTarget = useRef(null);

  const params = useParams();

  const URL_TYPES = {
    all: 'all',
    mine: 'auth',
  };
  const CONFIGS = {
    all: {
      timeout: 3000,
    },
    mine: {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    },
  };

  /* Handlers */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  /* APIs */
  /** params에 따라 다른 코스를 가져오는 api */
  const getCourses = useCallback(async (type) => {
    try {
      const url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?filter=${URL_TYPES[type]}&page=${page.current}&size=4`;
      const config = CONFIGS[type];

      const { data } = await axios.get(url, config);

      setCourses((prev) => prev.concat(data));
      setIsLastPage(data[data.length - 1].whetherLastPage);

      if (!isLastPage) {
        page.current += 1;
      }
    } catch (error) {
      new Error(error);
    }
  }, []);

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
    if (!observedTarget.current || isLastPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getCourses(params.type);
      }
    });
    io.observe(observedTarget.current);

    return () => io.disconnect();
  }, [getCourses, isLastPage]);

  return (
    <UtilDiv width={'76.8rem'} padding={'9rem 0 7rem'} margin={'0 auto'}>
      {/* 카테고리 선택 영역 */}
      <SelectingCategoryArea />
      {/* 정렬 기준 버튼 */}
      <OrderingButton onClick={onClickOpenOrderingModal} />
      {/* 코스 검색 결괏값 */}
      <S.SearchedCourseContainer>
        {courses &&
          courses?.map((course) => <Course key={course.id} course={course} />)}
      </S.SearchedCourseContainer>
      <div ref={observedTarget}></div>
      <ToTopBtn />
    </UtilDiv>
  );
}

export default CoursesForm;
