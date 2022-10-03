/* hooks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../../../store';
/* components */
import * as S from './styled';
import { HeaderIcon, HeaderLogo, HeaderSearchBar, HeaderUtilBtn } from './';
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
        <S.HeaderContainer>
          <Link to="/">
            <HeaderLogo>cosMost</HeaderLogo>
          </Link>

          <HeaderSearchBar
            isSearchBarOpen={isSearchBarOpen}
            onClick={onSearchBarOpen}
          />

          <S.HeaderUtilWrap>
            <HeaderIcon onClick={onSearchBarOpen}>
              <BsIcons.BsSearch />
            </HeaderIcon>
            <HeaderUtilBtn isLogin={isLogin} />
          </S.HeaderUtilWrap>
        </S.HeaderContainer>

        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{ color: `${color.white}` }}
        >
          로긴ㅋ
        </button>
      </S.Header>
    </>
  );
}

export default Header;
