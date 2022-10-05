/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button, Icon, Input, UtilForm, UtilInputWrap } from '../../';
/* icons */
import * as AiIcons from 'react-icons/ai';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';
import { LOGIN_BTN_LIST as btns } from '../../../data';

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
          bg_color={color.darkBlue}
          col={color.white}
          ho_color={color.navy}
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
    </UtilForm>
  );
}

export default LoginForm;
