/* libraries */
import React from 'react';
/* components */
import * as S from './styled';

function LoadingForm() {
  return (
    <S.LoadingFormOverlay>
      <div>로딩 중ㅋ</div>
      <img src="/assets/images/spinner.gif" alt="로딩 중" />
    </S.LoadingFormOverlay>
  );
}

export default LoadingForm;
