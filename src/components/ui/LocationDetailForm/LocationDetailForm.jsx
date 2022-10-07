import React, { useState } from "react";
/* components */
import { Input, NextBtn, UtilForm, UtilInputWrap, UtilTitle } from "../..";

function LocationDetailForm({ state }) {
  const [detailAddress, setDetailAddress] = useState("");

  /* 상세주소 입력시 호출될 핸들러
     state를 전달한다.*/
  const onChangeDetailAddress = (e) => {
    setDetailAddress(e.target.value);
  };

  /* 다음 버튼 클릭시 호출할 핸들러
     상세주소 유효성 검사후 다음 창으로 넘어간다.*/
  const onClickNextButton = (e) => {
    if (detailAddress === "") {
      alert("상세주소를 입력해주세요.");
      e.preventDefault();
      return;
    }
  };

  return (
    <UtilForm pd={"15.4rem 10rem"}>
      <UtilTitle>상세 주소를 입력해주세요.</UtilTitle>
      <UtilInputWrap>
        <Input
          type="text"
          value={state.address}
          disabled
          w={"340px"}
          h={"40px"}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={detailAddress}
          placeholder="상세 주소"
          w={"340px"}
          h={"40px"}
          onChange={onChangeDetailAddress}
        />
      </UtilInputWrap>
      <NextBtn
        to={"/sign-up/user-info"}
        state={{ ...state, detailAddress }}
        onClick={onClickNextButton}
      />
    </UtilForm>
  );
}

export default LocationDetailForm;
