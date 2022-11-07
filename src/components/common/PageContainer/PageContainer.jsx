/* libraries */
import React from 'react';
import { useNavigate } from 'react-router-dom';
/* components */
import * as S from './styled';
/* icons */
import * as AiIcons from 'react-icons/ai';

function UtilPageContainer({ children }) {
  const navigate = useNavigate();

  return (
    <>
      <S.UtilPageContainerHeader>
        <AiIcons.AiOutlineArrowLeft onClick={() => navigate(-1)} />
      </S.UtilPageContainerHeader>
      <S.StyledUtilPageContainer>{children}</S.StyledUtilPageContainer>
    </>
  );
}

export default UtilPageContainer;
