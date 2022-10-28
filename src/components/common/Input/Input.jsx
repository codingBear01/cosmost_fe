import React, { forwardRef } from 'react';
/* components */
import * as S from './styled';

const Input = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    return (
      <S.StyledInput
        ref={ref}
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
);

export default Input;
