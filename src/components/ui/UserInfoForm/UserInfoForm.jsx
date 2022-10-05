import React, { useRef } from 'react';
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

const PROFILE_PIC_URL = `url('https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDZfMjI0/MDAxNTU0NDc3OTE1Mjc5.eljTe4bpgeYf2O0fbBqpB74ruNcyO5dLd2GZtXL4VEYg.p0ZIX-d01subwWzvY53FAF_hF2BHnKXuIpEB2Av8eg8g.JPEG.xvx404/1542459444594.jpg?type=w800')`;

function UserInfoForm() {
  /* 프로필 이미지 업로드에 쓰이는 useRef */
  const profileInputRef = useRef();

  /*사용자가 프로파일 이미지 등록 버튼을 클릭한 경우 호출할 핸들러.
    input[type=file]에 클릭 이벤트를 발생시킨다.*/
  const onClickUploadProilePic = (e) => {
    e.preventDefault();
    profileInputRef.current.click();
  };

  return (
    <UtilForm pd={'10rem 0'}>
      <UtilTitle>회원 정보를 입력해주세요.</UtilTitle>
      {/* 프사, 아이디, 닉네임 */}
      <S.UserProfileWrap mb={gap.xl}>
        {/* 프로필 이미지 업로드에 쓰이는 버튼 및 인풋
        이미지 경로 받아와서 bg_img_url props로 전달하면 될 듯?
        */}
        <div>
          <S.UploadProfilePicBtn
            bg_img_url={PROFILE_PIC_URL}
            onClick={onClickUploadProilePic}
          >
            프로필 이미지 업로드
          </S.UploadProfilePicBtn>
          <S.ProfilePicUploadInput ref={profileInputRef} type="file" />
        </div>
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
