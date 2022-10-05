import React from 'react';
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

function UserInfoForm() {
  return (
    <UtilDiv pd={'5rem'}>
      <UtilTitle>닉네임 님</UtilTitle>
      <UserProfilArea />
    </UtilDiv>
  );
}

export default UserInfoForm;
