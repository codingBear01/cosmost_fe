/* libraries */
import React from "react";
/* recoil */
import { useRecoilState } from "recoil";
import { isOrderingModalOpenedAtom } from "../../../store";
/* components */
import * as S from "./styled";
import { SearchedCourse, SelectingCategoryArea } from ".";
import { OrderingButton, ToTopBtn, UtilDiv } from "../../";
/* static data */
import { COURSES } from "../../../store";

function SearchedCoursesForm() {
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );

  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  return (
    <UtilDiv width={"76.8rem"} padding={"7rem 0"} margin={"0 auto"}>
      {/* 카테고리 선택 영역 */}
      <SelectingCategoryArea />
      {/* 정렬 기준 버튼 */}
      <OrderingButton onClick={onClickOpenOrderingModal} />
      {/* 코스 검색 결괏값 */}
      <S.SearchedCourseContainer>
        {COURSES &&
          COURSES.map((item) => <SearchedCourse key={item.id} item={item} />)}
      </S.SearchedCourseContainer>
      <ToTopBtn />
    </UtilDiv>
  );
}

export default SearchedCoursesForm;
