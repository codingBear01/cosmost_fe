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
import { COLOR_LIST as color } from '../../../style';

function EmailValidForm() {
  return (
    <UtilForm pd={'15.4rem 10rem'}>
      <UtilTitle>이메일 인증을 해주세요.</UtilTitle>
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineMail />
        </Icon>
        <Input
          type="email"
          placeholder="이메일"
          w={'205px'}
          h={'40px'}
          mr={'0 10px'}
        />
        <Button
          type="button"
          w={'100px'}
          h={'40px'}
          col={color.white}
          bg_col={color.darkBlue}
          hov_col={color.navy}
        >
          인증번호 발송
        </Button>
      </UtilInputWrap>
      <UtilInputWrap>
        <Icon>
          <BsIcons.BsCheck2Circle />
        </Icon>
        <Input
          type="text"
          placeholder="인증번호"
          w={'305px'}
          h={'40px'}
          mr={'0 10px'}
        />
      </UtilInputWrap>
      {/* 다음으로 버튼 */}
      <NextBtn to={'/util/location-info'} />
    </UtilForm>
  );
}

export default EmailValidForm;
