/* libraries */
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button, Input, UtilForm } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function InputPasswordForm({ state, beforeEditUserInfo }) {
  const beforePw = 'aaaaaaaa';

  const beforePasswordConfirmation = useRef();
  const newPassword = useRef();
  const newPasswordConfirmation = useRef();

  /* Handlers */
  /** 입력된 비밀번호들을 검증하는 핸들러 */
  const checkPasswords = () => {
    if (beforePw !== beforePasswordConfirmation.current.value) {
      alert('기존 비밀번호와 다릅니다.');
      return false;
    }
    if (newPassword.current.value !== newPasswordConfirmation.current.value) {
      alert('비밀번호가 불일치합니다.');
      return false;
    }
    if (
      !beforePasswordConfirmation.current.value ||
      !newPassword.current.value ||
      !newPasswordConfirmation.current.value
    ) {
      alert('비밀번호를 입력해주세요.');
    }
  };

  /* APIs */
  const updatePassword = (e) => {
    e.preventDefault();

    if (!checkPasswords()) return;

    alert('비밀번호를 변경했습니다!');
  };

  return (
    <UtilForm width={'340px'}>
      <S.InputPasswordFormText>기존 비밀번호</S.InputPasswordFormText>
      <Input ref={beforePasswordConfirmation} type={'text'} width={'340px'} />
      <S.InputPasswordFormText>새 비밀번호</S.InputPasswordFormText>
      <Input ref={newPassword} type={'text'} width={'340px'} />
      <S.InputPasswordFormText>새 비밀번호 확인</S.InputPasswordFormText>
      <Input ref={newPasswordConfirmation} type={'text'} width={'340px'} />
      <Button
        type={'submit'}
        width={'340px'}
        height={'40px'}
        margin={'40px 0 0 0'}
        bgColor={color.darkBlue}
        color={color.white}
        hoveredBgColor={color.navy}
        value={'비밀번호 수정'}
        onClick={updatePassword}
      >
        수정
      </Button>
    </UtilForm>
  );
}

export default InputPasswordForm;
