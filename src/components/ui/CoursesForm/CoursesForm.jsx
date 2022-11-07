/* libraries */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import {
  isOrderingModalOpenedAtom,
  isLoadingAtom,
  queryStringsStateAtom,
  searchingTypeAtom,
} from '../../../store';
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
  const token = localStorage.getItem('token');

  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);
  const [courses, setCourses] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [courseSortType, setCourseSortType] = useState('최신순');
  // const [searchingType, setsearchingType] = useState('all');
  const [searchingType, setSearchingType] = useRecoilState(searchingTypeAtom);

  // 쿼리값이 변경되어 useEffect가 호출되면 변경되는 상태들
  const [queryStringsState, setQueryStringsState] = useRecoilState(
    queryStringsStateAtom
  );

  const page = useRef(0);
  const observedTarget = useRef(null);
  const params = useParams();
  const [queryStrings] = useSearchParams();

  /* Handlers */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  /** params type에 따라 다른 url을 반환하는 핸들러 */
  const returnUrlForGettingCourses = (
    type,
    searchKeyword,
    categoryNumber,
    searchingType
  ) => {
    let url;
    // debugger;
    if (
      (type === 'keyword' &&
        (searchingType === 'all' || searchingType === 'search')) ||
      type === 'hastags'
    ) {
      url = `${
        process.env.REACT_APP_API
      }/cosmosts?${type}=${searchKeyword}&sort=${
        type === 'keyword' ? 'course' : 'id'
      },desc&page=${page.current}&size=4`;
    }
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
    }
    if (searchingType === 'location' || searchingType === 'theme') {
      url = `${process.env.REACT_APP_API}/cosmosts?category=${searchingType}&name-id=${categoryNumber}&sort=id,desc&page=${page.current}&size=4`;
    }
    if (
      (type === 'keyword' && searchingType === 'location') ||
      (type === 'keyword' && searchingType === 'theme')
    ) {
      url = `${process.env.REACT_APP_API}/cosmosts?keyword=${searchKeyword}&category=${searchingType}&name-id=${categoryNumber}&size=4&page=${page.current}&sort=course,desc`;
    }
    if (type === 'likes') {
      url = `${process.env.REACT_APP_API}/popularities?type=cosmost&sort=id,desc&page=${page.current}&size=4`;
    }

    console.log(type);
    return url;
  };

  /* APIs */
  /** params에 따라 다른 코스를 가져오는 api */
  const getCourses = useCallback(
    async (type, searchKeyword, categoryNumber, searchingType) => {
      setIsLoading(true);
      try {
        const url = returnUrlForGettingCourses(
          type,
          searchKeyword,
          categoryNumber,
          searchingType
        );

        if (!url) return;
        console.log('url', url);

        const config =
          type === 'auth' || type === 'likes'
            ? {
                headers: {
                  Authorization: token,
                },
                timeout: 3000,
              }
            : { timeout: 3000 };

        // while (1) {
        //   const url = returnUrlForGettingCourses(
        //     type,
        //     searchKeyword,
        //     categoryNumber,
        //     searchingType
        //   );
        //   console.log("url", url);
        //   console.log("isLastPage", isLastPage);
        //   const result = await axios.get(url, config);
        //   data = result.data;
        //   if (data.length !== 0 || isLastPage) {
        //     break;
        //   }
        //   page.current += 1;
        // }

        const result = await axios.get(url, config);
        const { data } = result;

        if (data.length == 0) {
          data.push({ whetherLastPage: false });
        }

        setCourses((prev) => prev.concat(data));
        setIsLastPage(data[data.length - 1].whetherLastPage);
        setIsLoading(false);

        if (!isLastPage) {
          page.current += 1;
        }
      } catch (error) {
        new Error(error);
      }
    },
    [page.current, categoryId, searchingType, queryStringsState, isLastPage]
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
    console.log('쿼리스트링이 isLastPage', isLastPage);
    setIsLastPage(false);

    setCourses([]);
    setQueryStringsState(!queryStringsState);
    page.current = 0;
  }, [params.type, queryStrings, categoryId, searchingType]);

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
    console.log('무한 스크롤 isLastPage', isLastPage);
    console.log('AS', !observedTarget.current);
    if (!observedTarget.current || isLastPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getCourses(
          params.type,
          queryStrings.get('keyword'),
          categoryId,
          searchingType
        );
      }
    });
    io.observe(observedTarget.current);

    return () => io.disconnect();
  }, [isLastPage, page.current, categoryId, searchingType, queryStringsState]);

  console.log('courses', courses);

  return (
    <>
      {/* 정렬 기준 모달 */}
      <OrderingModal />
      <UtilDiv width={'76.8rem'} padding={'9rem 0 7rem'} margin={'0 auto'}>
        {/* 카테고리 선택 영역 */}
        {params.type !== 'auth' && params.type !== 'likes' ? (
          <SelectingCategoryArea
            setCategoryId={setCategoryId}
            setSearchingType={setSearchingType}
          />
        ) : (
          <></>
        )}
        {/* 정렬 기준 버튼 */}
        {params.type !== 'auth' && params.type !== 'likes' ? (
          <OrderingButton
            onClick={onClickOpenOrderingModal}
            sortType={courseSortType}
          />
        ) : (
          <></>
        )}
        {/* 코스 검색 결괏값 */}
        <S.SearchedCourseContainer>
          {courses.length ? (
            courses.map((course, index) => (
              <Course
                key={index}
                course={course}
                courseId={course.id || course.courseId}
              />
            ))
          ) : (
            <h1 style={{ margin: '0 auto' }}>검색 결과가 존재하지 않습니다.</h1>
          )}
        </S.SearchedCourseContainer>
        {isLoading ? <Loading /> : null}
        <div ref={observedTarget}></div>
        <ToTopBtn />
      </UtilDiv>
    </>
  );
}

export default CoursesForm;
