/* libraries */
import React from 'react';
import { useNavigate } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Icon } from '../../';
/* icons */
import * as AiIcons from 'react-icons/ai';

function UtilPageContainer({ children }) {
  const navigate = useNavigate();
  return (
    <S.StyledUtilPageContainer>
      <Icon onClick={() => navigate(-1)}>
        <AiIcons.AiOutlineArrowLeft />
      </Icon>
      {children}
    </S.StyledUtilPageContainer>
  );
}

export default UtilPageContainer;
