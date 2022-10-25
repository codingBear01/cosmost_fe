/* libraries */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { isOrderingModalOpenedAtom, loginToken } from '../../../store';
/* components */
import * as S from './styled';
import { Course, SelectingCategoryArea } from '.';
import { OrderingButton, ToTopBtn, UtilDiv } from '../..';
/* static data */
// import { COURSES } from '../../../store';

function CoursesForm() {
  // const [token] = useRecoilState(loginToken);
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OCIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjY2NjczODI3LCJleHAiOjM2MDE2NjY2NzM4Mjd9.4Hzr9h89tJJNqNhnIOka4JIAqdR_CWTx7vA3Yl_4jg0';

  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );
  const [courses, setCourses] = useState([]);

  const params = useParams();

  /* Handlers */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  /* APIs */
  /* 로그인한 사용자가 작성한 코스를 불러오는 api */
  const getMyCourses = () => {
    const url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?filter=auth`;
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    axios
      .get(url, config)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => console.log(error));
  };

  /* params의 type에 따라 호출하는 함수가 바뀜 */
  useEffect(() => {
    if (params.type === 'mine') {
      getMyCourses();
    }
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
