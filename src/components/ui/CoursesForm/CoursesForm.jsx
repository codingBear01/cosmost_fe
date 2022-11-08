/* libraries */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { isOrderingModalOpenedAtom, searchingTypeAtom } from '../../../store';
/* components */
import * as S from './styled';
import { Course, SelectingCategoryArea } from '.';
import { OrderingButton, ToTopBtn, UtilDiv, OrderingModal } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function CoursesForm() {
  const token = localStorage.getItem('token');
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );
  const [courses, setCourses] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [courseSortType, setCourseSortType] = useState('최신순');
  const [searchingType, setSearchingType] = useRecoilState(searchingTypeAtom);

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

    if (type === 'all') {
      url = `${process.env.REACT_APP_API}/cosmosts?filter=all&sort=id,desc&page=${page.current}&size=4`;
    }
    if (searchingType === 'popular' || searchingType === 'rate') {
      url = `${process.env.REACT_APP_API}/view/ranking/${
        type === 'popular' ? 'popularity' : 'rate'
      }?page=${page.current}&size=4`;
    }
    if (type === 'mine' || type === 'likes') {
      url = `
      ${
        type === 'mine'
          ? `${process.env.REACT_APP_API}/cosmosts?filter=auth&page=${page.current}&size=4`
          : `${process.env.REACT_APP_API}/popularities?type=cosmost&sort=id,desc&page=${page.current}&size=4`
      }`;
    }
    if (searchingType === 'location' || searchingType === 'theme') {
      url = `${process.env.REACT_APP_API}/cosmosts?category=${searchingType}&name-id=${categoryNumber}&sort=id,desc&page=${page.current}&size=4`;
    }
    if (
      (searchingType === 'search' && type === 'keyword') ||
      (searchingType === 'search' && type === 'hashtag')
    ) {
      url = `${process.env.REACT_APP_API}/cosmosts?${
        type === 'keyword' ? 'keyword' : 'hashtag'
      }=${searchKeyword}&sort=${
        type === 'keyword' ? 'course' : 'id'
      },desc&page=${page.current}&size=4`;
    }
    if (
      (searchingType === 'location' && type === 'keyword') ||
      (searchingType === 'theme' && type === 'keyword')
    ) {
      url = `${process.env.REACT_APP_API}/cosmosts?keyword=${searchKeyword}&category=${searchingType}&name-id=${categoryNumber}&sort=course,desc&page=${page.current}&size=4'`;
    }

    return url;
  };

  /* APIs */
  /** params에 따라 다른 코스를 가져오는 api */

  const getCourses = useCallback(
    async (type, searchKeyword, categoryNumber, searchingType) => {
      try {
        const url = returnUrlForGettingCourses(
          type,
          searchKeyword,
          categoryNumber,
          searchingType
        );

        if (!url) return;

        const config =
          type === 'mine' || type === 'likes'
            ? {
                headers: {
                  Authorization: token,
                },
                timeout: 3000,
              }
            : { timeout: 3000 };

        const result = await axios.get(url, config);
        const { data } = result;

        if (data.length === 0) {
          data.push({ whetherLastPage: true });
        }

        setCourses((prev) => prev.concat(data));
        setIsLastPage(data[data.length - 1].whetherLastPage);

        if (!isLastPage) {
          page.current += 1;
        }
      } catch (error) {
        new Error(error);
      }
    },
    [page.current, params.type, courses]
  );

  //정렬 표시
  useEffect(() => {
    switch (searchingType) {
      case 'rate':
        setCourseSortType('평점 높은 순');
        break;
      case 'popular':
        setCourseSortType('좋아요 많은 순');
        break;
      default:
        setCourseSortType('최신순');
        break;
    }
  }, [searchingType]);

  /** 쿼리스트링이 변경될 때마다 호출되는 useEffect. IsLastPage와 Course State를 초기화한다.*/
  useEffect(() => {
    setCourses([]);
    setIsLastPage(false);
    page.current = 0;
    // setQueryStringsState(!queryStringsState);
  }, [
    params.type,
    categoryId,
    searchingType,
    queryStrings.get('keyword'),
    searchingType,
  ]);

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
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
  }, [
    // page.current,
    params.type,
    categoryId,
    searchingType,
    queryStrings.get('keyword'),
    searchingType,
    courses,
  ]);

  return (
    <>
      {/* 정렬 기준 모달 */}
      <OrderingModal />
      <UtilDiv width={'76.8rem'} padding={'9rem 0 7rem'} margin={'0 auto'}>
        {/* 카테고리 선택 영역 */}
        {params.type === 'all' || params.type === 'keyword' ? (
          <SelectingCategoryArea
            setCategoryId={setCategoryId}
            setSearchingType={setSearchingType}
          />
        ) : (
          <></>
        )}
        {params.type === 'keyword' || params.type === 'hashtag' ? (
          <h1 style={{ alignSelf: 'start', marginLeft: '3rem' }}>
            <span style={{ color: `${color.lightBlue}`, fontSize: '3rem' }}>
              '{params.type === 'hashtag' && '#'}
              {queryStrings.get('keyword')}'
            </span>
            에 대한 검색 결과
          </h1>
        ) : (
          <></>
        )}
        {params.type === 'likes' && (
          <h1 style={{ alignSelf: 'start', marginLeft: '3rem' }}>
            내가{' '}
            <span style={{ color: `${color.lightBlue}`, fontSize: '3rem' }}>
              좋아요
            </span>{' '}
            한 코스
          </h1>
        )}
        {params.type === 'mine' && (
          <h1 style={{ alignSelf: 'start', marginLeft: '3rem' }}>
            내가{' '}
            <span style={{ color: `${color.lightBlue}`, fontSize: '3rem' }}>
              등록한
            </span>{' '}
            코스
          </h1>
        )}
        {/* 정렬 기준 버튼 */}
        {(params.type === 'all' && searchingType === 'all') ||
        (params.type === 'all' && searchingType === 'search') ||
        (params.type === 'popular' && searchingType === 'popular') ||
        (params.type === 'rate' && searchingType === 'rate') ? (
          <OrderingButton
            onClick={onClickOpenOrderingModal}
            sortType={courseSortType}
          />
        ) : (
          <></>
        )}
        {/* 코스 검색 결괏값 */}
        <S.SearchedCourseContainer>
          {(params.type === 'keyword' && !courses[0]?.courseTitle) ||
          (params.type === 'hashtag' && !courses[0]?.courseTitle) ? (
            <h1 style={{ margin: '0 auto' }}>검색 결과가 존재하지 않습니다.</h1>
          ) : (
            <></>
          )}
          {courses[0] &&
            courses.map((course, index) => (
              <Course
                key={index}
                course={course}
                courseId={course?.courseId ? course.courseId : course.id}
              />
            ))}
        </S.SearchedCourseContainer>
        <div ref={observedTarget}></div>
        <ToTopBtn />
      </UtilDiv>
    </>
  );
}

export default CoursesForm;
