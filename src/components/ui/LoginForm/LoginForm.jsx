/* libraries */
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import axios from 'axios';
import { LoginStateContext } from '../../context';

const LoginApiUrl = 'http://10.10.10.21:8080/v1/signin';

function LoginForm() {
  //로그인 토큰
  const loginTokenState = useContext(LoginStateContext);

  //아이디, 패스워드 state
  const [inputValue, setInputValue] = useState({
    loginId: '',
    loginPwd: '',
  });

  const navigate = useNavigate();

  /* 아이디와 패스워드를 입력할 때마다 호출될 핸들러 */
  const onChangeInput = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  /* 로그인을 눌렀을시 호출될 핸들러*/
  const onSubmitForm = (e) => {
    e.preventDefault();
    axios
      .put(LoginApiUrl, inputValue, { timeout: 1000 })
      .then((response) => {
        console.log(response);
        if (response.data.isSuccess) {
          sessionStorage.setItem('token', response.data.result);
          navigate('/');
        } else {
          alert(response.data.message);
        }
      })
      .catch((e) => {
        alert('서버와 연결이 되지 않았습니다. 관리자에게 문의하세요.');
      });
  };
  return (
    <UtilForm justifyContent={'center'} onSubmit={onSubmitForm}>
      {/* 아이디, 비밀번호 인풋 */}
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineUser />
        </Icon>
        <Input
          type="text"
          name="loginId"
          value={inputValue.loginId}
          placeholder="아이디"
          width={'305px'}
          height={'40px'}
          margin={'0 0 0 10px'}
          onChange={onChangeInput}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineLock />
        </Icon>
        <Input
          type="password"
          name="loginPwd"
          value={inputValue.loginPwd}
          placeholder="비밀번호"
          width={'305px'}
          height={'40px'}
          margin={'0 0 0 10px'}
          onChange={onChangeInput}
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
          type="submit"
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
        type="submit"
        width={'340px'}
        height={'40px'}
        margin={'0 0 10px 0'}
        fontSize={'20px'}
        bgColor={color.yellow}
        hoveredBgColor={color.darkYellow}
      >
        <RiIcons.RiKakaoTalkFill />
      </Button>
      <Button
        type="submit"
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
        type="submit"
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
