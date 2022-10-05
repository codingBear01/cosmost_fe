import React from 'react';
/* components */
import * as S from './styled';
import {
  Button,
  Input,
  ProfilePic,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../style';

function UserInfoForm() {
  return (
    <UtilForm pd={'10rem 0'}>
      <UtilTitle>회원 정보를 입력해주세요.</UtilTitle>
      {/* 프사, 아이디, 닉네임 */}
      <S.UserProfileWrap mb={gap.xl}>
        <ProfilePic w={'100px'} h={'100px'} />
        <S.UserProfileWrap fd={'column'}>
          <UtilInputWrap>
            <Input
              type="text"
              placeholder="아이디"
              w={'150px'}
              h={'40px'}
              mr={'0 10px'}
            />
            <Button
              type="button"
              w={'80px'}
              h={'40px'}
              bg_color={color.darkBlue}
              col={color.white}
              ho_color={color.navy}
            >
              중복확인
            </Button>
          </UtilInputWrap>
          <UtilInputWrap mb={'0'}>
            <Input
              type="text"
              placeholder="닉네임"
              w={'150px'}
              h={'40px'}
              mr={'0 10px'}
            />
            <Button
              type="button"
              w={'80px'}
              h={'40px'}
              bg_color={color.darkBlue}
              col={color.white}
              ho_color={color.navy}
            >
              중복확인
            </Button>
          </UtilInputWrap>
        </S.UserProfileWrap>
      </S.UserProfileWrap>
      {/* 앞서 입력한 이메일, 주소 */}
      <UtilInputWrap>
        <Input
          type="text"
          value="jokingbear01@gmail.com"
          disabled={true}
          w={'340px'}
          h={'40px'}
          mr={'0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value="부산시 수영구 광서로 42번길 9호 1층"
          disabled={true}
          w={'340px'}
          h={'40px'}
          mr={'0 10px'}
        />
      </UtilInputWrap>
      {/* 비밀번호 */}
      <UtilInputWrap>
        <Input
          type="text"
          placeholder="비밀번호"
          w={'340px'}
          h={'40px'}
          mr={'0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          placeholder="비밀번호 재확인"
          w={'340px'}
          h={'40px'}
          mr={'0 10px'}
        />
      </UtilInputWrap>
      {/* 연령대, 결혼 여부 드롭다운 */}
      <S.UserInfoDropDownWrap>
        <S.UserInfoDropDown name="age">
          <option value="default">연령대</option>
          <option value="10">10대</option>
          <option value="20">20대</option>
          <option value="30">30대</option>
          <option value="40">40대</option>
          <option value="50">50대</option>
          <option value="60">60대 이상</option>
        </S.UserInfoDropDown>

        <S.UserInfoDropDown name="marriage">
          <option value="default">결혼 여부</option>
          <option value={false}>미혼</option>
          <option value={true}>기혼</option>
        </S.UserInfoDropDown>
      </S.UserInfoDropDownWrap>
      {/* 회원가입 버튼 */}
      <Button
        type={'button'}
        w={'340px'}
        h={'40px'}
        mr={'20px 0 0 0'}
        bg_color={color.darkBlue}
        col={color.white}
        ho_color={color.navy}
      >
        회원가입
      </Button>
    </UtilForm>
  );
}

export default UserInfoForm;
