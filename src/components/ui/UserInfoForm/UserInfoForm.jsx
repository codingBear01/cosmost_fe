import React, { useRef, useState } from "react";
/* components */
import * as S from "./styled";
import {
  Button,
  Input,
  ProfilePic,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from "../..";
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from "../../../style";
import { Link } from "react-router-dom";

// const PROFILE_PIC_URL = `url('https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDZfMjI0/MDAxNTU0NDc3OTE1Mjc5.eljTe4bpgeYf2O0fbBqpB74ruNcyO5dLd2GZtXL4VEYg.p0ZIX-d01subwWzvY53FAF_hF2BHnKXuIpEB2Av8eg8g.JPEG.xvx404/1542459444594.jpg?type=w800')`;
const PROFILE_PIC_DEFAULT_URL = "/assets/images/ProfileDefaultImage.png";
function UserInfoForm({ state }) {
  const [userInformation, setUserInformation] = useState({
    id: "",
    nickname: "",
    ...state,
    password: "",
    passwordConfirm: "",
    age: "default",
    marriage: "default",
    PROFILE_PIC_URL: PROFILE_PIC_DEFAULT_URL,
  });

  const [profileChangeState, setProfileChangeState] = useState(false);

  /* 프로필 이미지 업로드에 쓰이는 useRef */
  const profileInputRef = useRef();

  /*사용자가 프로파일 이미지 등록 버튼을 클릭한 경우 호출할 핸들러.
    input[type=file]에 클릭 이벤트를 발생시킨다.*/
  const onClickUploadProilePic = (e) => {
    e.preventDefault();
    profileInputRef.current.click();
  };

  /* 사용자가 데이터를 입력할 때 호출할 핸들러
     state를 전달한다. */
  const onChangeUserInformation = (e) => {
    setUserInformation({ ...userInformation, [e.target.name]: e.target.value });
  };

  /* 사용자가 프로파일 이미지를 선택했을 때 호출할 핸들러
     선택한 이미지의 URL 경로를 state로 전달한다. */
  const onChangeProfileImg = (e) => {
    const FileReaderObject = new FileReader();
    FileReaderObject.onload = () => {
      setUserInformation({
        ...userInformation,
        PROFILE_PIC_URL: FileReaderObject.result,
      });
      setProfileChangeState(true);
    };
    FileReaderObject.readAsDataURL(e.target.files.item(0));
  };

  /* 회원가입 버튼을 클릭할 때 호출할 핸들러*/
  const onSubmitRegisterUser = (e) => {
    e.preventDefault();
    const sendData = {
      loginId: userInformation.id,
      loginPwd: userInformation.password,
      email: userInformation.email,
      status: 1,
      role: 0,
      nickname: userInformation.nickname,
      address: `${userInformation.address} ${userInformation.detailAddress}`,
      birthdate: userInformation.age,
      married: userInformation.marriage,
    };
    console.log(sendData);
  };

  return (
    <UtilForm pd={"10rem 0"} onSubmit={onSubmitRegisterUser}>
      <UtilTitle>회원 정보를 입력해주세요.</UtilTitle>
      {/* 프사, 아이디, 닉네임 */}
      <S.UserProfileWrap mb={gap.xl}>
        {/* 프로필 이미지 업로드에 쓰이는 버튼 및 인풋
        이미지 경로 받아와서 bg_img_url props로 전달하면 될 듯?
        */}
        <div>
          <S.UploadProfilePicBtn
            bg_img_url={`url(${userInformation.PROFILE_PIC_URL})`}
            onClick={onClickUploadProilePic}
          >
            {profileChangeState || "프로필 이미지 업로드"}
          </S.UploadProfilePicBtn>
          <S.ProfilePicUploadInput
            ref={profileInputRef}
            type="file"
            onChange={onChangeProfileImg}
          />
        </div>
        <S.UserProfileWrap fd={"column"}>
          <UtilInputWrap>
            <Input
              type="text"
              name="id"
              value={userInformation.id}
              placeholder="아이디"
              w={"150px"}
              h={"40px"}
              mr={"0 10px"}
              onChange={onChangeUserInformation}
            />
            <Button
              type="button"
              w={"80px"}
              h={"40px"}
              bg_col={color.darkBlue}
              col={color.white}
              hov_bg_col={color.navy}
            >
              중복확인
            </Button>
          </UtilInputWrap>
          <UtilInputWrap mb={"0"}>
            <Input
              type="text"
              name="nickname"
              placeholder="닉네임"
              w={"150px"}
              h={"40px"}
              mr={"0 10px"}
              onChange={onChangeUserInformation}
            />
            <Button
              type="button"
              w={"80px"}
              h={"40px"}
              bg_col={color.darkBlue}
              col={color.white}
              hov_bg_col={color.navy}
            >
              중복확인
            </Button>
          </UtilInputWrap>
        </S.UserProfileWrap>
      </S.UserProfileWrap>
      {/* 앞서 입력한 이메일, 주소, 상세주소 */}
      <UtilInputWrap>
        <Input
          type="text"
          value={userInformation.email}
          disabled={true}
          w={"340px"}
          h={"40px"}
          mr={"0 10px"}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={userInformation.address}
          disabled={true}
          w={"340px"}
          h={"40px"}
          mr={"0 10px"}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={userInformation.detailAddress}
          disabled={true}
          w={"340px"}
          h={"40px"}
          mr={"0 10px"}
        />
      </UtilInputWrap>
      {/* 비밀번호 */}
      <UtilInputWrap>
        <Input
          type="password"
          name="password"
          value={userInformation.password}
          placeholder="비밀번호"
          w={"340px"}
          h={"40px"}
          mr={"0 10px"}
          onChange={onChangeUserInformation}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="password"
          name="passwordConfirm"
          value={userInformation.passwordConfirm}
          placeholder="비밀번호 재확인"
          w={"340px"}
          h={"40px"}
          mr={"0 10px"}
          onChange={onChangeUserInformation}
        />
      </UtilInputWrap>
      {/* 연령대, 결혼 여부 드롭다운 */}
      <S.UserInfoDropDownWrap>
        <S.UserInfoDropDown name="age" onChange={onChangeUserInformation}>
          <option value="default">연령대</option>
          <option value="10">10대</option>
          <option value="20">20대</option>
          <option value="30">30대</option>
          <option value="40">40대</option>
          <option value="50">50대</option>
          <option value="60">60대 이상</option>
        </S.UserInfoDropDown>

        <S.UserInfoDropDown name="marriage" onChange={onChangeUserInformation}>
          <option value="default">결혼 여부</option>
          <option value={"미혼"}>미혼</option>
          <option value={"기혼"}>기혼</option>
        </S.UserInfoDropDown>
      </S.UserInfoDropDownWrap>
      {/* 회원가입 버튼 */}
      {/* <Link to="/user/1"> */}
      <Button
        type={"submit"}
        w={"340px"}
        h={"40px"}
        mr={"20px 0 0 0"}
        bg_col={color.darkBlue}
        col={color.white}
        hov_bg_col={color.navy}
      >
        회원가입
      </Button>
      {/* </Link> */}
    </UtilForm>
  );
}

export default UserInfoForm;
