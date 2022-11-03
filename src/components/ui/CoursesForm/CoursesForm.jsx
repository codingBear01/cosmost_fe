/* libraries */
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
/* recoil */
import { useRecoilState } from "recoil";
import { isOrderingModalOpenedAtom } from "../../../store";
/* components */
import * as S from "./styled";
import { Course, SelectingCategoryArea } from ".";
import { OrderingButton, ToTopBtn, UtilDiv } from "../..";

function CoursesForm() {
  // const token = localStorage.getItem('token');
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo";
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );
  const [courses, setCourses] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [categoryType, setCategoryType] = useState(null);
  const [categoryNumber, setCategoryNumber] = useState(0);

  //쿼리값이 변경되서 useEffect가 호출되면 변경되는 상태
  const [queryStringsState, setQueryStringsState] = useState(false);

  const page = useRef(0);
  const observedTarget = useRef(null);
  const params = useParams();
  const [queryStrings] = useSearchParams();

  //코스 정렬 방식을 나타내는 state
  const [courseSortType, setCourseSortType] = useState("최신순");

  const URL_TYPES = {
    all: "all",
    mine: "auth",
    keyword: "keyword",
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
    keyword: {
      timeout: 3000,
    },
  };

  /* 정렬 기준 버튼을 클릭했을 시 호출할 핸들러,
     모달창을 호출한다. */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  /* APIs */
  /** params에 따라 다른 코스를 가져오는 api */
  const getCourses = useCallback(
    async (type, searchKeyword, sortType, categoryType, categoryNumber) => {
      try {
        let url;
        if (type === "searched" && searchKeyword) {
          switch (sortType) {
            case "rate":
              // url = `${process.env.REACT_APP_COMMENT1_IP}/v1/view/ranking?order=rate&sort=desc&page=${page.current}&size=4`;
              break;
            default:
              url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?keyword=${searchKeyword}&sort=id,desc&page=${page.current}&size=4`;
              break;
          }
        }
        if (type === "hashtags" && searchKeyword) {
          url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?hashtag=${searchKeyword}&sort=id,desc&page=${page.current}&size=4`;
        }
        if (
          (!searchKeyword && categoryType === "all") ||
          (!searchKeyword && type === "all") ||
          (!searchKeyword && type === "mine")
        ) {
          switch (sortType) {
            case "rate":
              url = `${process.env.REACT_APP_COMMENT1_IP}/v1/view/ranking?order=rate&sort=desc&page=${page.current}&size=4`;
              break;
            default:
              url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?filter=${URL_TYPES[type]}&sort=id,desc&page=${page.current}&size=4`;
              break;
          }
        }
        if (
          (!searchKeyword && categoryType === "location") ||
          (!searchKeyword && categoryType === "theme")
        ) {
          url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?category=${categoryType}&name-id=${categoryNumber}&sort=id,desc&page=${page.current}&size=4`;
        }

        const config = CONFIGS[type];

        const result = await axios.get(url, config);
        const { data } = result;
        console.log(data);

        setCourses((prev) => prev.concat(data));
        setIsLastPage(data[data.length - 1].whetherLastPage);

        if (!isLastPage) {
          page.current += 1;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    [categoryType, categoryNumber, page]
  );

  //정렬 표시
  useEffect(() => {
    const sortQuery = queryStrings.get("sort");
    switch (sortQuery) {
      case "rate":
        setCourseSortType("평점 높은 순");
        break;
      default:
        setCourseSortType("최신순");
        break;
    }
  }, [queryStrings]);

  /** 쿼리스트링이 변경될 때마다 호출되는 useEffect. IsLastPage와 Course State를 초기화한다.*/
  useEffect(() => {
    setIsLastPage(false);
    setCourses([]);
    setQueryStringsState(!queryStringsState);
    page.current = 0;
  }, [queryStrings, categoryType, categoryNumber]);

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
    if (!observedTarget.current || isLastPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getCourses(
          params.type,
          queryStrings.get("keyword"),
          queryStrings.get("sort"),
          categoryType,
          categoryNumber
        );
      }
    });
    io.observe(observedTarget.current);

    return () => io.disconnect();
  }, [getCourses, isLastPage, queryStringsState]);

  return (
    <UtilDiv width={"76.8rem"} padding={"9rem 0 7rem"} margin={"0 auto"}>
      {/* 카테고리 선택 영역 */}
      {params.type !== "mine" && (
        <SelectingCategoryArea
          setCategoryNumber={setCategoryNumber}
          setCategoryType={setCategoryType}
          categoryNumber={categoryNumber}
          categoryType={categoryType}
        />
      )}
      {/* 정렬 기준 버튼 */}
      <OrderingButton
        onClick={onClickOpenOrderingModal}
        sortType={courseSortType}
      />
      {/* 코스 검색 결괏값 */}
      <S.SearchedCourseContainer>
        {courses.length ? (
          courses.map(
            (course, index) =>
              console.log("course, courses.length", course, courses.length) || (
                <Link
                  to={`/course-detail/${course.id || course.courseId}`}
                  key={course.id || course.courseId}
                >
                  <Course course={course} />
                </Link>
              )
          )
        ) : (
          <h1>검색 결과가 존재하지 않습니다.</h1>
        )}
      </S.SearchedCourseContainer>
      <div ref={observedTarget}></div>
      <ToTopBtn />
    </UtilDiv>
  );
}

export default CoursesForm;
