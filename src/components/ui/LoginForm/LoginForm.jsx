/* hooks */
import React from 'react';
/* components */
import * as S from './styled';
import { Button, Icon, Input } from '../../';
/* icons */
import * as AiIcons from 'react-icons/ai';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';
import { LOGIN_BTN_LIST as btns } from '../../../data';

function LoginForm() {
  return (
    <S.StyledLoginForm>
      {/* 아이디, 비밀번호 인풋 */}
      <S.LoginInputWrap>
        <Icon>
          <AiIcons.AiOutlineUser />
        </Icon>
        <Input
          type="text"
          placeholder="아이디"
          w={'26.5rem'}
          h={'4rem'}
          mr={'0 0 0 1rem'}
        />
      </S.LoginInputWrap>
      <S.LoginInputWrap>
        <Icon>
          <AiIcons.AiOutlineLock />
        </Icon>
        <Input
          type="text"
          placeholder="비밀번호"
          w={'26.5rem'}
          h={'4rem'}
          mr={'0 0 0 1rem'}
        />
      </S.LoginInputWrap>
      {/* 로그인 버튼 */}
      <Button
        type="button"
        w={'30rem'}
        h={'4rem'}
        bg_color={color.darkBlue}
        col={color.white}
      >
        로그인
      </Button>
      {/* 비밀번호, 아이디 찾기 */}
      <S.LoginFindWrap>
        <S.LoginServiceLink>비밀번호 찾기</S.LoginServiceLink>
        <span style={{ color: 'white' }}>|</span>
        <S.LoginServiceLink>아이디 찾기</S.LoginServiceLink>
      </S.LoginFindWrap>

      {btns &&
        btns.map((btn) => (
          <S.LoginBtns
            key={btn.id}
            type="button"
            bg_color={btn.bg_color}
            col={btn.color}
            hovered_col={btn.hovered_col}
          >
            {btn.icon}
            {btn.text && <span>{btn.text}</span>}
          </S.LoginBtns>
        ))}
    </S.StyledLoginForm>
  );
}

export default LoginForm;
