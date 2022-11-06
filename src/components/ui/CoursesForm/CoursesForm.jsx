/* libraries */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { isOrderingModalOpenedAtom, isLoadingAtom } from '../../../store';
/* components */
import * as S from './styled';
import { Course, SelectingCategoryArea } from '.';
import {
  OrderingButton,
  ToTopBtn,
  UtilDiv,
  Loading,
  OrderingModal,
} from '../..';

function CoursesForm() {
  // const token = localStorage.getItem('token');
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);
  const [courses, setCourses] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [categoryId, setCategoryId] = useState(0);
  const [courseSortType, setCourseSortType] = useState('최신순');

  // 쿼리값이 변경되어 useEffect가 호출되면 변경되는 상태들
  const [queryStringsState, setQueryStringsState] = useState(false);

  const page = useRef(0);
  const observedTarget = useRef(null);
  const params = useParams();
  const [queryStrings] = useSearchParams();

  /* Handlers */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  /** params type에 따라 다른 url을 반환하는 핸들러 */
  const returnUrlForGettingCourses = (type, searchKeyword, categoryNumber) => {
    let url;

    if (type === 'all' || type === 'auth') {
      switch (queryStrings.get('sort')) {
        // 평점 순 정렬
        case 'rate':
          url = `${process.env.REACT_APP_API}/view/ranking/rate?page=${page.current}&size=4`;
          break;
        case 'like':
          url = `${process.env.REACT_APP_API}/view/ranking/popularity?page=${page.current}&size=4`;
          break;
        // 그 외의 정렬
        default:
          url = `${process.env.REACT_APP_API}/cosmosts?filter=${type}&sort=id,desc&page=${page.current}&size=4`;
          break;
      }
      // url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?filter=${type}&sort=id,desc&page=${page.current}&size=4`;
    }
    if (type === 'keyword' || type === 'hastags') {
      // url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?${type}=${searchKeyword}&sort=id,desc&page=${page.current}&size=4`;
      url = `${process.env.REACT_APP_API}/cosmosts?${type}=${searchKeyword}&sort=id,desc&page=${page.current}&size=4`;
    }
    if (type === 'location' || type === 'theme') {
      url = `${process.env.REACT_APP_API}/cosmosts?category=${type}&name-id=${categoryNumber}&sort=id,desc&page=${page.current}&size=4`;
    }

    return url;
  };

  /* APIs */
  /** params에 따라 다른 코스를 가져오는 api */
  const getCourses = useCallback(
    async (type, searchKeyword, categoryNumber) => {
      setIsLoading(true);
      try {
        const url = returnUrlForGettingCourses(
          type,
          searchKeyword,
          categoryNumber
        );

        if (!url) return;

        const config =
          type === 'auth'
            ? {
                headers: {
                  Authorization: token,
                },
                timeout: 3000,
              }
            : { timeout: 3000 };

        const result = await axios.get(url, config);

        const { data } = result;
        console.log(data);

        setIsLoading(false);
        setCourses((prev) => prev.concat(data));
        setIsLastPage(data[data.length - 1].whetherLastPage);

        if (!isLastPage) {
          page.current += 1;
        }
      } catch (error) {
        new Error(error);
        console.log('error', error);
      }
    },
    [params.type, categoryId, page.current]
  );

  //정렬 표시
  useEffect(() => {
    const sortQuery = queryStrings.get('sort');
    switch (sortQuery) {
      case 'rate':
        setCourseSortType('평점 높은 순');
        break;
      case 'like':
        setCourseSortType('좋아요 많은 순');
        break;
      default:
        setCourseSortType('최신순');
        break;
    }
  }, [queryStrings]);

  /** 쿼리스트링이 변경될 때마다 호출되는 useEffect. IsLastPage와 Course State를 초기화한다.*/
  useEffect(() => {
    setIsLastPage(false);
    setCourses([]);
    setQueryStringsState(!queryStringsState);
    page.current = 0;
  }, [params.type, queryStrings, categoryId]);

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
    console.log(observedTarget.current);
    if (!observedTarget.current || isLastPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getCourses(params.type, queryStrings.get('keyword'), categoryId);
      }
    });
    io.observe(observedTarget.current);

    return () => io.disconnect();
  }, [isLastPage, queryStringsState, page.current]);

  return (
    <>
      {/* 정렬 기준 모달 */}
      <OrderingModal />
      <UtilDiv width={'76.8rem'} padding={'9rem 0 7rem'} margin={'0 auto'}>
        {/* 카테고리 선택 영역 */}
        {params.type !== 'mine' && (
          <SelectingCategoryArea setCategoryId={setCategoryId} />
        )}
        {/* 정렬 기준 버튼 */}
        <OrderingButton
          onClick={onClickOpenOrderingModal}
          sortType={courseSortType}
        />
        {/* 코스 검색 결괏값 */}
        <S.SearchedCourseContainer>
          {courses.length ? (
            courses.map((course, index) => (
              <Link
                to={`/course-detail/${course.id || course.courseId}`}
                key={course.id || course.courseId}
              >
                <Course course={course} />
              </Link>
            ))
          ) : (
            <h1 style={{ margin: '0 auto' }}>검색 결과가 존재하지 않습니다.</h1>
          )}
        </S.SearchedCourseContainer>
        <div ref={observedTarget}></div>
        <ToTopBtn />
      </UtilDiv>
    </>
  );
}

export default CoursesForm;
