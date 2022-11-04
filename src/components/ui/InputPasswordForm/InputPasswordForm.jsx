/* libraries */
import React, { useRef, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button, Input, UtilForm } from '../..';
/* APIs */
import { updateUserPassword } from '../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import { useEffect } from 'react';

function InputPasswordForm({ state, beforeEditUserInfo }) {
  const pathname = useLocation().pathname;
  const isEditPasswordPage = pathname.includes('edit');

  const [newPassword, setNewPassword] = useState('');
  const [isValidatedPassword, setIsValidatedPassword] = useState(false);

  const beforePasswordConfirmation = useRef();
  // const newPassword = useRef();
  const newPasswordConfirmation = useRef();

  const navigate = useNavigate();

  const beforePw = 'aaaaaaaa';

  /* Handlers */
  const checkNewPassword = () => {
    const RegExpPassword = /[a-zA-Z0-9!@#$%^&*()._-]{8,16}/;
    return RegExpPassword.test(newPassword);
  };

  useEffect(() => {
    checkNewPassword();
  }, [newPassword]);

  /** 입력된 비밀번호들을 검증하는 핸들러 */
  const checkPasswords = () => {
    if (
      (isEditPasswordPage && !beforePasswordConfirmation.current.value) ||
      !newPassword ||
      !newPasswordConfirmation.current.value
    ) {
      toast.error('비밀번호를 입력해주세요.');
      return false;
    }
    if (
      isEditPasswordPage &&
      beforePw !== beforePasswordConfirmation.current.value
    ) {
      toast.error('기존 비밀번호와 다릅니다.');
      return false;
    }
    if (newPassword !== newPasswordConfirmation.current.value) {
      toast.error('비밀번호가 불일치합니다.');
      return false;
    }
    return true;
  };

  return (
    <UtilForm width={'340px'}>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
      {isEditPasswordPage && (
        <>
          <S.InputPasswordFormText>기존 비밀번호</S.InputPasswordFormText>
          <Input
            ref={beforePasswordConfirmation}
            type={'password'}
            width={'340px'}
          />
        </>
      )}
      <S.InputPasswordFormText>새 비밀번호</S.InputPasswordFormText>
      <Input
        width={'340px'}
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        maxLength={16}
      />
      {!checkNewPassword() && (
        <S.InvalidPasswordAlertMessage>
          비밀번호는 8자 이상 16자 이하, 영대소문자, 숫자, 특수문자만 입력
          가능합니다.
        </S.InvalidPasswordAlertMessage>
      )}
      <S.InputPasswordFormText>새 비밀번호 확인</S.InputPasswordFormText>
      <Input
        ref={newPasswordConfirmation}
        type={'password'}
        width={'340px'}
        maxLength={16}
      />
      <Button
        type={'submit'}
        width={'340px'}
        height={'40px'}
        margin={'40px 0 0 0'}
        bgColor={color.darkBlue}
        color={color.white}
        hoveredBgColor={color.navy}
        value={'비밀번호 수정'}
        onClick={(e) => updateUserPassword(e, checkPasswords)}
      >
        변경
      </Button>
    </UtilForm>
  );
}

export default InputPasswordForm;
