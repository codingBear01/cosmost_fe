/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { UserPageMenuList, UserProfilArea } from '.';
import { UtilDiv, UtilTitle } from '../..';

function UserInfoForm() {
  return (
    <UtilDiv pd={'5rem'}>
      <UtilTitle>닉네임 님</UtilTitle>
      {/* 유저 프로필 및 유저 정보, 프로필 편집 버튼 */}
      <UserProfilArea />
      {/* 유저 페이지 메뉴 목록 */}
      <UserPageMenuList />
    </UtilDiv>
  );
}

export default UserInfoForm;
