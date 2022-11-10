/* libraries */
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* recoil */
import { useRecoilState } from 'recoil';
import { isLoggedInAtom } from '../../../store';
/* components */
import * as S from './styled';
import { Button, Icon, Input, UtilForm, UtilInputWrap } from '../../';
/* icons */
import * as AiIcons from 'react-icons/ai';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function LoginForm() {
  const [, setIsLoggedIn] = useRecoilState(isLoggedInAtom);

  const idRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  /* Handlers */
  /* 아이디 및 패스워드 입력값을 검증하는 핸들러 */
  const checkIdAndPassword = () => {
    if (!idRef.current.value) {
      toast.warn('아이디를 입력해주세요.');
      return false;
    }
    if (!passwordRef.current.value) {
      toast.warn('비밀번호를 입력해주세요.');
      return false;
    }
    return true;
  };

  /* 로그인을 수행하는 핸들러 */
  const onSubmitLogin = (e) => {
    e.preventDefault();

    if (!checkIdAndPassword()) return;

    const url = `${process.env.REACT_APP_API}/signin`;
    const body = {
      loginId: idRef.current.value,
      loginPwd: passwordRef.current.value,
    };
    const config = { timeout: 3000 };

    axios
      .put(url, body, config)
      .then((response) => {
        localStorage.setItem('token', response.data);
        setIsLoggedIn(true);
        navigate('/', { state: localStorage.getItem('token') });
      })
      .catch((error) => {
        new Error(error);
        toast.error('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      });
  };

  return (
    <UtilForm
      justifyContent={'center'}
      height={'100vh'}
      onSubmit={onSubmitLogin}
    >
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
        limit={1}
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
      {/* 회원가입 버튼 */}
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
          <span>일반 회원가입</span>
        </Button>
      </Link>
    </UtilForm>
  );
}

export default LoginForm;
