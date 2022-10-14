/* libraries */
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button } from '../../../';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';

/* CONSTANTS */
const REVIEW_RATE_INDEXES = [0, 1, 2, 3, 4];

function CourseReviewRegisterForm({ courseData }) {
  /* 리뷰 등록에 쓰이는 states 및 ref */
  const [isYellowStar, setIsYellowStar] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const rateRef = useRef();
  const reviewContentRef = useRef();

  /* Handlers */
  /* 평점을 설정하는 핸들러. 전달한 index 이하의 isYellowStar를 true로 만들고, index + 1을 평점으로 할당한다. */
  const onClickSetReviewRate = (index) => {
    let isYellowStarStates = [...isYellowStar];
    for (let i = 0; i < REVIEW_RATE_INDEXES.length; i++) {
      isYellowStarStates[i] = i <= index ? true : false;
    }
    setIsYellowStar(isYellowStarStates);
    rateRef.current = index + 1;
  };

  /* 코스 리뷰 내용 및 평점 유효성 검증 */
  const checkCourseReviewValues = () => {
    if (!reviewContentRef.current.value) {
      toast.error('내용을 입력해주세요.');
      return false;
    }
    if (!rateRef.current) {
      rateRef.current = 1;
      return false;
    }
    return true;
  };

  /* APIs */
  /* 코스 리뷰 등록 */
  const onSubmitPostCourseReview = (e) => {
    e.preventDefault();

    if (!checkCourseReviewValues()) return;

    const postCourseReviewUrl = `${process.env.REACT_APP_COURSE_REVIEW_DOMAIN_IP}/v1/comments`;
    const temporaryData = {
      courseId: courseData.id,
      reviewerId: 1,
      courseReviewContent: reviewContentRef.current.value,
      rate: rateRef.current,
    };
    axios
      .post(postCourseReviewUrl, temporaryData)
      .then((response) => {
        reviewContentRef.current.value = '';
      })
      .catch((error) => {
        toast.error('오류가 발생했습니다. 관리자에게 문의하세요.');
      });
  };

  return (
    <S.StyledCourseReviewRegisterForm onSubmit={onSubmitPostCourseReview}>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <S.ReviewRegisterTitleAndRateWrap>
        <S.ReviewRegisterTitle>리뷰 작성</S.ReviewRegisterTitle>
        {/* item의 boolean 여부에 따라 노랑, 하양 별이 다르게 rendering됨 */}
        <S.ReviewRegisterRate>
          {REVIEW_RATE_INDEXES.map((item) => (
            <div key={item}>
              {isYellowStar[item] ? (
                <AiIcons.AiFillStar
                  style={{ color: 'yellow' }}
                  onClick={() => onClickSetReviewRate(item)}
                />
              ) : (
                <AiIcons.AiOutlineStar
                  onClick={() => onClickSetReviewRate(item)}
                />
              )}
            </div>
          ))}
        </S.ReviewRegisterRate>
      </S.ReviewRegisterTitleAndRateWrap>
      <S.ReviewRegisterTextarea
        ref={reviewContentRef}
        placeholder="리뷰를 입력하세요."
        maxLength={500}
      ></S.ReviewRegisterTextarea>
      <Button
        type={'submit'}
        width={'10rem'}
        height={'4rem'}
        fontSize={fs.s}
        color={color.white}
        bgColor={color.darkBlue}
        hoveredBgColor={color.navy}
      >
        리뷰 남기기
      </Button>
    </S.StyledCourseReviewRegisterForm>
  );
}

export default CourseReviewRegisterForm;
