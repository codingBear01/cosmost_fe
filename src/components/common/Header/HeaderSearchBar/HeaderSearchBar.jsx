import React from 'react';
/* Recoil */
import { useRecoilState } from 'recoil';
import { queryStringsStateAtom, searchingTypeAtom } from '../../../../store';
/* components */
import * as S from './styled';
import { Icon, Input } from '../../../';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function HeaderSearchBar({
  isSearchBarOpened,
  setIsSearchBarOpened,
  searchKeyword,
  setSearchKeyword,
  onClickOpenSearchBar,
}) {
  const navigate = useNavigate();

  /* States */
  const [queryStringsState, setQueryStringsState] = useRecoilState(
    queryStringsStateAtom
  );
  const [, setSearchingType] = useRecoilState(searchingTypeAtom);

  /** 검색 키워드를 입력했을 때 호출할 핸들러*/
  const onChangeSearchInput = (e) => {
    setSearchKeyword(e.target.value);
  };

  /** 사용자가 검색창에서 Enter를 입력한 경우 검색을 시도하는 핸들러 */
  const handleSearchKeyword = (e) => {
    if (e.type === 'click' || e.code === 'Enter') {
      setIsSearchBarOpened(false);
      setSearchingType('search');
      setQueryStringsState(!queryStringsState);
      navigate(`/courses/keyword?keyword=${searchKeyword.trim()}`);
    }
  };

  return (
    <S.HeaderSearchBar isSearchBarOpened={isSearchBarOpened}>
      <Icon onClick={handleSearchKeyword}>
        <BsIcons.BsSearch />
      </Icon>
      <Input
        type="text"
        placeholder="키워드를 입력하세요."
        width={'60rem'}
        height={'5rem'}
        margin={'0 2rem'}
        value={searchKeyword}
        onChange={onChangeSearchInput}
        onKeyDown={handleSearchKeyword}
        style={{ alignSelf: 'end' }}
      />
      <Icon onClick={onClickOpenSearchBar}>
        <AiIcons.AiOutlineClose />
      </Icon>
    </S.HeaderSearchBar>
  );
}

export default HeaderSearchBar;
