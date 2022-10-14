/* libraries */
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button, Icon, Input, UtilForm, UtilInputWrap } from '../../';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as FcIcons from 'react-icons/fc';
/* static data */
import { COLOR_LIST as color } from '../../../style';

/* CONSTANTS */
const { Kakao } = window;

function LoginForm() {
  const idRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  /* Handlers */
  /* 아이디 및 패스워드 입력값을 검증하는 핸들러 */
  const checkIdAndPassword = () => {
    if (!idRef.current.value) {
      toast.error('아이디를 입력해주세요.');
      return false;
    }
    if (!passwordRef.current.value) {
      toast.error('비밀번호를 입력해주세요.');
      return false;
    }
    return true;
  };

  /* 로그인을 눌렀을시 호출될 핸들러*/
  const onSubmitPutLogin = (e) => {
    e.preventDefault();
    console.log(idRef.current.value);
    console.log(passwordRef.current.value);

    if (!checkIdAndPassword()) return;

    const loginApiUrl = `${process.env.REACT_APP_AUTH_DOMAIN_IP}/v1/signin`;
    const idAndPassword = {
      loginId: idRef.current.value,
      loginPw: passwordRef.current.value,
    };

    axios
      .put(loginApiUrl, idAndPassword, { timeout: 1000 })
      .then((response) => {
        if (response.data.isSuccess) {
          sessionStorage.setItem('token', response.data.result);
          navigate('/');
          toast.success('로그인에 성공하였습니다.');
        } else {
          toast.warn(response.data.message);
        }
      })
      .catch((e) => {
        toast.error(`서버와 연결이 되지 않았습니다. 관리자에게 문의하세요.`);
      });
  };

  /* 카카오 로그인 핸들러 */
  const onClickLoginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/',
    });
  };

  return (
    <UtilForm
      justifyContent={'center'}
      height={'100vh'}
      onSubmit={onSubmitPutLogin}
    >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
      {/* 아이디, 비밀번호 인풋 */}
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineUser />
        </Icon>
        <Input
          ref={idRef}
          type="text"
          name="loginId"
          placeholder="아이디"
          width={'305px'}
          height={'40px'}
          margin={'0 0 0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineLock />
        </Icon>
        <Input
          ref={passwordRef}
          type="password"
          name="loginPwd"
          placeholder="비밀번호"
          width={'305px'}
          height={'40px'}
          margin={'0 0 0 10px'}
        />
      </UtilInputWrap>
      {/* 로그인 버튼 */}
      <Button
        type="submit"
        width={'340px'}
        height={'40px'}
        color={color.white}
        bgColor={color.darkBlue}
        hoveredBgColor={color.navy}
      >
        로그인
      </Button>
      {/* 비밀번호, 아이디 찾기 */}
      <S.LoginFindWrap>
        <S.LoginServiceLink>비밀번호 찾기</S.LoginServiceLink>
        <span style={{ color: 'white' }}>|</span>
        <S.LoginServiceLink>아이디 찾기</S.LoginServiceLink>
      </S.LoginFindWrap>
      {/* 회원가입 및 SNS 로그인 버튼들 */}
      <Link to="/email-validation">
        <Button
          type="button"
          width={'340px'}
          height={'40px'}
          margin={'0 0 10px 0'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
        >
          <span>이메일로 회원가입</span>
        </Button>
      </Link>
      <Button
        type="button"
        width={'340px'}
        height={'40px'}
        margin={'0 0 10px 0'}
        fontSize={'20px'}
        bgColor={color.yellow}
        hoveredBgColor={color.darkYellow}
        onClick={onClickLoginWithKakao}
      >
        <RiIcons.RiKakaoTalkFill />
      </Button>
      <Button
        type="button"
        width={'340px'}
        height={'40px'}
        margin={'0 0 10px 0'}
        fontSize={'20px'}
        color={color.white}
        bgColor={color.naverGreen}
        hoveredBgColor={color.naverDarkGreen}
      >
        <SiIcons.SiNaver />
      </Button>
      <Button
        type="button"
        width={'340px'}
        height={'40px'}
        margin={'0 0 10px 0'}
        fontSize={'20px'}
        bgColor={color.white}
        hoveredBgColor={color.lightGrey}
      >
        <FcIcons.FcGoogle />
      </Button>
    </UtilForm>
  );
}

export default LoginForm;
