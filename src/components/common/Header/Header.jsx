import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { Button, SmallProfilePic } from "../";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenuIcon } from "./HeaderMenuIcon";
import { HeaderSearchIcon } from "./HeaderSearchIcon";
import { GrClose } from "react-icons/gr";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { RiPoliceCarLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FONT_SIZE_LIST as fs } from "../../../style";
import { REPORT_CATEGORIES_LIST } from "../../../data";

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportContent, setReportContent] = useState("");

  const onClickLogin = () => {
    setIsLogin(!isLogin);
  };

  const onMenuBarOpen = () => {
    setIsMenuBarOpen(!isMenuBarOpen);
    setIsReportModalOpen(false);
  };

  const onReportModalOpen = () => {
    setIsReportModalOpen(!isReportModalOpen);
    setIsMenuBarOpen(false);
  };

  const handleReportContentChange = (e) => {
    const val = e.target.value;
    setReportContent(val);
  };

  const onReportSubmit = (e) => {
    e.preventDefault();
    alert("신고가 되었읍니다!🚔👮‍♂️");
  };

  // 메뉴바 및 신고 모달창 떴을 때 뒷화면 스크롤 잠금
  useEffect(() => {
    if (isMenuBarOpen || isReportModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuBarOpen, isReportModalOpen]);

  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <Link to="/">
            <HeaderLogo>cosMost</HeaderLogo>
          </Link>

          <S.HeaderUtilWrap>
            <HeaderSearchIcon></HeaderSearchIcon>

            <Link to="/course/register">
              <Button width={"14rem"} height={"4rem"} fontSize={"1.4rem"}>
                코스 등록하기
              </Button>
            </Link>

            <HeaderMenuIcon onMenuBarOpen={onMenuBarOpen}></HeaderMenuIcon>
          </S.HeaderUtilWrap>
        </S.HeaderContainer>
      </S.Header>

      <S.MenuBarBackGround isMenuBarOpen={isMenuBarOpen}></S.MenuBarBackGround>

      <S.MenuBarList isMenuBarOpen={isMenuBarOpen}>
        <GrClose onClick={onMenuBarOpen} />
        {!isLogin && (
          <>
            <S.MenuBarListItem onClick={onClickLogin}>
              {/* <Link to="/login"> */}
              <IoMdLogIn />
              <span>로그인</span>
              {/* </Link> */}
            </S.MenuBarListItem>
            <S.MenuBarListItem>
              <Link to="/signup/agreement">
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
                    "https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg"
                  }
                  alt={"img"}
                />
                <span>닉네임</span>
              </Link>
            </S.MenuBarListItem>
            <S.MenuBarListItem>
              <IoMdLogOut />
              <span onClick={onClickLogin}>로그아웃</span>
            </S.MenuBarListItem>
            <S.MenuBarListItem onClick={onReportModalOpen}>
              <RiPoliceCarLine />
              <span>신고하기</span>
            </S.MenuBarListItem>
          </>
        )}
        <S.MenuBarListItem>
          <span>
            <BiCategory />
          </span>
          <span>카테고리</span>
        </S.MenuBarListItem>
      </S.MenuBarList>

      <S.ReportModal isReportModalOpen={isReportModalOpen}>
        <S.ReportForm>
          <S.ReportFormHeader>
            <S.ReportTitle>신고하기</S.ReportTitle>
            <GrClose onClick={onReportModalOpen} />
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
            placeholder="제목"
            maxLength={50}
            width={"50rem"}
            height={"5rem"}
            fontSize={fs.l}
          />
          <S.ReportContent
            placeholder="신고 내용"
            maxLength={500}
            onChange={handleReportContentChange}
          ></S.ReportContent>
          <S.ReportBtnWrap>
            <S.ReportBtn
              type="button"
              action={"cancel"}
              onClick={onReportModalOpen}
            >
              취소
            </S.ReportBtn>
            <S.ReportBtn
              type="submit"
              action={"report"}
              onClick={onReportSubmit}
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
