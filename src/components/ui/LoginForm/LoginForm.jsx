/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
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

function LoginForm() {
  return (
    <UtilForm j_content={'center'}>
      {/* 아이디, 비밀번호 인풋 */}
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineUser />
        </Icon>
        <Input
          type="text"
          placeholder="아이디"
          w={'305px'}
          h={'40px'}
          mr={'0 0 0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineLock />
        </Icon>
        <Input
          type="text"
          placeholder="비밀번호"
          w={'305px'}
          h={'40px'}
          mr={'0 0 0 10px'}
        />
      </UtilInputWrap>
      {/* 로그인 버튼 */}
      <Link to="/util/email-valid">
        <Button
          type="button"
          w={'340px'}
          h={'40px'}
          col={color.white}
          bg_col={color.darkBlue}
          hov_bg_col={color.navy}
        >
          로그인
        </Button>
      </Link>
      {/* 비밀번호, 아이디 찾기 */}
      <S.LoginFindWrap>
        <S.LoginServiceLink>비밀번호 찾기</S.LoginServiceLink>
        <span style={{ color: 'white' }}>|</span>
        <S.LoginServiceLink>아이디 찾기</S.LoginServiceLink>
      </S.LoginFindWrap>
      {/* 회원가입 및 SNS 로그인 버튼들 */}
      <Link to="/sign-up/email-valid">
        <S.LoginBtns
          type="button"
          col={color.white}
          bg_col={color.darkBlue}
          hov_bg_col={color.navy}
        >
          <AiIcons.AiOutlineMail />
          <span>이메일로 회원가입</span>
        </S.LoginBtns>
      </Link>
      <S.LoginBtns
        type="button"
        bg_col={color.yellow}
        hov_bg_col={color.darkYellow}
      >
        <RiIcons.RiKakaoTalkFill />
      </S.LoginBtns>
      <S.LoginBtns
        type="button"
        col={color.white}
        bg_col={color.naverGreen}
        hov_bg_col={color.naverDarkGreen}
      >
        <SiIcons.SiNaver />
      </S.LoginBtns>
      <S.LoginBtns
        type="button"
        bg_col={color.white}
        hov_bg_col={color.lightGrey}
      >
        <FcIcons.FcGoogle />
      </S.LoginBtns>
    </UtilForm>
  );
}

export default LoginForm;
