/* libraries */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
/* APIs */
import { fetchCategories } from '../../../../apis';
/* CONSTANTS */
const URLS = {
  location: `${process.env.REACT_APP_API}/cosmosts?filter=all&category=location`,
  theme: `${process.env.REACT_APP_API}/cosmosts?filter=all&category=theme`,
};

function SelectingCategoryArea({ setCategoryId, setSearchingType }) {
  /* States */
  const [categories, setCategories] = useState({
    location: [],
    theme: [],
  });
  const [isClickedCategory, setIsClickedCategory] = useState({
    all: true,
    location: false,
    theme: false,
  });

  /* Handlers */
  /**  카테고리 클릭 시 클릭된 카테고리에 밑줄을 표시하기 위한 핸들러 */
  const onClickSetClickedCategory = (isClicked) => {
    if (isClicked === 'search') {
      setIsClickedCategory({
        all: true,
        location: false,
        theme: false,
      });
    } else if (isClicked === 'location') {
      setIsClickedCategory({
        all: false,
        location: true,
        theme: false,
      });
    } else {
      setIsClickedCategory({
        all: false,
        location: false,
        theme: true,
      });
    }

    setCategoryId(0);
    setSearchingType(isClicked);
    fetchCategories(isClicked, URLS, setCategories);
  };

  const onClickSetClikedCategoryId = (id, type) => {
    setCategoryId(id);
    setSearchingType(type);
  };

  return (
    <S.StyledSelectingCategoryArea>
      <S.Categories>
        <S.Category
          onClick={() => onClickSetClickedCategory('search')}
          isClickedCategory={isClickedCategory.all}
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
            categories.location[0] &&
            categories.location.map((item) => (
              <li
                key={item.id}
                value={item.id}
                onClick={() => onClickSetClikedCategoryId(item.id, 'location')}
              >
                <S.SubordinateCategory>
                  {item.locationCategoryName}
                </S.SubordinateCategory>
              </li>
            ))}
          {isClickedCategory.theme &&
            categories.theme[0] &&
            categories.theme.map((item) => (
              <li
                key={item.id}
                value={item.id}
                onClick={() => onClickSetClikedCategoryId(item.id, 'theme')}
              >
                <S.SubordinateCategory>
                  {item.themeCategoryName}
                </S.SubordinateCategory>
              </li>
            ))}
        </ul>
      </S.SubordinateCategories>
    </S.StyledSelectingCategoryArea>
  );
}

export default SelectingCategoryArea;
