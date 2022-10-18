/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom } from '../../../../store';
/* components */
import * as S from './styled';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

function UserPageMenuList({ onClickOpenReportForm }) {
  const navigate = useNavigate();

  const [, setIsLoggedIn] = useRecoilState(loginStateAtom);

  /* Handlers */
  const onClickLogOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    // 유저 페이지 메뉴들
    <S.UserPageMenuList>
      <Link to="/course-registration">
        <S.UserPageMenuItem>
          <AiIcons.AiOutlineAppstoreAdd />
          <span>코스 등록하기</span>
        </S.UserPageMenuItem>
      </Link>
      <Link to="/searched-courses">
        <S.UserPageMenuItem>
          <TbIcons.TbRoad />
          <span>내가 등록한 코스</span>
        </S.UserPageMenuItem>
      </Link>
      <Link to="/searched-courses">
        <S.UserPageMenuItem>
          <FaIcons.FaRegThumbsUp />
          <span>좋아요 한 코스</span>
        </S.UserPageMenuItem>
      </Link>
      <Link to="review-histories">
        <S.UserPageMenuItem>
          <MdIcons.MdOutlineRateReview />
          <span>내가 남긴 리뷰</span>
        </S.UserPageMenuItem>
      </Link>
      <S.UserPageMenuItem onClick={onClickOpenReportForm}>
        <AiIcons.AiOutlineAlert />
        <span>신고하기</span>
      </S.UserPageMenuItem>
      <Link to="report-histories">
        <S.UserPageMenuItem>
          <RiIcons.RiPoliceCarLine />
          <span>신고내역</span>
        </S.UserPageMenuItem>
      </Link>
      <S.UserPageMenuItem
        style={{ fontSize: `${fs.m}` }}
        onClick={onClickLogOut}
      >
        <AiIcons.AiOutlineLogout style={{ fontSize: `${fs.m}` }} />
        <span>로그아웃</span>
      </S.UserPageMenuItem>
    </S.UserPageMenuList>
  );
}

export default UserPageMenuList;
