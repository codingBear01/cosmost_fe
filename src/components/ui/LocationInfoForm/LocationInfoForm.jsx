import React from 'react';
/* components */
import { NextBtn, UtilForm, UtilTitle } from '../../';
function LocationInfoForm() {
  return (
    <UtilForm pd={'15.4rem 10rem'}>
      <UtilTitle>위치 정보를 입력해주세요.</UtilTitle>
      <h1 style={{ color: 'white' }}>KAKAO 주소 API</h1>
      <NextBtn to={'/sign-up/location-detail'} />
    </UtilForm>
  );
}

export default LocationInfoForm;
