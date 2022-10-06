import React from 'react';
/* components */
import * as S from './styled';

function Input({
  type,
  name,
  placeholder,
  value,
  disabled,
  width,
  height,
  margin,
  onChange,
}) {
  return (
    <S.StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      width={width}
      height={height}
      margin={margin}
      onChange={onChange}
    />
  );
}

export default Input;
