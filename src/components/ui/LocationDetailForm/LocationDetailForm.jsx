import React, { useState } from 'react';
/* components */
import { Input, NextBtn, UtilForm, UtilInputWrap, UtilTitle } from '../..';

function LocationDetailForm({ state }) {
  const [detailAddress, setDetailAddress] = useState('');

  /* 상세주소 입력시 호출될 핸들러
     state를 전달한다.*/
  const onChangeDetailAddress = (e) => {
    setDetailAddress(e.target.value);
  };

  return (
    <UtilForm pd={'15.4rem 10rem'}>
      <UtilTitle>상세 주소를 입력해주세요.</UtilTitle>
      <UtilInputWrap>
        <Input
          type="text"
          value={state.address}
          disabled
          w={'340px'}
          h={'40px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={detailAddress}
          placeholder="상세 주소"
          w={'340px'}
          h={'40px'}
          onChange={onChangeDetailAddress}
        />
      </UtilInputWrap>
      <NextBtn to={'/sign-up/user-info'} state={{ ...state, detailAddress }} />
    </UtilForm>
  );
}

export default LocationDetailForm;
