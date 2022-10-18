/* libraries */
import React, { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [email, setEmail] = useState(null);

  const emailRef = useRef();
  const certificationNumberRef = useRef();

  /* 입력된 이메일의 유효성을 검증하는 함수 */
  const validateEmail = () => {
    const regExpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

    if (!emailRef.current.value || !regExpEmail.test(emailRef.current.value)) {
      return false;
    }
    return true;
  };

  /* 인증 번호 발송 버튼 클릭시 호출할 핸들러. 입력된 이메일의 유효성을 검증한 후 이메일 정보를 백엔드로 전송한다.*/
  const onClickCheckInputAndRequestCertificationNumber = (e, type) => {
    // 이메일 유효성 검증 및 입력된 이메일로 인증번호 전송
    if (!emailRef.current.value && !certificationNumberRef.current.value) {
      e.preventDefault();
      toast.error('입력값을 확인해주세요.');
      return;
    }
    if (!validateEmail()) {
      e.preventDefault();
      toast.error('이메일을 올바르게 입력해주세요.');
      return;
    }
    if (validateEmail() && type === 'email') {
      e.preventDefault();
      setEmail(emailRef.current.value);
      toast.success(`${emailRef.current.value}로 인증번호를 발송했습니다.`);
    }
    if (
      !certificationNumberRef.current.value &&
      type === 'certificationNumber'
    ) {
      e.preventDefault();
      toast.error('인증번호를 입력해주세요.');
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
          ref={emailRef}
          type="email"
          placeholder="이메일"
          name="email"
          width={'205px'}
          height={'40px'}
          margin={'0 10px'}
        />
        <Button
          type="submit"
          width={'100px'}
          height={'40px'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={(e) =>
            onClickCheckInputAndRequestCertificationNumber(e, 'email')
          }
        >
          인증번호 발송
        </Button>
      </UtilInputWrap>
      <UtilInputWrap>
        <Icon>
          <BsIcons.BsCheck2Circle />
        </Icon>
        <Input
          ref={certificationNumberRef}
          type="text"
          name="userCertificationNumber"
          placeholder="인증번호"
          width={'305px'}
          height={'40px'}
          margin={'0 10px'}
        />
      </UtilInputWrap>
      {/* 다음으로 버튼 */}
      <NextBtn
        to={'/address'}
        state={{ email: email }}
        onClick={(e) =>
          onClickCheckInputAndRequestCertificationNumber(
            e,
            'certificationNumber'
          )
        }
      />
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
    </UtilForm>
  );
}

export default EmailValidForm;
