import React from "react";
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
import { Footer } from "../";
import { Button } from "../common";

const SignUpInput = styled(Input)`
  background-color: ${COLOR_LIST.white};
  border: 1px solid ${COLOR_LIST.grey};
  color : ${COLOR_LIST.black};
  &::placeholder {
    font-size : 1rem;
    color: ${COLOR_LIST.grey}};
  }
`;

const ProfileImage = styled(BsFillCircleFill)`
  width: 7rem;
  height: 7rem;
  color: ${COLOR_LIST.grey};
  margin-right: 2rem;
`;

const SingUpForm = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

function SignUpPage() {
  return (
    <PageRootDiv>
      <HeightCenterDiv>
        <PageTitle>CosMost</PageTitle>
        <SingUpForm>
          <FlexDiv justifyContent={"space-between"}>
            <div>
              <ProfileImage />
            </div>
            <div>
              <FlexDiv justifyContent={"space-between"} margin={"0 0 2rem 0"}>
                <SignUpInput
                  placeholder="닉네임"
                  width={"9.5rem"}
                  height={"5rem"}
                ></SignUpInput>
                <Button width={"13rem"} height={"5rem"} fontSize={"1.7rem"}>
                  중복확인
                </Button>
              </FlexDiv>
              <div>
                <Button width={"25rem"} height={"5rem"} fontSize={"1.7rem"}>
                  프로필 이미지 업로드
                </Button>
              </div>
            </div>
          </FlexDiv>
          <FlexDiv justifyContent={"space-between"}>
            <SignUpInput
              placeholder="아이디"
              width={"19rem"}
              height={"5rem"}
            ></SignUpInput>
            <Button width={"13rem"} height={"5rem"} fontSize={"1.7rem"}>
              중복확인
            </Button>
          </FlexDiv>
          <div>
            <SignUpInput
              placeholder="비밀번호"
              width={"33rem"}
              height={"5rem"}
            ></SignUpInput>
          </div>
          <div>
            <SignUpInput
              placeholder="비밀번호 재확인"
              width={"33rem"}
              height={"5rem"}
            ></SignUpInput>
          </div>
          <div>
            <SignUpInput
              placeholder="이름"
              width={"33rem"}
              height={"5rem"}
            ></SignUpInput>
          </div>
          <FlexDiv justifyContent={"space-between"}>
            <SignUpInput
              placeholder="년"
              width={"10rem"}
              height={"5rem"}
            ></SignUpInput>
            <div>월</div>
            <SignUpInput
              placeholder="일"
              width={"10rem"}
              height={"5rem"}
            ></SignUpInput>
          </FlexDiv>
          <FlexDiv justifyContent={"space-between"}>
            <SignUpInput placeholder="주소" width={"19rem"} height={"5rem"} />
            <Button width={"13rem"} height={"5rem"} fontSize={"1.7rem"}>
              검색
            </Button>
          </FlexDiv>
          <div>
            <SignUpInput
              placeholder="결혼 여부"
              width={"33rem"}
              height={"5rem"}
            ></SignUpInput>
          </div>
          <FlexDiv justifyContent={"space-between"}>
            <SignUpInput
              placeholder="이메일"
              width={"19rem"}
              height={"5rem"}
            ></SignUpInput>
            <Button width={"13rem"} height={"5rem"} fontSize={"1.7rem"}>
              인증번호 받기
            </Button>
          </FlexDiv>
          <div>
            <SignUpInput
              placeholder="인증번호 입력 "
              width={"33rem"}
              height={"5rem"}
            ></SignUpInput>
          </div>
          <div>
            <Button width={"34rem"} height={"5rem"} fontSize={"1.7rem"}>
              가입하기
            </Button>
          </div>
        </SingUpForm>
      </HeightCenterDiv>
      <Footer />
    </PageRootDiv>
  );
}

export default SignUpPage;
