import React, { useState } from "react";
import { Button, Input, PageTitle, HeightCenterDiv } from "../";
import {
  COLOR_LIST,
  BORDER_RADIUS_LIST,
  GAP_LIST,
  FONT_SIZE_LIST,
} from "../../style/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";

const SnsLoginImageSrc = [
  {
    name: "Naver",
    imgPath: "/assets/images/Naver.png",
    linkPath: "/",
  },
  {
    name: "KaKaoTalk",
    imgPath: "/assets/images/KakaoTalk.png",
    linkPath: "/",
  },
  {
    name: "Google",
    imgPath: "/assets/images/Google.png",
    linkPath: "/",
  },
];

const LoginOtherSrc = [
  {
    name: "비밀번호 찾기",
    linkPath: "/",
  },
  {
    name: "아이디 찾기",
    linkPath: "/",
  },
  {
    name: "회원가입",
    linkPath: "/",
  },
];

const LoginButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "auto"};
`;

const LoginForm = styled.form`
  border: 1px solid ${COLOR_LIST.white};
  border-radius: ${BORDER_RADIUS_LIST.default};
  height: 80%;
`;

const LoginOtherDiv = styled.div`
  width: 35rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8rem;
`;
const LoginOtherItemDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const LoginInputDiv = styled.div`
  height: ${(props) => props.height || "auto"};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`;

const LoginInput = styled(Input)`
  background-color: ${COLOR_LIST.darkBlue};
  border: 1px solid ${COLOR_LIST.white};
  color : ${COLOR_LIST.white};
  &::placeholder {
    font-size : 1.5rem;
    color: ${COLOR_LIST.white}};
  }
  text-indent: 2.5rem;
  width : 80%;
  height : 30%;
`;

const SnsLoginImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: ${BORDER_RADIUS_LIST.circle};
`;

const LoginOtherItemLink = styled(Link)`
  color: ${COLOR_LIST.white};
  text-decoration: none;
  font-size: 1.3rem;
  margin-right: 2rem;
`;

const LoginInputImageStyle = {
  position: "absolute",
  top: "10.5rem",
  left: "7rem",
  color: "white",
  width: "2rem",
  height: "2rem",
};

function LoginPage() {
  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });

  const onInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <HeightCenterDiv>
      <div style={{ width: "66.9rem", height: "55.6rem" }}>
        <Link to="/" style={{ textAlign: "center" }}>
          <PageTitle height={"20%"}>cosMost</PageTitle>
        </Link>
        <LoginForm>
          <LoginInputDiv height={"50%"}>
            <BiUser style={LoginInputImageStyle} />
            <LoginInput
              width={"58.8rem"}
              height={"16.6rem"}
              placeholder="아이디"
              name={"id"}
              onChange={onInputChange}
            ></LoginInput>
            <RiLockPasswordLine
              style={{ ...LoginInputImageStyle, top: "17.5rem" }}
            />
            <LoginInput
              type={"password"}
              width={"58.8rem"}
              height={"16.6rem"}
              placeholder="비밀번호"
              name={"password"}
              onChange={onInputChange}
            />
          </LoginInputDiv>
          <LoginButtonDiv height={"50%"}>
            <Button
              width={"46.4rem"}
              height={"9.2rem"}
              fontSize={FONT_SIZE_LIST.l}
            >
              로그인
            </Button>
          </LoginButtonDiv>
        </LoginForm>
      </div>
      <LoginOtherDiv>
        <LoginOtherItemDiv>
          {SnsLoginImageSrc.map((item, index) => {
            return (
              <Link key={index} to={item.linkPath}>
                <SnsLoginImage src={item.imgPath}></SnsLoginImage>
              </Link>
            );
          })}
        </LoginOtherItemDiv>
        <LoginOtherItemDiv>
          {LoginOtherSrc.map((item, index) => {
            return (
              <LoginOtherItemLink key={index} to={item.linkPath}>
                {item.name}
              </LoginOtherItemLink>
            );
          })}
        </LoginOtherItemDiv>
      </LoginOtherDiv>
    </HeightCenterDiv>
  );
}

export default LoginPage;
