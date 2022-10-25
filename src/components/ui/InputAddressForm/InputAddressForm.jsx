import React from 'react';
import { useLocation } from 'react-router-dom';
import { DaumAddressApiForm } from '../DaumAddressApiForm';
/* components */
import { UtilForm, UtilTitle } from '../..';

function InputAddressForm({ state }) {
  /* Path */
  const path = useLocation().pathname;
  const isDetailAddressPage = path.includes('detail');
  return (
    <UtilForm width={'100%'} padding={'10rem 0'}>
      <UtilTitle>위치 정보를 입력해주세요.</UtilTitle>
      <DaumAddressApiForm
        state={state}
        isDetailAddressPage={isDetailAddressPage}
      />
    </UtilForm>
  );
}

export default InputAddressForm;
