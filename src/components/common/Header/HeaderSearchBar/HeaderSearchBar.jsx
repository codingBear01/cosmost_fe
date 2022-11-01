import React from 'react';
/* components */
import * as S from './styled';
import { Icon, Input } from '../../../';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

function HeaderSearchBar({ isSearchBarOpened, onClick }) {
  return (
    <S.HeaderSearchBar isSearchBarOpened={isSearchBarOpened}>
      <Icon>
        <BsIcons.BsSearch />
      </Icon>
      <Input
        type="text"
        placeholder="키워드를 입력하세요."
        width={'60rem'}
        height={'2.5rem'}
        margin={'0 2rem'}
      />
      <Icon onClick={onClick}>
        <AiIcons.AiOutlineClose />
      </Icon>
    </S.HeaderSearchBar>
  );
}

export default HeaderSearchBar;
