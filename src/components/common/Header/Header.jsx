/* hooks */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { HeaderLogo, HeaderSearchBar, HeaderUtilBtn } from './';
import { Icon } from '../../';
/* icons */
import * as BsIcons from 'react-icons/bs';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

function Header() {
  /* 서치바 Open 여부 state */
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);

  return (
    <>
      <S.Header>
        <S.HeaderContainer isSearchBarOpened={isSearchBarOpened}>
          <Link to="/">
            <HeaderLogo>cosMost</HeaderLogo>
          </Link>

          <S.HeaderUtilWrap>
            <Icon>
              <BsIcons.BsSearch />
            </Icon>
            <Link to="/login">
              <HeaderUtilBtn />
            </Link>
          </S.HeaderUtilWrap>
        </S.HeaderContainer>

        <HeaderSearchBar isSearchBarOpened={isSearchBarOpened} />
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
