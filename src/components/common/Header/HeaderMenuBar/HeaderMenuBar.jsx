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
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);
  const [isGuCategoryOpen, setIsGuCategoryOpen] = useState(false);
  const [isThemeCategoryOpen, setIsThemeCategoryOpen] = useState(false);

  const [subCategoryIdx, setSubCategoryIdx] = useState(null);

  const handleCategoryOpen = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleSubCategoryOpen = (idx) => {
    setSubCategoryIdx(idx);
    setIsSubCategoryOpen(!isSubCategoryOpen);
  };

  return (
    <S.MenuBar isMenuBarOpen={isMenuBarOpen}>
      <S.MenuBarCloseBtn onClick={handleMenuBarOpen}>
        <IoIcons.IoIosClose />
      </S.MenuBarCloseBtn>

      <S.MenuBarList>
        {MENUBAR_MENU_LIST &&
          MENUBAR_MENU_LIST.map((menu, i) => (
            <>
              {isLogin === menu.isLogin && (
                <S.MenuBarListItem
                  key={menu.id}
                  onClick={menu.isReport && handleReportModalOpen}
                >
                  <S.MenuBarItemLink
                    to={menu.path}
                    onClick={menu.isHandleLog && handleLogin}
                  >
                    {menu.icon}
                    {isLogin === menu.isMyPage && (
                      <SmallProfilePic src={menu.imgUrl} alt={menu.title} />
                    )}
                    <S.MenuBarItemTitle>{menu.title}</S.MenuBarItemTitle>
                  </S.MenuBarItemLink>
                </S.MenuBarListItem>
              )}
            </>
          ))}
        <S.MenuBarListItem onClick={handleCategoryOpen}>
          <S.MenuBarItemLink>
            <BiIcons.BiCategory />
            <S.MenuBarItemTitle>카테고리</S.MenuBarItemTitle>
            {isCategoryOpen ? (
              <GoIcons.GoTriangleUp />
            ) : (
              <GoIcons.GoTriangleDown />
            )}
          </S.MenuBarItemLink>
        </S.MenuBarListItem>
        {isCategoryOpen &&
          CATEGORY_LIST.map((category, i) => (
            <>
              <S.MenuBarListItem
                key={category.id}
                cat={true}
                onClick={() => handleSubCategoryOpen(i)}
              >
                <S.MenuBarItemLink>
                  {category.icon}
                  <S.MenuBarItemTitle>
                    {category.categoryName}
                  </S.MenuBarItemTitle>
                  {i === subCategoryIdx ? (
                    <GoIcons.GoTriangleUp />
                  ) : (
                    <GoIcons.GoTriangleDown />
                  )}
                </S.MenuBarItemLink>
              </S.MenuBarListItem>
            </>
          ))}
        {isSubCategoryOpen &&
          CATEGORY_LIST[subCategoryIdx].subCategories.map((subCat) => (
            <S.MenuBarListItem key={subCat.id}>
              <S.MenuBarItemLink>
                <S.MenuBarItemTitle>{subCat.title}</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
          ))}
        {/* {isGuCategoryOpen &&
          CATEGORY_LIST[0].subCategories.map((subCat) => (
            <S.MenuBarListItem key={subCat.id}>
              <S.MenuBarItemLink>
                <S.MenuBarItemTitle>{subCat.title}</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
          ))}
        {isThemeCategoryOpen &&
          CATEGORY_LIST[1].subCategories.map((subCat) => (
            <S.MenuBarListItem key={subCat.id}>
              <S.MenuBarItemLink>
                <S.MenuBarItemTitle>{subCat.title}</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
          ))} */}
      </S.MenuBarList>
    </S.MenuBar>
  );
}

export default HeaderMenuBar;
