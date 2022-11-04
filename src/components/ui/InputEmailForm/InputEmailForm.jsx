/* libraries */
import React, { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
/* components */
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilDiv,
  UtilInputWrap,
  UtilTitle,
} from '../..';
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
    '/email-validation': {
      address: '/address',
      certificationNumberSendingType: 'email',
      certificationNumberComparingType: 'code/confirm',
    },
    '/find/email-validation': {
      address: `/find/${location.state}`,
      certificationNumberSendingType: location.state,
      certificationNumberComparingType: `${location.state}/reissue`,
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
  /* 입력된 이메일의 유효성을 검증하는 함수 */
  const validateEmailByRegExp = (e) => {
    e.preventDefault();

    const regExpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

    if (!regExpEmail.test(emailRef.current.value)) {
      toast.error('이메일을 올바르게 입력해주세요.');
      return false;
    }
    return true;
  };

  /* 입력값 유효성 검증하는 핸들러 */
  const checkInput = (e, type) => {
    if (
      (type === 'email' && !emailRef.current.value) ||
      (type === 'next' && !emailRef.current.value)
    ) {
      e.preventDefault();
      toast.error('이메일을 입력해주세요.');
      return false;
    }

    if (
      (type === 'number' && !certificationNumberRef.current.value) ||
      (type === 'next' && !certificationNumberRef.current.value)
    ) {
      e.preventDefault();
      toast.error('인증번호를 입력해주세요.');
      return false;
    }

    setEmail(emailRef.current.value);

    return true;
  };

  /* 인증번호 발송 및 인증번호 확인 버튼을 클릭했는지 확인하는 핸들러 */
  const checkIsCertificationNumberButtonClicked = (e) => {
    if (!isCertificationNumberSent) {
      e.preventDefault();
      toast.error('인증번호를 발급받아주세요.');
      return false;
    }
    if (!isCertificationNumberValidated) {
      e.preventDefault();
      toast.error('발급받은 인증번호를 검증해주세요');
      return false;
    }
    return true;
  };

  /* 다음 페이지로 이동하는 핸들러. 입력값의 유효성을 검증하고 인증번호 발송 및 확인 버튼 클릭 여부를 확인한 후 이상이 없으면 주소 입력 페이지로 이동한다. */
  const onClickTransferNextPage = (e) => {
    if (!checkInput(e, 'next')) return;
    if (!checkIsCertificationNumberButtonClicked(e)) return;
  };

  /* APIs */
  /* 인증번호 발송 api */
  const onClickSendCertificationNumber = (e) => {
    e.preventDefault();

    if (!checkInput(e, 'email')) return;
    if (!validateEmailByRegExp(e)) return;

    // const url = `${process.env.REACT_APP_AUTH_IP}/v1/authorization/${PAGE_TYPES[pathname].certificationNumberSendingType}/confirm/${emailRef.current.value}`;
    const url = `${process.env.REACT_APP_API}/authorization/${PAGE_TYPES[pathname].certificationNumberSendingType}/confirm/${emailRef.current.value}`;
    const config = { timeout: 3000 };

    axios
      .get(url, config)
      .then((response) => {
        toast.success(
          `${emailRef.current.value}로 인증번호를 발송했습니다. 이메일을 확인해주세요.`
        );
        setIsCertificationNumberSent(true);
      })
      .catch((error) => {
        new Error(error);
        toast.error('인증번호 발송에 실패했습니다.');
      });
  };

  /* 사용자가 입력한 인증번호가 진짜 인증번호인지 검증하는 핸들러 */
  const onClickCompareCertificationNumber = (e) => {
    e.preventDefault();

    if (!checkInput(e, 'number')) return;

    // const url = `${process.env.REACT_APP_AUTH_IP}/v1/authorization/${PAGE_TYPES[pathname].certificationNumberComparingType}/${certificationNumberRef.current.value}/${emailRef.current.value}`;
    const url = `${process.env.REACT_APP_API}/authorization/${PAGE_TYPES[pathname].certificationNumberComparingType}/${certificationNumberRef.current.value}/${emailRef.current.value}`;
    const config = { timeout: 3000 };

    axios
      .get(url, config)
      .then((response) => {
        switch (response.data) {
          case true:
            toast.success(`인증번호 검증이 완료되었습니다.`);
            setIsCertificationNumberValidated(true);
            break;
          case false:
            toast.error(
              `유효하지 않은 인증번호입니다. 인증번호를 다시 확인해주세요`
            );
            break;
          default:
            toast.error(`예상치 않은 에러입니다. 관리자에게 문의하세요`);
            break;
        }
      })
      .catch((error) => {
        new Error(error);
        toast.error(
          '인증번호 검증을 할 수 없는 상태입니다. 관리자에게 문의하세요.'
        );
      });
  };

  /* 이메일 변경 api */
  const onClickUpdateEmail = (e) => {
    if (!checkInput(e, 'next')) return;
    if (!checkIsCertificationNumberButtonClicked(e)) return;

    const formData = new FormData();
    // const url = `${process.env.REACT_APP_AUTH_IP}/v1/auths`;
    const url = `${process.env.REACT_APP_API}/auths`;
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    const updateBody2 = {
      loginId: beforeEditUserInfo.loginId,
      loginPwd: '',
      nickname: beforeEditUserInfo.nickname,
      email: emailRef.current.value,
      address: beforeEditUserInfo.address,
      role: beforeEditUserInfo.role,
      sns: beforeEditUserInfo.sns,
      status: beforeEditUserInfo.status,
      ageGroup: '',
      married: '',
      type: '회원정보 수정',
      profileImgOriginName: beforeEditUserInfo.profileImgOriginName,
      profileImgSaveName: beforeEditUserInfo.profileImgSaveName,
      profileImgSaveUrl: beforeEditUserInfo.profileImgSaveUrl,
    };

    const updateBodyJson = JSON.stringify(updateBody2);
    const updateBodyBlob = new Blob([updateBodyJson], {
      type: 'application/json',
    });

    const profilePictureBlob = new Blob(['']);

    formData.append('updateAuthRequest', updateBodyBlob);
    formData.append('file', profilePictureBlob);

    axios
      .put(url, formData, config)
      .then((response) => {
        //수정된 데이터 다시 가져와서 리다이렉트 하기
        toast.success(response.data);
        // const url = `${process.env.REACT_APP_AUTH_IP}/v1/auths`;
        const url = `${process.env.REACT_APP_API}/auths`;
        const config = {
          headers: {
            Authorization: token,
          },
          timeout: 1000,
        };
        axios
          .get(url, config)
          .then((resonse) => {
            navigate(`/user/edit/menu`, {
              replace: true,
              state: resonse.data,
            });
          })
          .catch((error) => {
            new Error(error);
            toast.error(
              '변경된 이메일 정보를 가져오는데 실패했습니다. 관리자에게 문의하세요'
            );
          });
      })
      .catch((error) => {
        new Error(error);
        toast.error('이메일 변경에 실패했습니다. 관리자에게 문의하세요.');
      });
  };

  return (
    <>
      <UtilTitle>이메일 주소 {isEditEmailPage ? '변경' : '인증'}</UtilTitle>
      <UtilInputWrap>
        <Icon>
          <AiIcons.AiOutlineMail />
        </Icon>
        <Input
          ref={emailRef}
          defaultValue={isEditEmailPage ? beforeEditUserInfo.email : ''}
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
          // onClick={onClickSendCertificationNumber}
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
          type="submit"
          width={'100px'}
          height={'40px'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          // onClick={onClickCompareCertificationNumber}
        >
          인증번호 검증
        </Button>
      </UtilInputWrap>
      {/* 다음으로 버튼 */}
      {!isEditEmailPage && (
        <NextBtn
          to={PAGE_TYPES[pathname].address}
          state={isFindUserPage ? location.state : { email: email }}
          // onClick={onClickTransferNextPage}
        />
      )}
      {/* 수정 버튼 */}
      {isEditEmailPage && (
        <Button
          type="submit"
          width={'100%'}
          height={'40px'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          // onClick={onClickUpdateEmail}
        >
          수정
        </Button>
      )}
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
    </>
  );
}

export default InputEmailForm;
