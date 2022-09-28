import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BsFillCircleFill } from "react-icons/bs";
import {
  COLOR_LIST,
  BORDER_RADIUS_LIST,
  GAP_LIST,
  FONT_SIZE_LIST,
} from "../../style/styles";
import { Link } from "react-router-dom";
import {
  FlexDiv,
  Input,
  PageRootDiv,
  HeightCenterDiv,
  PageTitle,
} from "../common";
import { Button } from "../";

const profileImageDefaultPath = "/assets/images/ProfileDefaultImage.png";

const SignUpInput = styled(Input)`
  background-color: ${COLOR_LIST.white};
  border: 1px solid ${COLOR_LIST.grey};
  color : ${COLOR_LIST.black};
  &::placeholder {
    font-size : 1rem;
    color: ${COLOR_LIST.grey}};
  }
`;

const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  margin-right: 2rem;
  border-radius: ${BORDER_RADIUS_LIST.circle};
`;

const SingUpForm = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

function SignUpPage() {
  const profileInputRef = useRef();
  const [inputState, setInputState] = useState({
    nickname: "",
    id: "",
    profileImage: profileImageDefaultPath,
    password: "",
    passwordConfirm: "",
    name: "",
    year: "",
    month: "",
    day: "",
    address: "",
    maritalStatus: "",
    email: "",
  });

  /*사용자가 input에 텍스트를 입력할 때 호출할 핸들러
    사용자가 입력한 값들을 state로 넘겨준다.*/
  const onChangeInput = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  /*사용자가 프로파일 이미지 등록 버튼을 클릭한 경우 호출할 핸들러.
    input[type=file]에 클릭 이벤트를 발생시킨다.*/
  const onClickProfileButton = (e) => {
    e.preventDefault();
    profileInputRef.current.click();
  };

  /*사용자가 모달창에서 프로파일 이미지를 선택 후 확인을 눌렀을 시 호출할 핸들러.
    사용자가 등록한 이미지 경로를 URL로 변환한 후 State로 넘겨준다.*/
  const onChangeProfileImage = (e) => {
    const fileReader = new FileReader();
    const selectImageFile = e.currentTarget.files.item(0);
    fileReader.onload = (e) => {
      setInputState({ ...inputState, profileImage: fileReader.result });
    };
    fileReader.readAsDataURL(selectImageFile);
  };

  return (
    <HeightCenterDiv height={"auto"}>
      <HeightCenterDiv height={"auto"}>
        <PageTitle>CosMost</PageTitle>
        <SingUpForm>
          <FlexDiv justifyContent={"space-between"}>
            <div>
              <ProfileImage src={inputState.profileImage} />
            </div>
            <div>
              <FlexDiv justifyContent={"space-between"} margin={"0 0 2rem 0"}>
                <SignUpInput
                  onChange={onChangeInput}
                  name="nickname"
                  placeholder="닉네임"
                  width={"9.5rem"}
                  height={"4rem"}
                ></SignUpInput>
                <Button width={"13rem"} height={"4rem"} fontSize={"1.7rem"}>
                  중복확인
                </Button>
              </FlexDiv>
              <div>
                <SignUpInput
                  ref={profileInputRef}
                  onChange={onChangeProfileImage}
                  type="file"
                  style={{ display: "none" }}
                />
                <Button
                  width={"25rem"}
                  height={"4rem"}
                  fontSize={"1.7rem"}
                  onClick={onClickProfileButton}
                >
                  프로필 이미지 업로드
                </Button>
              </div>
            </div>
          </FlexDiv>
          <FlexDiv justifyContent={"space-between"}>
            <SignUpInput
              onChange={onChangeInput}
              name="id"
              placeholder="아이디"
              width={"19rem"}
              height={"4rem"}
            ></SignUpInput>
            <Button width={"13rem"} height={"4rem"} fontSize={"1.7rem"}>
              중복확인
            </Button>
          </FlexDiv>
          <div>
            <SignUpInput
              onChange={onChangeInput}
              name="password"
              placeholder="비밀번호"
              width={"33rem"}
              height={"4rem"}
            ></SignUpInput>
          </div>
          <div>
            <SignUpInput
              onChange={onChangeInput}
              name="passwordConfirm"
              placeholder="비밀번호 재확인"
              width={"33rem"}
              height={"4rem"}
            ></SignUpInput>
          </div>
          <div>
            <SignUpInput
              onChange={onChangeInput}
              name="name"
              placeholder="이름"
              width={"33rem"}
              height={"4rem"}
            ></SignUpInput>
          </div>
          <FlexDiv justifyContent={"space-between"}>
            <SignUpInput
              onChange={onChangeInput}
              name="year"
              placeholder="년"
              width={"10rem"}
              height={"4rem"}
            ></SignUpInput>
            <SignUpInput
              name="month"
              placeholder="월"
              width={"10rem"}
              height={"4rem"}
            ></SignUpInput>
            <SignUpInput
              onChange={onChangeInput}
              name="day"
              placeholder="일"
              width={"10rem"}
              height={"4rem"}
            ></SignUpInput>
          </FlexDiv>
          <FlexDiv justifyContent={"space-between"}>
            <SignUpInput
              name="address"
              placeholder="주소"
              width={"19rem"}
              height={"4rem"}
            />
            <Button width={"13rem"} height={"4rem"} fontSize={"1.7rem"}>
              검색
            </Button>
          </FlexDiv>
          <div>
            <SignUpInput
              name="maritalStatus"
              placeholder="결혼 여부"
              width={"33rem"}
              height={"4rem"}
            ></SignUpInput>
          </div>
          <FlexDiv justifyContent={"space-between"}>
            <SignUpInput
              onChange={onChangeInput}
              name="email"
              placeholder="이메일"
              width={"19rem"}
              height={"4rem"}
            ></SignUpInput>
            <Button width={"13rem"} height={"4rem"} fontSize={"1.7rem"}>
              인증번호 받기
            </Button>
          </FlexDiv>
          <div>
            <SignUpInput
              onChange={onChangeInput}
              placeholder="인증번호 입력 "
              width={"33rem"}
              height={"4rem"}
            ></SignUpInput>
          </div>
          <div>
            <Button width={"34rem"} height={"4rem"} fontSize={"1.7rem"}>
              가입하기
            </Button>
          </div>
        </SingUpForm>
      </HeightCenterDiv>
    </HeightCenterDiv>
  );
}

export default SignUpPage;
