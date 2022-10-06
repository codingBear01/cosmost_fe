import React from 'react';
import { DaumAddressApiModal } from '../DaumAddressApiModal';
/* components */
import { UtilForm, UtilTitle } from '../..';

function InputAddressForm({ state }) {
  return (
    <UtilForm width={'100%'} padding={'15.4rem 5rem'}>
      <UtilTitle>위치 정보를 입력해주세요.</UtilTitle>
      <DaumAddressApiModal state={state} />
    </UtilForm>
  );
}

export default InputAddressForm;
