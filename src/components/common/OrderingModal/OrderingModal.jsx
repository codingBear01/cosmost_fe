/* libraries */
import React, { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
/* recoil */
import { useRecoilState } from "recoil";
import { isOrderingModalOpenedAtom } from "../../../store";
/* components */
import * as S from "./styled";
/* icons */
import * as AiIcons from "react-icons/ai";

function OrderingModal() {
  const path = useLocation().pathname;
  const [queryString, setQueryString] = useSearchParams();

  /* 정렬 기준 Modal Open 여부 recoilState */
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );

  /* Handlers */
  /* 정렬 기준 Modal Open 여부 조작하는 핸들러. 클릭 시 Modal의 Open 여부를 반대로 변경 */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  /* Variables */
  /* 접속한 페이지가 코스 상세인지 아닌지 판별하는 데 쓰이는 변수 */
  const isPathCourseDetail = path.includes("detail");

  /* Hooks */
  /* 모달 열렸을 때 바깥 영역 스크롤 방지하는 함수 */
  useEffect(() => {
    isOrderingModalOpened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOrderingModalOpened]);

  return (
    <S.OrderingModalOverlay
      isOrderingModalOpened={isOrderingModalOpened}
      onClick={onClickOpenOrderingModal}
    >
      <S.StyledOrderingModal>
        <S.OrderingModalHeader>
          <S.OrderingModalCloseButton onClick={onClickOpenOrderingModal}>
            <AiIcons.AiOutlineClose />
          </S.OrderingModalCloseButton>
          <span>정렬</span>
        </S.OrderingModalHeader>
        <S.OrderingList>
          {isPathCourseDetail && (
            <>
              <S.OrderingItem>평점 높은 순</S.OrderingItem>
              <S.OrderingItem>좋아요 많은 순</S.OrderingItem>
              <S.OrderingItem>최신순</S.OrderingItem>
            </>
          )}
          {!isPathCourseDetail && (
            <>
              <S.OrderingItem>전체</S.OrderingItem>
              <S.OrderingItem>거리 가까운 순</S.OrderingItem>
              <S.OrderingItem>좋아요 많은 순</S.OrderingItem>

              <Link
                to={
                  queryString.get("keyword")
                    ? `/courses/searched?keyword=${queryString.get(
                        "keyword"
                      )}&sort=rate`
                    : "/courses/all?sort=rate"
                }
                style={{ width: "50%", color: "black" }}
              >
                <S.OrderingItem width="100%">평점 높은 순</S.OrderingItem>
              </Link>

              <S.OrderingItem>리뷰 많은 순</S.OrderingItem>
              <Link
                to={
                  queryString.get("keyword")
                    ? `/courses/searched?keyword=${queryString.get("keyword")}`
                    : "/courses/all"
                }
                style={{ width: "50%", color: "black" }}
              >
                <S.OrderingItem width="100%">최신순</S.OrderingItem>
              </Link>
            </>
          )}
        </S.OrderingList>
      </S.StyledOrderingModal>
    </S.OrderingModalOverlay>
  );
}

export default OrderingModal;
