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

function CourseSharingModal({ courseData, onClickCopyCurrentPageUrl }) {
  /* Line 공유 기능에 쓰이는 url */
  const lineSharingUrl = `https://line.me/R/msg/text/${encodeURIComponent(
    courseData.title
  )}${currentUrl}`;
  const twitterSharingUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    courseData.title
  )}&url=${currentUrl}`;
  const facebookSharingUrl = `http://www.facebook.com/sharer/sharer.php?u=http://127.0.0.1:3000/course-detail/1`; // 배포 후 ?u= 뒤를 배포한 url로 변경

  /* Handlers */
  /* Line 공유 기능에 쓰이는 popup창 생성 핸들러 */
  const onClickOpenPopUpForSharingLink = (sns) => {
    if (sns === 'line') {
      window.open(lineSharingUrl, '', 'width=500, height=600');
    } else if (sns === 'twitter') {
      window.open(twitterSharingUrl, '', 'width=500, height=600');
    } else {
      window.open(facebookSharingUrl, '', 'width=500, height=600');
    }
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
