import React, { useRef } from 'react';
/* components */
import * as S from './styled';
import { Button, Input, UtilForm, UtilInputWrap, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../style';
import { Link } from 'react-router-dom';

const PROFILE_PIC_URL = `url('https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDZfMjI0/MDAxNTU0NDc3OTE1Mjc5.eljTe4bpgeYf2O0fbBqpB74ruNcyO5dLd2GZtXL4VEYg.p0ZIX-d01subwWzvY53FAF_hF2BHnKXuIpEB2Av8eg8g.JPEG.xvx404/1542459444594.jpg?type=w800')`;

function SignUpForm({ state }) {
  /* 프로필 이미지 업로드에 쓰이는 useRef */
  const profileInputRef = useRef();

  /*사용자가 프로파일 이미지 등록 버튼을 클릭한 경우 호출할 핸들러.
    input[type=file]에 클릭 이벤트를 발생시킨다.*/
  const onClickUploadProilePic = (e) => {
    e.preventDefault();
    profileInputRef.current.click();
  };

  return (
    <UtilForm padding={'10rem 0'}>
      <UtilTitle>회원 정보를 입력해주세요.</UtilTitle>
      {/* 프사, 아이디, 닉네임 */}
      <S.UserProfileWrap marginBottom={gap.xl}>
        {/* 프로필 이미지 업로드에 쓰이는 버튼 및 인풋
        이미지 경로 받아와서 bg_img_url props로 전달하면 될 듯?
        */}
        <div>
          <S.UploadProfilePicBtn
            bgImgUrl={PROFILE_PIC_URL}
            onClick={onClickUploadProilePic}
          >
            프로필 이미지 업로드
          </S.UploadProfilePicBtn>
          <S.ProfilePicUploadInput ref={profileInputRef} type="file" />
        </div>
        <S.UserProfileWrap flexDirection={'column'}>
          <UtilInputWrap>
            <Input
              type="text"
              placeholder="아이디"
              width={'150px'}
              height={'40px'}
              margin={'0 10px'}
            />
            <Button
              type="button"
              width={'80px'}
              height={'40px'}
              color={color.white}
              bgColor={color.darkBlue}
              hoveredBgColor={color.navy}
            >
              중복확인
            </Button>
          </UtilInputWrap>
          <UtilInputWrap marginBottom={'0'}>
            <Input
              type="text"
              placeholder="닉네임"
              width={'150px'}
              height={'40px'}
              margin={'0 10px'}
            />
            <Button
              type="button"
              width={'80px'}
              height={'40px'}
              color={color.white}
              bgColor={color.darkBlue}
              hoveredBgColor={color.navy}
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
          value={state.email}
          disabled={true}
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={state.address}
          disabled={true}
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={state.detailAddress}
          disabled={true}
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
        />
      </UtilInputWrap>
      {/* 비밀번호 */}
      <UtilInputWrap>
        <Input
          type="text"
          placeholder="비밀번호"
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          placeholder="비밀번호 재확인"
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
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
      <Link to="/login">
        <Button
          type={'button'}
          width={'340px'}
          height={'40px'}
          margin={'20px 0 0 0'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
        >
          회원가입
        </Button>
      </Link>
    </UtilForm>
  );
}

export default SignUpForm;
