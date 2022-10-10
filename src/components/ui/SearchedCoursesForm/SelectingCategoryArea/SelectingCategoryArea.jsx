/* libraries */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
/* static data */
import { CATEGORIES } from '../../../../store';

function SelectingCategoryArea() {
  /* 카테고리 스타일 관련 states */
  const [isClickedCategory, setIsClickedCategory] = useState({
    entire: true,
    location: false,
    theme: false,
  });

  /* 카테고리 클릭 시 클릭된 카테고리에 밑줄을 표시하기 위한 핸들러 */
  const onClickSetClickedCategory = (isClicked) => {
    if (isClicked === 'entire') {
      setIsClickedCategory({
        entire: true,
        location: false,
        theme: false,
      });
    } else if (isClicked === 'location') {
      setIsClickedCategory({
        entire: false,
        location: true,
        theme: false,
      });
    } else {
      setIsClickedCategory({
        entire: false,
        location: false,
        theme: true,
      });
    }
  };

  return (
    <S.StyledSelectingCategoryArea>
      <S.Categories>
        <S.Category
          onClick={() => onClickSetClickedCategory('entire')}
          isClickedCategory={isClickedCategory.entire}
        >
          전체
        </S.Category>
        <S.Category
          onClick={() => onClickSetClickedCategory('location')}
          isClickedCategory={isClickedCategory.location}
        >
          지역별
        </S.Category>
        <S.Category
          onClick={() => onClickSetClickedCategory('theme')}
          isClickedCategory={isClickedCategory.theme}
        >
          테마별
        </S.Category>
      </S.Categories>
      <S.SubordinateCategories>
        <ul>
          {isClickedCategory.location &&
            CATEGORIES[0].gu.map((item) => (
              <li key={item.id}>
                <S.SubordinateCategory>{item.name}</S.SubordinateCategory>
              </li>
            ))}
          {isClickedCategory.theme &&
            CATEGORIES[1].theme.map((item) => (
              <li key={item.id}>
                <S.SubordinateCategory>{item.name}</S.SubordinateCategory>
              </li>
            ))}
        </ul>
      </S.SubordinateCategories>
    </S.StyledSelectingCategoryArea>
  );
}

export default SelectingCategoryArea;
