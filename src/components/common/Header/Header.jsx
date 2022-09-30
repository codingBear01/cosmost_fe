/* hooks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import {
  searchBarOpenAtom,
  categoryOpenAtom,
  guCategoryOpenAtom,
  themeCategoryOpenAtom,
} from '../../../store';
/* components */
import * as S from './styled';
import { Button } from '../';
import {
  HeaderLogo,
  HeaderMenuBar,
  HeaderMenuBarBg,
  HeaderMenuIcon,
  HeaderSearchIcon,
  HeaderSearchInput,
  ReportModal,
} from './';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

function Header({ pathName, scrollY }) {
  // 로그인/로그아웃 레이아웃을 보기 위한 임시 state
  const [isLogin, setIsLogin] = useState(false);

  /* 메뉴바, 신고 모달창, 헤더 서치바 open 관련 sates */
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] =
    useRecoilState(searchBarOpenAtom);
  const [isCategoryOpen, setIsCategoryOpen] = useRecoilState(categoryOpenAtom);
  const [isGuCategoryOpen, setIsGuCategoryOpen] =
    useRecoilState(guCategoryOpenAtom);
  const [isThemeCategoryOpen, setIsThemeCategoryOpen] = useRecoilState(
    themeCategoryOpenAtom
  );

  // 로그인/로그아웃 레이아웃을 보기 위한 임시 함수
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  /* 메뉴바, 신고 모달창, 헤더 서치바 open 조작 함수 */
  // 메뉴 아이콘 클릭시 카테고리 관련 OpenStates false 처리
  const handleMenuBarOpen = () => {
    setIsMenuBarOpen(!isMenuBarOpen);
    setIsReportModalOpen(false);
    setIsCategoryOpen(false);
    setIsGuCategoryOpen(false);
    setIsThemeCategoryOpen(false);
  };
  const handleReportModalOpen = () => {
    setIsReportModalOpen(!isReportModalOpen);
    setIsMenuBarOpen(false);
  };
  const handleSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  /* 메뉴바 및 신고 모달창 떴을 때 뒷화면 스크롤 잠금 */
  useEffect(() => {
    if (isMenuBarOpen || isReportModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuBarOpen, isReportModalOpen]);

  // 메인 페이지 이외에 접속할 경우 서치바 닫는 함수
  useEffect(() => {
    if (pathName !== '/') setIsSearchBarOpen(false);
  }, []);

  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <Link to="/">
            <HeaderLogo>cosMost</HeaderLogo>
          </Link>

          <S.HeaderSearchWrap>
            <HeaderSearchInput
              type={'text'}
              width={'100%'}
              height={'3.8rem'}
              fontSize={fs.s}
              isSearchBarOpen={isSearchBarOpen}
              pathName={pathName}
              scrollY={scrollY}
            />
          </S.HeaderSearchWrap>

          <S.HeaderUtilWrap>
            <HeaderSearchIcon
              handleSearchBarOpen={handleSearchBarOpen}
              pathName={pathName}
              scrollY={scrollY}
            ></HeaderSearchIcon>

            <Link to="/course/register">
              <Button
                width={'14rem'}
                height={'4rem'}
                fontSize={'1.4rem'}
                bgColor={color.lightBlue}
              >
                코스 등록하기
              </Button>
            </Link>

            <HeaderMenuIcon
              handleMenuBarOpen={handleMenuBarOpen}
            ></HeaderMenuIcon>
          </S.HeaderUtilWrap>
        </S.HeaderContainer>
      </S.Header>

      <HeaderMenuBar
        handleReportModalOpen={handleReportModalOpen}
        handleMenuBarOpen={handleMenuBarOpen}
        handleLogin={handleLogin}
        isMenuBarOpen={isMenuBarOpen}
        isLogin={isLogin}
      ></HeaderMenuBar>

      <HeaderMenuBarBg isMenuBarOpen={isMenuBarOpen}></HeaderMenuBarBg>

      <ReportModal
        handleReportModalOpen={handleReportModalOpen}
        isReportModalOpen={isReportModalOpen}
      ></ReportModal>
    </>
  );
}

export default Header;
