/* libraries */
import React from "react";
import { useLocation } from "react-router-dom";
/* components */
import { InputUserForm } from "..";

function InputUser() {
  const location = useLocation();
  let beforeEditUserInfo;
  if (location.state.profileImgSaveUrl) {
    beforeEditUserInfo = location.state;
  }
  return (
    <InputUserForm
      state={location.state}
      beforeEditUserInfo={beforeEditUserInfo}
    />
  );
}

export default InputUser;
