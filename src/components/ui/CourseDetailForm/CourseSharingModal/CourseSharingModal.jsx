/* libraries */
import React, { useEffect } from 'react';
import ReactLineShareBtn from 'react-line-share-btn';
/* components */
import * as S from './styled';
/* icons */
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
/* static data */
import { COLOR_LIST as color } from '../../../../style';
import { sharingByKakao } from '../../../../store';

/* 현재 접속한 페이지 url */
const sharedUrl = window.location.href;

function CourseSharingModal({ courseData }) {
  /* Line 공유 기능에 쓰이는 url */
  const lineSharingUrl = `https://line.me/R/msg/text/${encodeURIComponent(
    courseData.title
  )}${sharedUrl}`;

  /* Line 공유 기능에 쓰이는 popup창 생성 함수 */
  const onClickCreatePopUpForLineSharing = () => {
    window.open(lineSharingUrl, 'name', 'width=600, height=600');
  };

  return (
    <S.StyledCourseSharingModal>
      <S.CourseSharingButtonList>
        <li>
          <S.CourseSharingButton
            bgColor={color.yellow}
            color={color.black}
            onClick={() => sharingByKakao(courseData)}
          >
            <RiIcons.RiKakaoTalkFill />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton
            bgColor={color.naverGreen}
            color={color.white}
            onClick={onClickCreatePopUpForLineSharing}
          >
            <BsIcons.BsLine />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton bgColor={'#4480AA'} color={color.white}>
            <SiIcons.SiTwitter />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton bgColor={'#1877f2'} color={color.white}>
            <BsIcons.BsFacebook />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton bgColor={color.grey} color={color.white}>
            <FiIcons.FiCopy />
          </S.CourseSharingButton>
        </li>
      </S.CourseSharingButtonList>
    </S.StyledCourseSharingModal>
  );
}

export default CourseSharingModal;
