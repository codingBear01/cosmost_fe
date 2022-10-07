/* hooks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../../../store';
/* components */
import * as S from './styled';
import { HeaderLogo, HeaderSearchBar, HeaderUtilBtn } from './';
import { Icon } from '../../';
/* icons */
import * as BsIcons from 'react-icons/bs';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

function Header() {
  const [isLoggedin, setIsLoggedin] = useRecoilState(isLoginAtom);
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);

  const onClickOpenSearchBar = () => {
    setIsSearchBarOpened(!isSearchBarOpened);
  };

  return (
    <>
      <S.Header>
        <S.HeaderContainer isSearchBarOpened={isSearchBarOpened}>
          <Link to="/">
            <HeaderLogo>cosMost</HeaderLogo>
          </Link>

          <S.HeaderUtilWrap>
            <Icon onClick={onClickOpenSearchBar}>
              <BsIcons.BsSearch />
            </Icon>
            <Link to="/login">
              <HeaderUtilBtn isLogin={isLoggedin} />
            </Link>
          </S.HeaderUtilWrap>
        </S.HeaderContainer>

        <HeaderSearchBar
          isSearchBarOpened={isSearchBarOpened}
          onClick={onClickOpenSearchBar}
        />
      </S.Header>

      <S.HeaderSearchBarOverlay isSearchBarOpened={isSearchBarOpened} />
      {/* <button
          onClick={() => setIsLogin(!isLogin)}
          style={{ color: `${color.white}` }}
        >
          로긴ㅋ
        </button> */}
    </>
  );
}

export default Header;
