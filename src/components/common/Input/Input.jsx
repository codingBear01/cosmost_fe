import React from 'react';
/* components */
import * as S from './styled';

function Input({ type, placeholder, w, h, mr }) {
  return (
    <S.StyledInput type={type} placeholder={placeholder} w={w} h={h} mr={mr} />
  );
}

export default Input;
