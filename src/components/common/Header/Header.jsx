/* hooks */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button, SmallProfilePic } from '../';
import {
  HeaderLogo,
  HeaderMenuIcon,
  HeaderSearchIcon,
  HeaderSearchInput,
} from './';
/* react-icons */
import { GrClose } from 'react-icons/gr';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { RiPoliceCarLine } from 'react-icons/ri';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../style';
import { REPORT_CATEGORIES_LIST } from '../../../data';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const pathName = useLocation().pathname;

  const handleClickLogin = () => {
    setIsLogin(!isLogin);
  };

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

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert('신고가 되었읍니다!🚔👮‍♂️');
  };

  // 메뉴바 및 신고 모달창 떴을 때 뒷화면 스크롤 잠금
  useEffect(() => {
    if (isMenuBarOpen || isReportModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuBarOpen, isReportModalOpen]);

  const handleScrollY = () => {
    if (pathName === '/' && window.scrollY < 307) {
      setIsSearchBarOpen(false);
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleScrollY);
    };
    watch();
    return () => window.removeEventListener('scroll', handleScrollY);
  }, []);

  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <Link to="/">
            <HeaderLogo>cosMost</HeaderLogo>
          </Link>

          <HeaderSearchInput
            type={'text'}
            width={'120rem'}
            height={'3.8rem'}
            fontSize={fs.s}
            isSearchBarOpen={isSearchBarOpen}
            scrollY={scrollY}
          />

          <S.HeaderUtilWrap>
            <HeaderSearchIcon
              handleSearchBarOpen={handleSearchBarOpen}
              pathName={pathName}
              scrollY={scrollY}
            ></HeaderSearchIcon>

            <Link to="/course/register">
              <Button width={'14rem'} height={'4rem'} fontSize={'1.4rem'}>
                코스 등록하기
              </Button>
            </Link>

            <HeaderMenuIcon
              handleMenuBarOpen={handleMenuBarOpen}
            ></HeaderMenuIcon>
          </S.HeaderUtilWrap>
        </S.HeaderContainer>
      </S.Header>

      <S.MenuBarBackGround isMenuBarOpen={isMenuBarOpen}></S.MenuBarBackGround>

      <S.MenuBarList isMenuBarOpen={isMenuBarOpen}>
        <GrClose onClick={handleMenuBarOpen} />
        {!isLogin && (
          <>
            <S.MenuBarListItem onClick={handleClickLogin}>
              {/* <Link to="/login"> */}
              <IoMdLogIn />
              <span>로그인</span>
              {/* </Link> */}
            </S.MenuBarListItem>
            <S.MenuBarListItem>
              <Link to="/register/agreement">
                <AiOutlineUserAdd />
                <span>회원가입</span>
              </Link>
            </S.MenuBarListItem>
          </>
        )}
        {isLogin && (
          <>
            <S.MenuBarListItem>
              <Link to="/user">
                <SmallProfilePic
                  src={
                    'https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg'
                  }
                  alt={'img'}
                />
                <span>닉네임</span>
              </Link>
            </S.MenuBarListItem>
            <S.MenuBarListItem>
              <IoMdLogOut />
              <span onClick={handleClickLogin}>로그아웃</span>
            </S.MenuBarListItem>
            <S.MenuBarListItem onClick={handleReportModalOpen}>
              <RiPoliceCarLine />
              <span>신고하기</span>
            </S.MenuBarListItem>
          </>
        )}
        <S.MenuBarListItem>
          <BiCategory />
          <span>카테고리</span>
        </S.MenuBarListItem>
      </S.MenuBarList>

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
