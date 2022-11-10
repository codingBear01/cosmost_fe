/* libraries */
import React, { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
/* components */
import { Button, Icon, Input, NextBtn, UtilInputWrap, UtilTitle } from '../..';
/* APIs */
import {
  sendCertificationNumber,
  compareCertificationNumber,
} from '../../../apis';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function InputEmailForm({ beforeEditUserInfo }) {
  /* 페이지 분기용 variables */
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isEditEmailPage = pathname.includes('edit');
  const isFindUserPage = pathname.includes('find');

  const PAGE_TYPES = {
    //회원가입 시 이메일 인증
    '/email-validation': {
      address: '/address',
      certificationNumberSendingType: 'email',
      certificationNumberComparingType: 'code/confirm',
    },
    //아이디 또는 패스워드 찾을 시 이메일 인증
    '/find/email-validation': {
      address: `/find/${location.state}`,
      certificationNumberSendingType: location.state,
      certificationNumberComparingType: `${location.state}/reissue`,
    },
    //이메일 수정 시 이메일 인증
    '/user/edit/email': {
      address: '/address',
      certificationNumberSendingType: 'newemail',
      certificationNumberComparingType: 'newemail/reissue',
    },
  };

  // 토큰
  const token = localStorage.getItem('token');

  /* States */
  const [email, setEmail] = useState(null);
  const [isCertificationNumberSent, setIsCertificationNumberSent] =
    useState(false);
  const [isCertificationNumberValidated, setIsCertificationNumberValidated] =
    useState(false);

  //아이디 찾기에서 전달받은 ID 또는 패스워드 찾기에서 전달받은 ID Key
  const [responseId, setResponseId] = useState(null);

  /* Refs */
  const emailRef = useRef();
  const certificationNumberRef = useRef();

  /* Hooks */
  /** 이메일 수정목적이면 기존의 이메일 값을 가져오는 useEffect */
  useEffect(() => {
    if (isEditEmailPage) {
      emailRef.current.value = beforeEditUserInfo.email;
      setEmail(emailRef.current.value);
    }
  }, []);

  /* Handlers */
  /** 입력된 이메일의 유효성을 검증하는 함수 */
  const validateEmailByRegExp = (e) => {
    e.preventDefault();

    const regExpEmail = /^[a-zA-Z0-9]+@naver.com+$/;

    if (!regExpEmail.test(emailRef.current.value)) {
      toast.error('이메일은 네이버 이메일만 입력 가능합니다..');
      return false;
    }
    return true;
  };

  /** 입력값 유효성 검증하는 핸들러 */
  const checkInput = (e, type) => {
    if (
      (type === 'email' && !emailRef.current.value) ||
      (type === 'next' && !emailRef.current.value)
    ) {
      e.preventDefault();
      toast.warn('이메일을 입력해주세요.');
      return false;
    }

    if (
      (type === 'number' && !certificationNumberRef.current.value) ||
      (type === 'next' && !certificationNumberRef.current.value)
    ) {
      e.preventDefault();
      toast.warn('인증번호를 입력해주세요.');
      return false;
    }

    setEmail(emailRef.current.value);

    return true;
  };

  /** 인증번호 발송 및 인증번호 확인 버튼을 클릭했는지 확인하는 핸들러 */
  const checkIsCertificationNumberButtonClicked = (e) => {
    if (!isCertificationNumberSent) {
      e.preventDefault();
      toast.warn('인증번호를 발급받아주세요.');
      return false;
    }
    if (!isCertificationNumberValidated) {
      e.preventDefault();
      toast.warn('발급받은 인증번호를 검증해주세요');
      return false;
    }
    return true;
  };

  /** 다음 페이지로 이동하는 핸들러. 입력값의 유효성을 검증하고 인증번호 발송 및 확인 버튼 클릭 여부를 확인한 후 이상이 없으면 주소 입력 페이지로 이동한다. */
  const onClickTransferNextPage = (e) => {
    if (!checkInput(e, 'next')) return;
    if (!checkIsCertificationNumberButtonClicked(e)) return;
  };

  return (
    <>
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
      <UtilTitle>이메일 주소 {isEditEmailPage ? '변경' : '인증'}</UtilTitle>
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineMail />
        </Icon>
        <Input
          ref={emailRef}
          defaultValue={isEditEmailPage ? beforeEditUserInfo.email : ''}
          type="email"
          placeholder={'네이버 이메일을 입력해주세요.'}
          name="email"
          width={'205px'}
          height={'40px'}
          margin={'0 10px'}
        />
        <Button
          type="button"
          width={'100px'}
          height={'40px'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={(e) =>
            sendCertificationNumber(
              e,
              checkInput,
              validateEmailByRegExp,
              PAGE_TYPES,
              pathname,
              emailRef,
              beforeEditUserInfo,
              toast,
              token,
              setIsCertificationNumberSent
            )
          }
        >
          인증번호 발급
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
          width={'205px'}
          height={'40px'}
          margin={'0 10px'}
        />
        <Button
          type="button"
          width={'100px'}
          height={'40px'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={(e) =>
            compareCertificationNumber(
              e,
              checkInput,
              PAGE_TYPES,
              pathname,
              certificationNumberRef,
              emailRef,
              beforeEditUserInfo,
              navigate,
              toast,
              setIsCertificationNumberValidated,
              setResponseId
            )
          }
        >
          인증번호 확인
        </Button>
      </UtilInputWrap>
      {/* 다음으로 버튼*/}
      {!isEditEmailPage && (
        <NextBtn
          to={PAGE_TYPES[pathname]?.address}
          state={
            isFindUserPage ? { id: responseId, email: email } : { email: email }
          }
          onClick={onClickTransferNextPage}
        />
      )}
    </>
  );
}

export default InputEmailForm;
