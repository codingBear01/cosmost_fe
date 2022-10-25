import React from 'react';
import { DaumAddressApiForm } from '../DaumAddressApiForm';
/* components */
import { UtilForm, UtilTitle } from '../..';

function InputAddressForm({ state }) {
  return (
    <UtilForm width={'100%'} padding={'10rem 0'}>
      <UtilTitle>위치 정보를 입력해주세요.</UtilTitle>
      <DaumAddressApiForm state={state} />
    </UtilForm>
  );
}

export default InputAddressForm;
