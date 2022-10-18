/* libraries */
import React from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from '../../';
/* components */
import * as S from './styled';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

function DeleteModal({
  onClickOpenDeleteModal,
  isClickedCourseReviewChanged,
  setIsClickedCourseReviewChanged,
  courseId,
  courseReviewId,
  clickedElement,
}) {
  /* APIs */
  /* 코스 혹은 코스 리뷰 삭제 */
  const onClickDeleteCourseOrReview = (clicked) => {
    let id;

    if (clicked === 'course') {
      id = courseId;
      toast.success(`${courseId}번 코스가 삭제되었읍니다!`);
    } else {
      id = courseReviewId;
      const deleteCourseReviewUrl = `${process.env.REACT_APP_COURSE_REVIEW_DOMAIN_IP}/v1/comments/${id}/review`;
      axios
        .delete(deleteCourseReviewUrl)
        .then((response) => {
          onClickOpenDeleteModal();
          setIsClickedCourseReviewChanged(!isClickedCourseReviewChanged);
        })
        .catch((error) => {
          toast.error('오류가 발생했습니다. 관리자에게 문의하세요.');
        });
    }
  };

  return (
    <S.DeleteModalOverlay>
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
      <S.DeleteModal>
        <S.DeleteModalTitle>정말로 삭제하시겠습니까?</S.DeleteModalTitle>
        <S.DeleteModalButtonWrap>
          <Button
            type={'button'}
            width={'6rem'}
            height={'3rem'}
            margin={'0 1.5rem'}
            fontSize={fs.m}
            color={color.black}
            bgColor={color.darkGrey}
            hoveredBgColor={color.grey}
            onClick={onClickOpenDeleteModal}
          >
            취소
          </Button>
          <Button
            type={'button'}
            width={'6rem'}
            height={'3rem'}
            margin={'0 1.5rem'}
            fontSize={fs.m}
            color={color.black}
            bgColor={color.darkRed}
            hoveredBgColor={color.red}
            onClick={() => onClickDeleteCourseOrReview(clickedElement)}
          >
            삭제
          </Button>
        </S.DeleteModalButtonWrap>
      </S.DeleteModal>
    </S.DeleteModalOverlay>
  );
}

export default DeleteModal;
