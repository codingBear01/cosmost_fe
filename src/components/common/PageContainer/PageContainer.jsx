/* libraries */
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { userAtom } from '../../../store';
/* components */
import * as S from './styled';
/* icons */
import * as AiIcons from 'react-icons/ai';

function UtilPageContainer({ children }) {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const [user] = useRecoilState(userAtom);

  return (
    <>
      <S.UtilPageContainerHeader>
        <AiIcons.AiOutlineArrowLeft
          onClick={() =>
            navigate(path === '/user/edit/menu' ? `/user/${user?.id}` : -1)
          }
        />
      </S.UtilPageContainerHeader>
      <S.StyledUtilPageContainer>{children}</S.StyledUtilPageContainer>
    </>
  );
}

export default UtilPageContainer;
