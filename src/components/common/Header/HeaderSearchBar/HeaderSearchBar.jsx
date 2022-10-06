import React from 'react';
/* components */
import * as S from './styled';
import { Icon, Input } from '../../../';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';

function HeaderSearchBar({ onClick, isSearchBarOpen }) {
  return (
    <S.HeaderSearchBar isSearchBarOpen={isSearchBarOpen}>
      <Icon>
        <BsIcons.BsSearch />
      </Icon>
      <Input
        type="text"
        placeholder="키워드를 입력하세요."
        w={'60rem'}
        h={'2.5rem'}
        mr={'0 2rem'}
      />
      <Icon onClick={onClick}>
        <AiIcons.AiOutlineClose />
      </Icon>
    </S.HeaderSearchBar>
  );
}

export default HeaderSearchBar;
