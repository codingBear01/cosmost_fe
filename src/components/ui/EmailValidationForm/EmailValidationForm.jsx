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
    userCertificationNumber: '',
    CertificationNumber: '',
  });

  /* 사용자가 이메일 또는 인증번호를 입력할 때 호출할 이벤트 핸들러
     입력한 값을 state로 넘겨준다.*/
  const onChangeEmail = (e) => {
    setEmail({
      ...emailAndNumber,
      [e.target.name]: e.target.value,
    });
  };

  /* 인증 번호 발송 버튼 클릭시 호출할 핸들러
     이메일 정보를 백엔드로 전송한다.*/
  const onClickSendCertification = (e) => {
    e.preventDefault();
    const regExpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    if (emailAndNumber.email === '') {
      alert('이메일을 입력해주세요');
      return;
    }

    if (regExpEmail.test(emailAndNumber.email) === false) {
      alert('이메일 양식을 다시 입력해주세요');
      return;
    }
  };

  /* 다음 버튼 클릭시 호출할 핸들러
     인증번호를 검사한 후 다음 창으로 넘어간다.*/
  const onClickNextButton = (e) => {
    if (emailAndNumber.userCertificationNumber === '') {
      alert('인증번호를 입력해주세요.');
      e.preventDefault();
      return;
    }
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
          type="submit"
          width={'100px'}
          height={'40px'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={onClickSendCertification}
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
          name="userCertificationNumber"
          value={emailAndNumber.userCertificationNumber}
          placeholder="인증번호"
          width={'305px'}
          height={'40px'}
          margin={'0 10px'}
          onChange={onChangeEmail}
        />
      </UtilInputWrap>
      {/* 다음으로 버튼 */}
      <NextBtn
        to={'/address'}
        state={{ email: emailAndNumber.email }}
        onClick={onClickNextButton}
      />
    </UtilForm>
  );
}

export default EmailValidForm;
