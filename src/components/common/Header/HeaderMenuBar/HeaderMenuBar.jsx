/* hooks */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
import { SmallProfilePic } from '../../../';
/* static data */
import { MENUBAR_MENU_LIST, CATEGORY_LIST } from '../../../../data';
/* icons */
import * as BiIcons from 'react-icons/bi';
import * as GoIcons from 'react-icons/go';
import * as IoIcons from 'react-icons/io';

function HeaderMenuBar({
  handleLogin,
  handleMenuBarOpen,
  handleReportModalOpen,
  isMenuBarOpen,
  isLogin,
}) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isGuCategoryOpen, setIsGuCategoryOpen] = useState(false);
  const [isThemeCategoryOpen, setIsThemeCategoryOpen] = useState(false);
  const [subCategoryIdx, setSubCategoryIdx] = useState(null);

  const handleCategoryOpen = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleSubCategoryOpen = (idx, cat) => {
    setSubCategoryIdx(idx);
    if (cat === '지역별') {
      setIsGuCategoryOpen(!isGuCategoryOpen);
      setIsThemeCategoryOpen(false);
    } else {
      setIsThemeCategoryOpen(!isThemeCategoryOpen);
      setIsGuCategoryOpen(false);
    }
  };

  return (
    <S.MenuBar isMenuBarOpen={isMenuBarOpen}>
      <S.MenuBarCloseBtn onClick={handleMenuBarOpen}>
        <IoIcons.IoIosClose />
      </S.MenuBarCloseBtn>

      <S.MenuBarList>
        {/* 메뉴 리스트 */}
        {MENUBAR_MENU_LIST &&
          MENUBAR_MENU_LIST.map((menu, i) => (
            <div key={menu.id}>
              {isLogin === menu.isLogin && (
                <S.MenuBarItemLink
                  to={menu.path}
                  onClick={menu.isReport && handleReportModalOpen}
                >
                  <S.MenuBarListItem onClick={menu.isHandleLog && handleLogin}>
                    {menu.icon}
                    {isLogin === menu.isMyPage && (
                      <SmallProfilePic src={menu.imgUrl} alt={menu.title} />
                    )}
                    <S.MenuBarItemTitle>{menu.title}</S.MenuBarItemTitle>
                  </S.MenuBarListItem>
                </S.MenuBarItemLink>
              )}
            </div>
          ))}

        {/* 카테고리 */}
        <S.MenuBarItemLink onClick={handleCategoryOpen}>
          <S.MenuBarListItem>
            <BiIcons.BiCategory />
            <S.MenuBarItemTitle>카테고리</S.MenuBarItemTitle>
            {/* 오픈 여부 삼각형 아이콘 */}
            {isCategoryOpen ? (
              <S.CategoryIsOpendIcon>
                <GoIcons.GoTriangleUp />
              </S.CategoryIsOpendIcon>
            ) : (
              <S.CategoryIsOpendIcon>
                <GoIcons.GoTriangleDown />
              </S.CategoryIsOpendIcon>
            )}
          </S.MenuBarListItem>
        </S.MenuBarItemLink>

        {/* 카테고리 하위 지역별, 테마별 */}
        {isCategoryOpen &&
          CATEGORY_LIST.map((category, i) => (
            <div key={category.id}>
              <S.MenuBarItemLink
                cat="true"
                onClick={() => handleSubCategoryOpen(i, category.categoryName)}
              >
                <S.MenuBarListItem>
                  {category.icon}
                  <S.MenuBarItemTitle cat="true">
                    {category.categoryName}
                  </S.MenuBarItemTitle>
                  {/* 오픈 여부 삼각형 아이콘 */}
                  {(i === subCategoryIdx && isGuCategoryOpen) ||
                  (i === subCategoryIdx && isThemeCategoryOpen) ? (
                    <S.CategoryIsOpendIcon cat="true">
                      <GoIcons.GoTriangleUp />
                    </S.CategoryIsOpendIcon>
                  ) : (
                    <S.CategoryIsOpendIcon cat="true">
                      <GoIcons.GoTriangleDown />
                    </S.CategoryIsOpendIcon>
                  )}
                </S.MenuBarListItem>
              </S.MenuBarItemLink>

              {/* 지역별, 테마별 서브 카테고리 */}
              {(i === subCategoryIdx && isGuCategoryOpen) ||
              (i === subCategoryIdx && isThemeCategoryOpen) ? (
                <S.SubCategoriesWrap isGuCategoryOpen={isGuCategoryOpen}>
                  {CATEGORY_LIST[i].subCategories.map((subCat) => (
                    <S.MenuBarItemLink key={subCat.id} subcat="true">
                      <S.MenuBarListItem subcat="true">
                        <S.MenuBarItemTitle subcat="true">
                          {subCat.title}
                        </S.MenuBarItemTitle>
                      </S.MenuBarListItem>
                    </S.MenuBarItemLink>
                  ))}
                </S.SubCategoriesWrap>
              ) : (
                <></>
              )}
            </div>
          ))}
      </S.MenuBarList>
    </S.MenuBar>
  );
}

export default HeaderMenuBar;
