/* hooks */
import React, { useEffect, useState } from 'react';
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
  /* States */
  /* 서치바 Open 여부 state */
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);

  /* Handlers */
  /* 서치바 Open 여부 조작하는 핸들러. 클릭 시 Open state를 반대로 변경 */
  const onClickOpenSearchBar = () => {
    setIsSearchBarOpened(!isSearchBarOpened);
  };

  /* Hooks */
  /* 서치바 열렸을 때 바깥 영역 스크롤 방지하는 함수 */
  useEffect(() => {
    isSearchBarOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [isSearchBarOpened]);

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
              <HeaderUtilBtn />
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
