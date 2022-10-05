import React from 'react';
import * as S from './styled';

function CategoriesWrap({ display, fd, categories }) {
  return (
    <S.StyledCategoriesWrap display={display} fd={fd}>
      {categories.map((cat, i) => (
        <span key={cat.id}>@{cat.categoryName} </span>
      ))}
    </S.StyledCategoriesWrap>
  );
}

export default CategoriesWrap;
