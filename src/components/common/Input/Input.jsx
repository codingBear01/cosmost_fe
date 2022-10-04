import React from 'react';
/* components */
import * as S from './styled';

function Input({ type, placeholder, value, disabled, w, h, mr }) {
  return (
    <S.StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      w={w}
      h={h}
      mr={mr}
    />
  );
}

export default Input;
