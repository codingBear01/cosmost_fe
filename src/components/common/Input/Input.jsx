import React from 'react';
/* components */
import * as S from './styled';

function Input({ type, placeholder, value, w, h, mr }) {
  return (
    <S.StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      w={w}
      h={h}
      mr={mr}
    />
  );
}

export default Input;
