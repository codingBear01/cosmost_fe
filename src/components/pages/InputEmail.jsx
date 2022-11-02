import React from "react";
import { useLocation } from "react-router-dom";
/* components */
import { InputEmailForm } from "..";

function InputEmail() {
  const location = useLocation();
  let beforeEditUserInfo;
  if (location.state.profileImgSaveUrl) {
    beforeEditUserInfo = location.state;
  }
  return (
    <>
      <InputEmailForm beforeEditUserInfo={beforeEditUserInfo} />
    </>
  );
}

export default InputEmail;
