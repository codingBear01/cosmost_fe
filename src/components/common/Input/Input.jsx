import React from "react";
/* components */
import * as S from "./styled";

function Input({
  type,
  name,
  placeholder,
  value,
  disabled,
  w,
  h,
  mr,
  onChange,
}) {
  return (
    <S.StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      w={w}
      h={h}
      mr={mr}
      onChange={onChange}
    />
  );
}

export default Input;
