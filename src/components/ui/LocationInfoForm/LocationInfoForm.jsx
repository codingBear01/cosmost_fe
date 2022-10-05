import React from "react";
import { DaumAddressApiModal } from "../DaumAddressApiModal";
/* components */
import { NextBtn, UtilForm, UtilTitle } from "../../";
function LocationInfoForm() {
  return (
    <UtilForm pd={"15.4rem 10rem"}>
      <UtilTitle>위치 정보를 입력해주세요.</UtilTitle>
      <DaumAddressApiModal />
    </UtilForm>
  );
}

export default LocationInfoForm;

// <NextBtn to={"/util/location-detail"} />
