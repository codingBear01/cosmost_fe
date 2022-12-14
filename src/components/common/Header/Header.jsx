/* hooks */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { HeaderLogo, HeaderSearchBar, HeaderUtilBtn } from './';
import { Icon } from '../../';
/* static data */
import { GAP_LIST as gap } from '../../../style';
/* icons */
import * as BsIcons from 'react-icons/bs';

function Header() {
  /* States */
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  /* Handlers */
  /** 서치바 Open 여부 조작하는 핸들러 */
  const onClickOpenSearchBar = () => {
    setIsSearchBarOpened(!isSearchBarOpened);
    setSearchKeyword('');
  };

  /* Hooks */
  /** 서치바 열렸을 때 바깥 영역 스크롤 방지하는 함수 */
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
            <Icon
              marginRight={'3rem'}
              onClick={onClickOpenSearchBar}
              style={{ marginRight: '1rem' }}
            >
              <BsIcons.BsSearch />
            </Icon>
            <HeaderUtilBtn />
          </S.HeaderUtilWrap>
        </S.HeaderContainer>

        <HeaderSearchBar
          isSearchBarOpened={isSearchBarOpened}
          setIsSearchBarOpened={setIsSearchBarOpened}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          onClickOpenSearchBar={onClickOpenSearchBar}
        />
      </S.Header>

      <S.HeaderSearchBarOverlay isSearchBarOpened={isSearchBarOpened} />
    </>
  );
}

export default Header;
