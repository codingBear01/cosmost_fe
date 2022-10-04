/* hooks */
import React from 'react';
/* components */
import * as S from './styled';
import { Icon } from '../../';
/* icons */
import * as AiIcons from 'react-icons/ai';

function UtilPageContainer({ children }) {
  return (
    <S.StyledUtilPageContainer>
      <Icon>
        <AiIcons.AiOutlineArrowLeft />
      </Icon>
      {children}
    </S.StyledUtilPageContainer>
  );
}

export default UtilPageContainer;
