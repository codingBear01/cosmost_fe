import React, { useState } from 'react';
import { Input } from '../common';
import { Button } from '../common';
import {
  COLOR_LIST,
  BORDER_RADIUS_LIST,
  GAP_LIST,
  FONT_SIZE_LIST,
} from '../../style/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { PageRootDiv, PageTitle, HeightCenterDiv } from '../common';

const SnsLoginImageSrc = [
  {
    name: 'Naver',
    imgPath: '/assets/images/Naver.png',
    linkPath: '/',
  },
  {
    name: 'KaKaoTalk',
    imgPath: '/assets/images/KakaoTalk.png',
    linkPath: '/',
  },
  {
    name: 'Google',
    imgPath: '/assets/images/Google.png',
    linkPath: '/',
  },
];

const LoginOtherSrc = [
  {
    name: '비밀번호 찾기',
    linkPath: '/',
  },
  {
    name: '아이디 찾기',
    linkPath: '/',
  },
  {
    name: '회원가입',
    linkPath: '/',
  },
];

const LoginButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${GAP_LIST.xl};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid ${COLOR_LIST.white};
  border-radius: ${BORDER_RADIUS_LIST.default};
  width: 35rem;
  height: 20rem;
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
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
`;

const LoginInput = styled(Input)`
  background-color: ${COLOR_LIST.darkBlue};
  border: 1px solid ${COLOR_LIST.white};
  color : ${COLOR_LIST.white};
  &::placeholder {
    font-size : 1rem;
    color: ${COLOR_LIST.white}};
  }

  
  
  text-indent: 2rem;
`;

const SnsLoginImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: ${BORDER_RADIUS_LIST.circle};
`;

const LoginOtherItemLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  margin-right: 2rem;
`;

const LoginInputImageStyle = {
  position: 'absolute',
  top: '1rem',
  left: '2.7rem',
  color: 'white',
  width: '2rem',
  height: '2rem',
};

function LoginPage() {
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
  });

  const onInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageRootDiv>
      <HeightCenterDiv>
        <Link to="/">
          <PageTitle>cosMost</PageTitle>
        </Link>
        <LoginForm>
          <LoginInputDiv>
            <BiUser style={LoginInputImageStyle} />
            <LoginInput
              width={'30rem'}
              height={'4rem'}
              placeholder="아이디"
              name={'id'}
              onChange={onInputChange}
            ></LoginInput>
            <RiLockPasswordLine
              style={{ ...LoginInputImageStyle, top: '5rem' }}
            />
            <LoginInput
              type={'password'}
              width={'30rem'}
              height={'4rem'}
              placeholder="비밀번호"
              name={'password'}
              onChange={onInputChange}
            />
          </LoginInputDiv>
          <LoginButtonDiv>
            <Button width={'25rem'} height={'5rem'} fontSize={FONT_SIZE_LIST.l}>
              로그인
            </Button>
          </LoginButtonDiv>
        </LoginForm>
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
    </PageRootDiv>
  );
}

export default LoginPage;
