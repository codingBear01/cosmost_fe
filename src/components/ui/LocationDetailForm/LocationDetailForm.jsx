import React from 'react';
/* components */
import { Input, NextBtn, UtilForm, UtilInputWrap, UtilTitle } from '../..';

function LocationDetailForm() {
  return (
    <UtilForm pd={'15.4rem 10rem'}>
      <UtilTitle>상세 주소를 입력해주세요.</UtilTitle>
      <UtilInputWrap>
        <Input
          type="text"
          value="부산시 수영구 광서로 42번길 9호 1층"
          w={'340px'}
          h={'40px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input type="text" placeholder="상세 주소" w={'340px'} h={'40px'} />
      </UtilInputWrap>
      <NextBtn to={'/sign-up/user-info'} />
    </UtilForm>
  );
}

export default LocationDetailForm;
