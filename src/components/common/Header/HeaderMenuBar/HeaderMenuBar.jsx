/* hooks */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
/* static data */
import { MENUBAR_MENU_LIST } from '../../../../data';
/* icons */
import { IoIosClose } from 'react-icons/io';
import { SmallProfilePic } from '../../../';

function HeaderMenuBar({
  handleLogin,
  handleMenuBarOpen,
  handleReportModalOpen,
  isMenuBarOpen,
  isLogin,
}) {
  return (
    <S.MenuBar isMenuBarOpen={isMenuBarOpen}>
      <S.MenuBarCloseBtn onClick={handleMenuBarOpen}>
        <IoIosClose />
      </S.MenuBarCloseBtn>
      <S.MenuBarList>
        {MENUBAR_MENU_LIST &&
          MENUBAR_MENU_LIST.map((menu, i) => (
            <>
              {menu.isLogin === isLogin && (
                <S.MenuBarListItem
                  key={menu.id}
                  onClick={
                    menu.isHandleLog
                      ? handleLogin
                      : menu.title === '신고하기'
                      ? handleReportModalOpen
                      : ''
                  }
                >
                  <S.MenuBarItemLink to={menu.path}>
                    {menu.leftEl}
                    {menu.title === '닉네임' && (
                      <SmallProfilePic
                        src="https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg"
                        alt="profile_pic"
                      />
                    )}
                    <S.MenuBarItemTitle>{menu.title}</S.MenuBarItemTitle>
                  </S.MenuBarItemLink>
                </S.MenuBarListItem>
              )}
              {menu.title === '카테고리' && (
                <S.MenuBarListItem key={menu.id}>
                  <S.MenuBarItemLink>
                    {menu.leftEl}
                    <S.MenuBarItemTitle>{menu.title}</S.MenuBarItemTitle>
                  </S.MenuBarItemLink>
                </S.MenuBarListItem>
              )}
            </>
          ))}
      </S.MenuBarList>
    </S.MenuBar>
  );
}

export default HeaderMenuBar;
