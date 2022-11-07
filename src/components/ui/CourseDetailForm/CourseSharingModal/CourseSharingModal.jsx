/* libraries */
import React from 'react';
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
const currentUrl = window.location.href;

function CourseSharingModal({ courseDetail, onClickCopyCurrentPageUrl }) {
  /* SNS 공유 기능에 쓰이는 url */
  const URLS = {
    line: `https://line.me/R/msg/text/${encodeURIComponent(
      courseDetail.courseTitle
    )}${currentUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      courseDetail.courseTitle
    )}&url=${currentUrl}`,
    facebook: `http://www.facebook.com/sharer/sharer.php?u=https://cosmost-fe.vercel.app/course-detail/${courseDetail.id}`,
  };

  /* Handlers */
  /** SNS 공유 기능에 쓰이는 popUp창 생성 핸들러 */
  const onClickOpenPopUpForSharingLink = (sns) => {
    window.open(URLS[sns], '', 'width=500, height=600');
  };

  return (
    <S.StyledCourseSharingModal>
      <S.CourseSharingButtonList>
        <li>
          <S.CourseSharingButton
            bgColor={color.yellow}
            color={color.black}
            onClick={() => sharingByKakao(courseDetail)}
          >
            <RiIcons.RiKakaoTalkFill />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton
            bgColor={color.naverGreen}
            color={color.white}
            onClick={() => onClickOpenPopUpForSharingLink('line')}
          >
            <BsIcons.BsLine />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton
            bgColor={'#4480AA'}
            color={color.white}
            onClick={() => onClickOpenPopUpForSharingLink('twitter')}
          >
            <SiIcons.SiTwitter />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton
            bgColor={'#1877f2'}
            color={color.white}
            onClick={() => onClickOpenPopUpForSharingLink('facebook')}
          >
            <BsIcons.BsFacebook />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton
            bgColor={color.grey}
            color={color.white}
            onClick={onClickCopyCurrentPageUrl}
          >
            <FiIcons.FiCopy />
          </S.CourseSharingButton>
        </li>
      </S.CourseSharingButtonList>
    </S.StyledCourseSharingModal>
  );
}

export default CourseSharingModal;
