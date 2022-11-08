/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom } from '../../../store';
/* components */
import * as S from './styled';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';

function MenuListForm({ onClickOpenReportForm }) {
  const navigate = useNavigate();

  const path = useLocation().pathname;
  const user = useLocation().state;
  const token = localStorage.getItem('token');
  const isEditUserPage = path.includes('edit');

  const [, setIsLoggedIn] = useRecoilState(loginStateAtom);

  /* Handlers */
  const onClickLogOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  if (isEditUserPage) {
    return (
      // 사용자 정보 변경 메뉴
      <S.MenuList>
        <Link to="/user/edit/email" state={user}>
          <S.MenuItem>
            <AiIcons.AiOutlineMail />
            <span>이메일 변경</span>
          </S.MenuItem>
        </Link>
        <Link to="/user/edit/address" state={user}>
          <S.MenuItem>
            <AiIcons.AiOutlineHome />
            <span>주소 변경</span>
          </S.MenuItem>
        </Link>
        <Link to="/user/edit/my-information" state={user}>
          <S.MenuItem>
            <RiIcons.RiUserSettingsLine />
            <span>회원정보 변경</span>
          </S.MenuItem>
        </Link>
        <Link to="/user/edit/password" state={user}>
          <S.MenuItem>
            <BsIcons.BsKey />
            <span>비밀번호 변경</span>
          </S.MenuItem>
        </Link>
        <Link to="/user/withdrawal" state={user}>
          <S.MenuItem style={{ fontSize: '16px' }}>
            <TbIcons.TbUserOff />
            <span>회원 탈퇴</span>
          </S.MenuItem>
        </Link>
      </S.MenuList>
    );
  } else {
    return (
      // 유저 페이지 메뉴들
      <S.MenuList>
        <Link to="/course-registration">
          <S.MenuItem>
            <AiIcons.AiOutlineAppstoreAdd />
            <span>코스 등록하기</span>
          </S.MenuItem>
        </Link>
        <Link to="/courses/mine">
          <S.MenuItem>
            <TbIcons.TbRoad />
            <span>내가 등록한 코스</span>
          </S.MenuItem>
        </Link>
        <Link to="/courses/likes">
          <S.MenuItem>
            <FaIcons.FaRegThumbsUp />
            <span>좋아요 한 코스</span>
          </S.MenuItem>
        </Link>
        <Link to="review-histories">
          <S.MenuItem>
            <MdIcons.MdOutlineRateReview />
            <span>내가 남긴 리뷰</span>
          </S.MenuItem>
        </Link>
        <S.MenuItem onClick={onClickOpenReportForm}>
          <AiIcons.AiOutlineAlert />
          <span>신고하기</span>
        </S.MenuItem>
        <Link to="report-histories">
          <S.MenuItem>
            <RiIcons.RiPoliceCarLine />
            <span>신고내역</span>
          </S.MenuItem>
        </Link>
        <S.MenuItem style={{ fontSize: '16px' }} onClick={onClickLogOut}>
          <AiIcons.AiOutlineLogout style={{ fontSize: `${fs.m}` }} />
          <span>로그아웃</span>
        </S.MenuItem>
      </S.MenuList>
    );
  }
}

export default MenuListForm;
