import React, { useState } from 'react';
/* components */
import { Input, NextBtn, UtilForm, UtilInputWrap, UtilTitle } from '../..';

function InputDetailAddressForm({ state }) {
  const [detailAddress, setDetailAddress] = useState('');

  /* 상세주소 입력시 호출될 핸들러
     state를 전달한다.*/
  const onChangeDetailAddress = (e) => {
    setDetailAddress(e.target.value);
  };

  return (
    <UtilForm padding={'15.4rem 10rem'}>
      <UtilTitle>상세 주소를 입력해주세요.</UtilTitle>
      <UtilInputWrap>
        <Input
          type="text"
          value={state.address}
          disabled
          width={'340px'}
          height={'40px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={detailAddress}
          placeholder="상세 주소"
          width={'340px'}
          height={'40px'}
          onChange={onChangeDetailAddress}
        />
      </UtilInputWrap>
      <NextBtn to="/sign-up" state={{ ...state, detailAddress }} />
    </UtilForm>
  );
}

export default InputDetailAddressForm;
