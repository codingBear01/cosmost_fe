import React from 'react';
/* components */
import * as S from './styled';

function Input({
  type,
  name,
  placeholder,
  value,
  maxLength,
  disabled,
  width,
  height,
  margin,
  fontSize,
  onChange,
  required,
}) {
  return (
    <S.StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      disabled={disabled}
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;
