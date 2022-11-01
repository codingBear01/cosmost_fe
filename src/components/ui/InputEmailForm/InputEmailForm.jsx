/* libraries */
import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
/* components */
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilDiv,
  UtilInputWrap,
  UtilTitle,
} from "../..";
/* icons */
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
/* static data */
import { COLOR_LIST as color } from "../../../style";
import { useLocation } from "react-router-dom";

function InputEmailForm() {
  /* Path */
  const path = useLocation().pathname;
  const isEmailValidationPage = path.includes("validation");

  /* States */
  const [email, setEmail] = useState(null);
  const [isCertificationNumberSent, setIsCertificationNumberSent] =
    useState(false);
  const [isCertificationNumberValidated, setIsCertificationNumberValidated] =
    useState(false);

  /* Refs */
  const emailRef = useRef();
  const certificationNumberRef = useRef();

  /* Handlers */
  /* 입력된 이메일의 유효성을 검증하는 함수 */
  const validateEmailByRegExp = (e) => {
    e.preventDefault();

    const regExpEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

    if (!regExpEmail.test(emailRef.current.value)) {
      toast.error("이메일을 올바르게 입력해주세요.");
      return false;
    }
    return true;
  };

  /* 입력값 유효성 검증하는 핸들러 */
  const checkInput = (e, type) => {
    if (
      (type === "email" && !emailRef.current.value) ||
      (type === "next" && !emailRef.current.value)
    ) {
      e.preventDefault();
      toast.error("이메일을 입력해주세요.");
      return false;
    }

    if (
      (type === "number" && !certificationNumberRef.current.value) ||
      (type === "next" && !certificationNumberRef.current.value)
    ) {
      e.preventDefault();
      toast.error("인증번호를 입력해주세요.");
      return false;
    }

    setEmail(emailRef.current.value);

    return true;
  };

  /* 인증번호 발송 및 인증번호 확인 버튼을 클릭했는지 확인하는 핸들러 */
  const checkIsCertificationNumberButtonClicked = (e) => {
    if (!isCertificationNumberSent) {
      e.preventDefault();
      toast.error("인증번호를 발급받아주세요.");
      return false;
    }
    if (!isCertificationNumberValidated) {
      e.preventDefault();
      toast.error("발급받은 인증번호를 검증해주세요");
      return false;
    }
    return true;
  };

  /* 사용자가 입력한 인증번호가 진짜 인증번호인지 검증하는 핸들러 */
  const onClickCompareCertificationNumber = (e) => {
    e.preventDefault();

    if (!checkInput(e, "number")) return;

    const url = `${process.env.REACT_APP_SERVER2_IP}/v1/authorization/code/confirm/${certificationNumberRef.current.value}/${emailRef.current.value}`;
    const config = { timeout: 3000 };

    axios
      .get(url, config)
      .then((response) => {
        switch (response.data) {
          case true:
            toast.success(
              `인증번호 검증이 완료되었습니다. 다음 버튼을 눌러주세요.`
            );
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
        console.log(error);
        toast.error(
          "인증번호 검증을 할 수 없는 상태입니다. 관리자에게 문의하세요."
        );
      });
  };

  /* 다음 페이지로 이동하는 핸들러. 입력값의 유효성을 검증하고 인증번호 발송 및 확인 버튼 클릭 여부를 확인한 후 이상이 없으면 주소 입력 페이지로 이동한다. */
  const onClickTransferAddressForm = (e) => {
    if (!checkInput(e, "next")) return;
    if (!checkIsCertificationNumberButtonClicked(e)) return;
  };

  /* APIs */
  /* 인증번호 발송 api */
  const onClickSendCertificationNumber = (e) => {
    e.preventDefault();

    if (!checkInput(e, "email")) return;
    if (!validateEmailByRegExp(e)) return;

    const url = `${process.env.REACT_APP_SERVER2_IP}/v1/authorization/email/confirm/${emailRef.current.value}`;
    const config = { timeout: 3000 };

    axios
      .get(url, config)
      .then((response) => {
        console.log(response);
        toast.success(
          `${emailRef.current.value}로 인증번호를 발송했습니다. 이메일을 확인해주세요.`
        );
        setIsCertificationNumberSent(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error("인증번호 발송에 실패했습니다.");
      });
  };

  /* 이메일 변경 api */
  const onClickUpdateEmail = () => {
    console.log("변경 완료!");
  };

  return (
    <>
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
          width={"205px"}
          height={"40px"}
          margin={"0 10px"}
        />
        <Button
          type="submit"
          width={"100px"}
          height={"40px"}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={onClickSendCertificationNumber}
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
          width={"205px"}
          height={"40px"}
          margin={"0 10px"}
        />
        <Button
          type="submit"
          width={"100px"}
          height={"40px"}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={onClickCompareCertificationNumber}
        >
          인증번호 검증
        </Button>
      </UtilInputWrap>
      {/* 다음으로 버튼 */}
      {isEmailValidationPage && (
        <NextBtn
          to={"/address"}
          state={{ email: email }}
          onClick={onClickTransferAddressForm}
        />
      )}
      {/* 수정 버튼 */}
      {!isEmailValidationPage && (
        <Button
          type="submit"
          width={"100%"}
          height={"40px"}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={onClickUpdateEmail}
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
