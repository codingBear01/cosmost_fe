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
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const onSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  return (
    <>
      <S.Header>
        <S.HeaderContainer isSearchBarOpen={isSearchBarOpen}>
          <Link to="/">
            <HeaderLogo>cosMost</HeaderLogo>
          </Link>

          <S.HeaderUtilWrap>
            <Icon onClick={onSearchBarOpen}>
              <BsIcons.BsSearch />
            </Icon>
            <HeaderUtilBtn isLogin={isLogin} />
          </S.HeaderUtilWrap>
        </S.HeaderContainer>

        <HeaderSearchBar
          isSearchBarOpen={isSearchBarOpen}
          onClick={onSearchBarOpen}
        />
      </S.Header>

      <S.HeaderSearchBarOverlay isSearchBarOpen={isSearchBarOpen} />
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
