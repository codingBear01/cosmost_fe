/* libraries */
import React from 'react';
import { useNavigate } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Icon } from '../..';
/* icons */
import * as AiIcons from 'react-icons/ai';

function UtilPageContainer({ children }) {
  const navigate = useNavigate();

  return (
    <S.StyledUtilPageContainer>
      <AiIcons.AiOutlineArrowLeft onClick={() => navigate(-1)} />
      {children}
    </S.StyledUtilPageContainer>
  );
}

export default UtilPageContainer;
