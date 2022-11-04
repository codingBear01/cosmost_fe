/* libraries */
import React, { useState } from 'react';
import axios from 'axios';
/* components */
import * as S from './styled';
import { Link } from 'react-router-dom';
/* CONSTANTS */
const URLS = {
  // location: `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?filter=all&category=location`,
  location: `${process.env.REACT_APP_API}/cosmosts?filter=all&category=location`,
  // theme: `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts?filter=all&category=theme`,
  theme: `${process.env.REACT_APP_API}/cosmosts?filter=all&category=theme`,
};

function SelectingCategoryArea({ setCategoryId }) {
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

  /* APIs */
  const getCategories = (type) => {
    const url = URLS[type];
    const config = { timeout: 3000 };

    axios
      .get(url, config)
      .then((response) =>
        setCategories((prev) => {
          return {
            ...prev,
            [type]: response.data,
          };
        })
      )
      .catch((error) => new Error(error));
  };

  /* Handlers */
  /**  카테고리 클릭 시 클릭된 카테고리에 밑줄을 표시하기 위한 핸들러 */
  const onClickSetClickedCategory = (isClicked) => {
    if (isClicked === 'all') {
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
    getCategories(isClicked);
  };

  const onClickSetClikedCategoryId = (id) => {
    setCategoryId(id);
  };

  return (
    <S.StyledSelectingCategoryArea>
      <S.Categories>
        <Link to="/courses/all">
          <S.Category
            onClick={() => onClickSetClickedCategory('all')}
            isClickedCategory={isClickedCategory.all}
          >
            전체
          </S.Category>
        </Link>
        <Link to="/courses/location">
          <S.Category
            onClick={() => onClickSetClickedCategory('location')}
            isClickedCategory={isClickedCategory.location}
          >
            지역별
          </S.Category>
        </Link>
        <Link to="/courses/theme">
          <S.Category
            onClick={() => onClickSetClickedCategory('theme')}
            isClickedCategory={isClickedCategory.theme}
          >
            테마별
          </S.Category>
        </Link>
      </S.Categories>
      <S.SubordinateCategories>
        <ul>
          {isClickedCategory.location &&
            categories.location[0] &&
            categories.location.map((item) => (
              <li
                key={item.id}
                value={item.id}
                onClick={() => onClickSetClikedCategoryId(item.id)}
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
                onClick={() => onClickSetClikedCategoryId(item.id)}
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
