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

  const transferPage = (path) => {
    if (path === '/user/edit/menu') {
      navigate(`/user/${user?.id}`);
    } else if (path === `/user/${user?.id}`) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <S.UtilPageContainerHeader>
        <AiIcons.AiOutlineArrowLeft onClick={() => transferPage(path)} />
      </S.UtilPageContainerHeader>
      <S.StyledUtilPageContainer>{children}</S.StyledUtilPageContainer>
    </>
  );
}

export default UtilPageContainer;
