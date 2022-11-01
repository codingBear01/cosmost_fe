/* libraries */
import React, { useState, useEffect, useCallback } from 'react';
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
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

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

  const params = useParams();

  /* Handlers */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  /* APIs */
  /** 페이지 종류에 따라 다른 코스를 불러오는 api */
  const getCourses = useCallback(
    async (type) => {
      const url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?filter=${URL_TYPES[type]}&page=${page}&size=4`;
      const config = CONFIGS[type];

      const { data } = await axios.get(url, config);

      setCourses(courses.concat(data));
      setPage((prev) => prev + 1);
      setIsLastPage(data[data.length - 1].whetherLastPage);
      setIsFetching(false);
    },
    [page]
  );

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setIsFetching(true);
      }
    };
    setIsFetching(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /** 스크롤 event 및 마지막 페이지 여부를 체크하여 api를 호출 */
  useEffect(() => {
    if (isFetching && !isLastPage) {
      getCourses(params.type);
    } else if (isLastPage) {
      setIsFetching(false);
    }
  }, [isFetching]);

  useEffect(() => {
    setPage(0);
  }, [params.type]);

  return (
    <UtilDiv width={'76.8rem'} padding={'9rem 0 7rem'} margin={'0 auto'}>
      {/* 카테고리 선택 영역 */}
      <SelectingCategoryArea />
      {/* 정렬 기준 버튼 */}
      <OrderingButton onClick={onClickOpenOrderingModal} />
      {/* 코스 검색 결괏값 */}
      <S.SearchedCourseContainer>
        {courses &&
          courses.map((course) => <Course key={course.id} course={course} />)}
      </S.SearchedCourseContainer>
      <ToTopBtn />
    </UtilDiv>
  );
}

export default CoursesForm;
