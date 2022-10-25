/* libraries */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { isReportFormOpenedAtom, loginToken } from '../../../store';
/* components */
import { Button, Input, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function WithdrawUserForm() {
  return (
    <>
      <UtilTitle>회원탈퇴</UtilTitle>
      <Input
        type="password"
        width={'100%'}
        height={'40px'}
        placeholder={'비밀번호를 입력해주세요.'}
      />
      <Button
        type="submit"
        width={'100%'}
        height={'40px'}
        margin={'30px 0 0 0'}
        color={color.white}
        bgColor={color.darkBlue}
        hoveredBgColor={color.navy}
      >
        확인
      </Button>
    </>
  );
}

export default WithdrawUserForm;
