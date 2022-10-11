/* libraries */
import React, { useEffect } from 'react';
/* components */
import * as S from './styled';
/* icons */
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
/* static data */
import { COLOR_LIST as color } from '../../../../style';
import { sharingByKakao } from '../../../../store';

function SharingCourseModal({ courseData }) {
  return (
    <S.StyledSharingCourseModal>
      <S.SharingCourseButtonList onClick={() => sharingByKakao(courseData)}>
        <li>
          <S.SharingCourseButton bgColor={color.yellow} color={color.black}>
            <RiIcons.RiKakaoTalkFill />
          </S.SharingCourseButton>
        </li>
        <li>
          <S.SharingCourseButton bgColor={color.naverGreen} color={color.white}>
            <SiIcons.SiNaver />
          </S.SharingCourseButton>
        </li>
        <li>
          <S.SharingCourseButton bgColor={'#4480AA'} color={color.white}>
            <SiIcons.SiTwitter />
          </S.SharingCourseButton>
        </li>
        <li>
          <S.SharingCourseButton bgColor={'#1877f2'} color={color.white}>
            <AiIcons.AiFillFacebook />
          </S.SharingCourseButton>
        </li>
      </S.SharingCourseButtonList>
    </S.StyledSharingCourseModal>
  );
}

export default SharingCourseModal;
