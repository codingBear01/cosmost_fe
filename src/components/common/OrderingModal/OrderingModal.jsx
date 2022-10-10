/* libraries */
import React from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { isOrderingModalOpenedAtom } from '../../../store';
/* components */
import * as S from './styled';
/* icons */
import * as AiIcons from 'react-icons/ai';

function OrderingModal({ path }) {
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );

  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  const pathIsCourseDetail = path.includes('detail');

  return (
    <S.OrderingModalOverlay isOrderingModalOpened={isOrderingModalOpened}>
      <S.StyledOrderingModal>
        <S.OrderingModalHeader>
          <S.OrderingModalCloseButton onClick={onClickOpenOrderingModal}>
            <AiIcons.AiOutlineClose />
          </S.OrderingModalCloseButton>
          <span>정렬</span>
        </S.OrderingModalHeader>
        <S.OrderingList>
          {pathIsCourseDetail && (
            <>
              <S.OrderingItem>평점 높은 순</S.OrderingItem>
              <S.OrderingItem>좋아요 많은 순</S.OrderingItem>
              <S.OrderingItem>최신순</S.OrderingItem>
            </>
          )}
          {!pathIsCourseDetail && (
            <>
              <S.OrderingItem>전체</S.OrderingItem>
              <S.OrderingItem>거리 가까운 순</S.OrderingItem>
              <S.OrderingItem>좋아요 많은 순</S.OrderingItem>
              <S.OrderingItem>평점 높은 순</S.OrderingItem>
              <S.OrderingItem>리뷰 많은 순</S.OrderingItem>
              <S.OrderingItem>최신순</S.OrderingItem>
            </>
          )}
        </S.OrderingList>
      </S.StyledOrderingModal>
    </S.OrderingModalOverlay>
  );
}

export default OrderingModal;
