/* hooks */
import React from 'react';
/* components */
import * as S from './styled';
/* icons */
import * as BiIcons from 'react-icons/bi';

function OrderingButton({ onClick }) {
  return (
    <S.StyledOrderingModalButton onClick={onClick}>
      <span>최신 순</span>
      <BiIcons.BiChevronDown />
    </S.StyledOrderingModalButton>
  );
}

export default OrderingButton;
