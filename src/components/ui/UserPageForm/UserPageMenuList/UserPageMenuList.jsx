/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

function UserPageMenuList({ onClickOpenReportModal }) {
  return (
    <S.UserPageMenuList>
      <Link to="/">
        <S.UserPageMenuItem>
          <AiIcons.AiOutlineAppstoreAdd />
          <span>코스 등록하기</span>
        </S.UserPageMenuItem>
      </Link>
      <Link to="/">
        <S.UserPageMenuItem>
          <TbIcons.TbRoad />
          <span>내가 등록한 코스</span>
        </S.UserPageMenuItem>
      </Link>
      <Link to="/">
        <S.UserPageMenuItem>
          <FaIcons.FaRegThumbsUp />
          <span>좋아요 한 코스</span>
        </S.UserPageMenuItem>
      </Link>
      <Link to="/">
        <S.UserPageMenuItem>
          <MdIcons.MdOutlineRateReview />
          <span>내가 남긴 리뷰</span>
        </S.UserPageMenuItem>
      </Link>
      <S.UserPageMenuItem onClick={onClickOpenReportModal}>
        <AiIcons.AiOutlineAlert />
        <span>신고하기</span>
      </S.UserPageMenuItem>
      <Link to="/">
        <S.UserPageMenuItem>
          <RiIcons.RiPoliceCarLine />
          <span>신고내역</span>
        </S.UserPageMenuItem>
      </Link>
      <Link to="/">
        <S.UserPageMenuItem>
          <AiIcons.AiOutlineLogout />
          <span>로그아웃</span>
        </S.UserPageMenuItem>
      </Link>
    </S.UserPageMenuList>
  );
}

export default UserPageMenuList;
