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

function CourseSharingModal({ courseData }) {
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
          <S.CourseSharingButton bgColor={color.naverGreen} color={color.white}>
            <SiIcons.SiNaver />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton bgColor={'#4480AA'} color={color.white}>
            <SiIcons.SiTwitter />
          </S.CourseSharingButton>
        </li>
        <li>
          <S.CourseSharingButton bgColor={'#1877f2'} color={color.white}>
            <AiIcons.AiFillFacebook />
          </S.CourseSharingButton>
        </li>
      </S.CourseSharingButtonList>
    </S.StyledCourseSharingModal>
  );
}

export default CourseSharingModal;
