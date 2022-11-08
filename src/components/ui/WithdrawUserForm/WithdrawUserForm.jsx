/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import { Button, Input, UtilTitle } from '../..';
/* APIs */
import { withdrawUser } from '../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function WithdrawUserForm({ beforeEditUserInfo }) {
  const navigate = useNavigate();

  /* States */
  const [
    isDeleteConfirmationMessageDisplayed,
    setIsDeleteConfirmationMessageDisplayed,
  ] = useState(false);
  const token = localStorage.getItem('token');

  /* Refs */
  const passwordRef = useRef();

  /* Handlers */
  const checkPassword = () => {
    if (!passwordRef.current.value) {
      toast.error('비밀번호를 입력해주세요.');
      return false;
    }

    return true;
  };

  const onClickDisplayDeleteConfirmationMessage = () => {
    if (!checkPassword()) return;
    setIsDeleteConfirmationMessageDisplayed(true);
  };

  /* 일정 시간 경과 후 삭제 확인 메시지를 닫는 핸들러 */
  useEffect(() => {
    if (isDeleteConfirmationMessageDisplayed) {
      const timer = setTimeout(() => {
        setIsDeleteConfirmationMessageDisplayed(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isDeleteConfirmationMessageDisplayed]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
        limit={1}
      />
      <UtilTitle>회원탈퇴</UtilTitle>
      <Input
        ref={passwordRef}
        type="password"
        width={'360px'}
        height={'40px'}
        placeholder="비밀번호를 입력해주세요."
      />
      {!isDeleteConfirmationMessageDisplayed && (
        <Button
          type="submit"
          width={'360px'}
          height={'40px'}
          margin={'30px 0 0 0'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={onClickDisplayDeleteConfirmationMessage}
        >
          확인
        </Button>
      )}
      {isDeleteConfirmationMessageDisplayed && (
        <Button
          type="submit"
          width={'360px'}
          height={'40px'}
          margin={'30px 0 0 0'}
          color={color.white}
          bgColor={color.red}
          hoveredBgColor={color.darkRed}
          onClick={(e) =>
            withdrawUser(
              e,
              beforeEditUserInfo,
              passwordRef,
              token,
              navigate,
              toast
            )
          }
          value="회원 탈퇴"
        >
          한 번 더 누르면 cosMost를 이용하실 수 없습니다.
        </Button>
      )}
    </>
  );
}

export default WithdrawUserForm;
