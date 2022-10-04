import React from 'react';
/* components */
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from '../../';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';

function EmailValidForm() {
  return (
    <UtilForm pd={'15.4rem'}>
      <UtilTitle>이메일 인증을 해주세요.</UtilTitle>
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineMail />
        </Icon>
        <Input
          type="email"
          placeholder="이메일"
          w={'25.5rem'}
          h={'4rem'}
          mr={'0 1rem'}
        />
        <Button
          type="button"
          w={'10rem'}
          h={'4rem'}
          bg_color={color.darkBlue}
          col={color.white}
          ho_color={color.navy}
        >
          인증번호 발송
        </Button>
      </UtilInputWrap>
      <UtilInputWrap a_self={'start'}>
        <Icon>
          <BsIcons.BsCheck2Circle />
        </Icon>
        <Input
          type="text"
          placeholder="인증번호"
          w={'25.5rem'}
          h={'4rem'}
          mr={'0 0 0 1rem'}
        />
      </UtilInputWrap>
      {/* 다음으로 버튼 */}
      <NextBtn></NextBtn>
    </UtilForm>
  );
}

export default EmailValidForm;
