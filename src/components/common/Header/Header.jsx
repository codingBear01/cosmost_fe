/* hooks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { searchBarOpenAtom } from '../../../store';
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
} from './';
/* react-icons */
import { GrClose } from 'react-icons/gr';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';
import { REPORT_CATEGORIES_LIST, MENUBAR_MENU_LIST } from '../../../data';

console.log(MENUBAR_MENU_LIST);

function Header({ pathName, scrollY }) {
  // 로그인/로그아웃 레이아웃을 보기 위한 임시 state
  const [isLogin, setIsLogin] = useState(false);

  /* 메뉴바, 신고 모달창, 헤더 서치바 open 관련 sates */
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] =
    useRecoilState(searchBarOpenAtom);

  // 로그인/로그아웃 레이아웃을 보기 위한 임시 함수
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  /* 메뉴바, 신고 모달창, 헤더 서치바 open 조작 함수 */
  const handleMenuBarOpen = () => {
    setIsMenuBarOpen(!isMenuBarOpen);
    setIsReportModalOpen(false);
  };
  const handleReportModalOpen = () => {
    setIsReportModalOpen(!isReportModalOpen);
    setIsMenuBarOpen(false);
  };
  const handleSearchBarOpen = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  /* 신고 submit 함수*/
  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert('신고가 되었읍니다!🚔👮‍♂️');
  };

  /* 메뉴바 및 신고 모달창 떴을 때 뒷화면 스크롤 잠금 */
  useEffect(() => {
    if (isMenuBarOpen || isReportModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuBarOpen, isReportModalOpen]);

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

      <S.ReportModal isReportModalOpen={isReportModalOpen}>
        <S.ReportForm>
          <S.ReportFormHeader>
            <S.ReportTitle>신고하기</S.ReportTitle>
            <GrClose onClick={handleReportModalOpen} />
          </S.ReportFormHeader>

          <S.ReportCategories>
            {REPORT_CATEGORIES_LIST &&
              REPORT_CATEGORIES_LIST.map((cat, i) => (
                <option key={cat.id} value={cat.value}>
                  {cat.option}
                </option>
              ))}
          </S.ReportCategories>

          <S.ReportTitleInput
            type={'text'}
            placeholder="제목"
            maxLength={50}
            width={'50rem'}
            height={'5rem'}
            fontSize={fs.l}
          />
          <S.ReportContent
            placeholder="신고 내용"
            maxLength={500}
          ></S.ReportContent>
          <S.ReportBtnWrap>
            <S.ReportBtn
              type="button"
              action={'cancel'}
              onClick={handleReportModalOpen}
            >
              취소
            </S.ReportBtn>
            <S.ReportBtn
              type="submit"
              action={'report'}
              onClick={handleReportSubmit}
            >
              신고
            </S.ReportBtn>
          </S.ReportBtnWrap>
        </S.ReportForm>
      </S.ReportModal>
    </>
  );
}

export default Header;
