/* libraries */
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom } from '../../../store';
/* components */
import * as S from './styled';
import { Button, Icon, Input, UtilForm, UtilInputWrap } from '../../';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function LoginForm() {
  const [, setIsLoggedIn] = useRecoilState(loginStateAtom);
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

  /* 로그인을 수행하는 핸들러 */
  const onSubmitLogin = (e) => {
    e.preventDefault();

    if (!checkIdAndPassword()) return;

    // const url = `${process.env.REACT_APP_AUTH_IP}/v1/signin`;
    const url = `${process.env.REACT_APP_API}/signin`;
    const body = {
      loginId: idRef.current.value,
      loginPwd: passwordRef.current.value,
    };
    const config = { timeout: 3000 };

    //testId1001
    //testPwd1001
    axios
      .put(url, body, config)
      .then((response) => {
        localStorage.setItem('token', response.data);
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch((error) => {
        new Error(error);
        toast.error('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      });
  };

  /* 네이버 로그인 핸들러 */
  const onClickLoginWithNaver = () => {
    navigate('/naver/email-validation');

    // // const url = `${process.env.REACT_APP_AUTH_IP}/oauth2/authorization/naver?redirect_uri=http://localhost:9001/login/oauth2/code/social`;
    // const url = `${process.env.REACT_APP_API}/oauth2/authorization/naver?redirect_uri=http://localhost:9001/login/oauth2/code/social`;
    // const config = {
    //   headers: {
    //     Authorization: 'token',
    //   },
    //   timeout: 3000,
    // };
    // console.log('naver');
  };

  useEffect(() => {
    // var naver_id_login = new window.naver_id_login(process.env.REACT_APP_X_NAVER_CLIENT_ID, "http://localhost:3000");
    // var state = naver_id_login.getUniqState();
    // naver_id_login.setButton("white", 2,40);
    // naver_id_login.setDomain("http://localhost:3000");
    // naver_id_login.setState(state);
    // // naver_id_login.setPopup();
    // naver_id_login.init_naver_id_login();
  }, []);

  return (
    <UtilForm
      justifyContent={'center'}
      height={'100vh'}
      onSubmit={onSubmitLogin}
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
        <S.LoginServiceLink to="/find/email-validation" state={'pwd'}>
          비밀번호 찾기
        </S.LoginServiceLink>
        <span style={{ color: 'white' }}>|</span>
        <S.LoginServiceLink to="/find/email-validation" state={'id'}>
          아이디 찾기
        </S.LoginServiceLink>
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
      <div id="naver_id_login">
        <Button
          type="button"
          width={'340px'}
          height={'40px'}
          margin={'0 0 10px 0'}
          fontSize={'20px'}
          color={color.white}
          bgColor={color.naverGreen}
          hoveredBgColor={color.naverDarkGreen}
          onClick={onClickLoginWithNaver}
        >
          <SiIcons.SiNaver />
        </Button>
      </div>
    </UtilForm>
  );
}

export default LoginForm;
