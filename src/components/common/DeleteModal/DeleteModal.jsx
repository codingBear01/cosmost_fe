/* libraries */
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button } from '../../';
/* APIs */
import { deleteCourseOrReview } from '../../../apis';
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
  const navigate = useNavigate();

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
            onClick={() =>
              deleteCourseOrReview(
                clickedElement,
                courseId,
                courseReviewId,
                onClickOpenDeleteModal,
                navigate,
                toast,
                setIsClickedCourseReviewChanged,
                isClickedCourseReviewChanged
              )
            }
          >
            삭제
          </Button>
        </S.DeleteModalButtonWrap>
      </S.DeleteModal>
    </S.DeleteModalOverlay>
  );
}

export default DeleteModal;
