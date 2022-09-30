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

  const handleSubCategoryOpen = (idx, cat) => {
    setSubCategoryIdx(idx);
    setIsSubCategoryOpen(!isSubCategoryOpen);
    if (cat === '지역별') {
      setIsGuCategoryOpen(!isGuCategoryOpen);
      setIsThemeCategoryOpen(false);
    } else {
      setIsThemeCategoryOpen(!isThemeCategoryOpen);
      setIsGuCategoryOpen(false);
    }
  };
  console.log('idx', subCategoryIdx);
  console.log('isGu', isGuCategoryOpen);
  console.log('isTheme', isThemeCategoryOpen);
  console.log('isSub', isSubCategoryOpen);

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
                <S.MenuBarItemLink
                  key={menu.id}
                  to={menu.path}
                  onClick={menu.isHandleLog && handleLogin}
                >
                  <S.MenuBarListItem
                    onClick={menu.isReport && handleReportModalOpen}
                  >
                    {menu.icon}
                    {isLogin === menu.isMyPage && (
                      <SmallProfilePic src={menu.imgUrl} alt={menu.title} />
                    )}
                    <S.MenuBarItemTitle>{menu.title}</S.MenuBarItemTitle>
                  </S.MenuBarListItem>
                </S.MenuBarItemLink>
              )}
            </>
          ))}
        <S.MenuBarItemLink onClick={handleCategoryOpen}>
          <S.MenuBarListItem>
            <BiIcons.BiCategory />
            <S.MenuBarItemTitle>카테고리</S.MenuBarItemTitle>
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

        {isCategoryOpen &&
          CATEGORY_LIST.map((category, i) => (
            <>
              <S.MenuBarItemLink
                key={category.id}
                cat={true}
                onClick={() => handleSubCategoryOpen(i, category.categoryName)}
              >
                <S.MenuBarListItem>
                  {category.icon}
                  <S.MenuBarItemTitle cat={true}>
                    {category.categoryName}
                  </S.MenuBarItemTitle>
                  {(i === subCategoryIdx && isGuCategoryOpen) ||
                  (i === subCategoryIdx && isThemeCategoryOpen) ? (
                    <S.CategoryIsOpendIcon cat={true}>
                      <GoIcons.GoTriangleUp />
                    </S.CategoryIsOpendIcon>
                  ) : (
                    <S.CategoryIsOpendIcon cat={true}>
                      <GoIcons.GoTriangleDown />
                    </S.CategoryIsOpendIcon>
                  )}
                </S.MenuBarListItem>
              </S.MenuBarItemLink>

              {(i === subCategoryIdx && isGuCategoryOpen) ||
              (i === subCategoryIdx && isThemeCategoryOpen) ? (
                CATEGORY_LIST[i].subCategories.map((subCat) => (
                  <S.MenuBarItemLink key={subCat.id} subCat={true}>
                    <S.MenuBarListItem>
                      <S.MenuBarItemTitle subCat={true}>
                        {subCat.title}
                      </S.MenuBarItemTitle>
                    </S.MenuBarListItem>
                  </S.MenuBarItemLink>
                ))
              ) : (
                <></>
              )}
            </>
          ))}
        {/* {isSubCategoryOpen &&
          CATEGORY_LIST[subCategoryIdx].subCategories.map((subCat) => (
            <S.MenuBarListItem key={subCat.id}>
              <S.MenuBarItemLink>
                <S.MenuBarItemTitle>{subCat.title}</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
          ))} */}
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
