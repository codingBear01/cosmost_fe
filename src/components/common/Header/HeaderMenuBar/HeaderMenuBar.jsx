/* hooks */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
import { SmallProfilePic } from '../../../';
/* static data */
import { MENUBAR_MENU_LIST } from '../../../../data';
/* icons */
// import { IoIosClose } from 'react-icons/io';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

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
        <IoIcons.IoIosClose />
      </S.MenuBarCloseBtn>

      <S.MenuBarList>
        {!isLogin && (
          <>
            <S.MenuBarListItem onClick={handleLogin}>
              <S.MenuBarItemLink>
                <AiIcons.AiOutlineLogin />
                <S.MenuBarItemTitle>로그인</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
            <S.MenuBarListItem>
              <S.MenuBarItemLink to="/signup/agreement">
                <AiIcons.AiOutlineUserAdd />
                <S.MenuBarItemTitle>회원가입</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
          </>
        )}
        {isLogin && (
          <>
            <S.MenuBarListItem>
              <S.MenuBarItemLink to="/user">
                <SmallProfilePic
                  src="https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg"
                  alt="profile_pic"
                />
                <S.MenuBarItemTitle>닉네임</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
            <S.MenuBarListItem onClick={handleLogin}>
              <S.MenuBarItemLink>
                <AiIcons.AiOutlineLogout />
                <S.MenuBarItemTitle>로그아웃</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
            <S.MenuBarListItem onClick={handleReportModalOpen}>
              <S.MenuBarItemLink>
                <RiIcons.RiPoliceCarLine />
                <S.MenuBarItemTitle>신고하기</S.MenuBarItemTitle>
              </S.MenuBarItemLink>
            </S.MenuBarListItem>
          </>
        )}
        <S.MenuBarListItem>
          <S.MenuBarItemLink>
            <BiIcons.BiCategory />
            <S.MenuBarItemTitle>카테고리</S.MenuBarItemTitle>
          </S.MenuBarItemLink>
        </S.MenuBarListItem>
      </S.MenuBarList>
    </S.MenuBar>
  );
}

export default HeaderMenuBar;
