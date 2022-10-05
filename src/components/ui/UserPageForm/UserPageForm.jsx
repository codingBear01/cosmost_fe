/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { UserProfilArea } from '.';
import {
  Button,
  Input,
  ProfilePic,
  UtilDiv,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';
import { USER_PAGE_MENU_LIST as menu } from '../../../data';

function UserInfoForm() {
  return (
    <UtilDiv pd={'5rem'}>
      <UtilTitle>닉네임 님</UtilTitle>
      {/* 유저 프로필 및 유저 정보, 프로필 편집 버튼 */}
      <UserProfilArea />
      {/* 유저 페이지 메뉴 목록 */}
      <S.UserPageMenuList>
        {menu &&
          menu.map((item) => (
            <Link key={item.id} to={item.path}>
              <S.UserPageMenuItem>
                {item.icon}
                <span>{item.title}</span>
              </S.UserPageMenuItem>
            </Link>
          ))}
      </S.UserPageMenuList>
    </UtilDiv>
  );
}

export default UserInfoForm;
