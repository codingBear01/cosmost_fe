import React, { useState } from 'react';
/* components */
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function EmailValidForm() {
  const [emailAndNumber, setEmail] = useState({
    email: '',
    CertificationNumber: '',
  });

  /* 사용자가 이메일 또는 인증번호를 입력할 때 호출할 이벤트 핸들러
     입력한 값을 state로 넘겨준다.*/
  const onChangeEmail = (e) => {
    setEmail({ ...emailAndNumber, [e.target.name]: e.target.value });
  };

  return (
    <UtilForm padding={'15.4rem 10rem'}>
      <UtilTitle>이메일 인증을 해주세요.</UtilTitle>
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineMail />
        </Icon>
        <Input
          type="email"
          placeholder="이메일"
          name="email"
          value={emailAndNumber.email}
          width={'205px'}
          height={'40px'}
          margin={'0 10px'}
          onChange={onChangeEmail}
        />
        <Button
          type="button"
          width={'100px'}
          height={'40px'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
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
          name="CertificationNumber"
          value={emailAndNumber.CertificationNumber}
          placeholder="인증번호"
          width={'305px'}
          height={'40px'}
          margin={'0 10px'}
          onChange={onChangeEmail}
        />
      </UtilInputWrap>
      {/* 다음으로 버튼    */}
      <NextBtn to="/address" />
    </UtilForm>
  );
}

export default EmailValidForm;
