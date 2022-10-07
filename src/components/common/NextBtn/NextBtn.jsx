/* hooks */
import React from "react";
/* components */
import * as S from "./styled";
/* icons */
import * as FiIcons from "react-icons/fi";

function NextBtn({ to, state, onClick }) {
  return (
    <>
      <S.StyledNextBtn to={to} state={state} onClick={onClick}>
        <span>다음으로</span>
        <FiIcons.FiChevronsRight />
      </S.StyledNextBtn>
    </>
  );
}

export default NextBtn;
