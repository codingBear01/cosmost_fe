import React from 'react';
/* components */
import * as S from './styled';
import { HeaderIcon } from '../';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';

function HeaderSearchBar({ onClick, isSearchBarOpen }) {
  return (
    <S.HeaderSearchBar isSearchBarOpen={isSearchBarOpen}>
      <HeaderIcon>
        <BsIcons.BsSearch />
      </HeaderIcon>
      <S.StyledSearchInput
        type="text"
        placeholder="키워드를 입력하세요."
        width={'60rem'}
        height={'2.5rem'}
        fontSize={fs.xs}
      />
      <HeaderIcon onClick={onClick}>
        <AiIcons.AiOutlineClose />
      </HeaderIcon>
    </S.HeaderSearchBar>
  );
}

export default HeaderSearchBar;
