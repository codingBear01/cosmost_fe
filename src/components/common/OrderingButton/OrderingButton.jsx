/* hooks */
import React from "react";
/* components */
import * as S from "./styled";
/* icons */
import * as BiIcons from "react-icons/bi";

function OrderingButton({ onClick, sortType }) {
  return (
    <S.StyledOrderingModalButton onClick={onClick}>
      <span>{sortType}</span>
      <BiIcons.BiChevronDown />
    </S.StyledOrderingModalButton>
  );
}

export default OrderingButton;
