import React, { useState } from "react";
/* components */
import * as S from "./styled";
import { Icon, Input } from "../../../";
/* icons */
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function HeaderSearchBar({ isSearchBarOpened, setIsSearchBarOpened, onClick }) {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  // 검색 키워드를 입력했을 때 호출할 핸들러
  const onChangeSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  // 사용자가 검색창에서 Enter를 입력한 경우 검색을 시도하는 핸들러
  const onKeydownSearchInput = (e) => {
    if (e.code == "Enter") {
      setIsSearchBarOpened(false);
      navigate(`/courses/keyword?keyword=${searchText}`);
    }
  };
  //

  return (
    <S.HeaderSearchBar isSearchBarOpened={isSearchBarOpened}>
      <Icon>
        <BsIcons.BsSearch />
      </Icon>
      <Input
        type="text"
        placeholder="키워드를 입력하세요."
        width={"60rem"}
        height={"2.5rem"}
        margin={"0 2rem"}
        onChange={onChangeSearchInput}
        onKeyDown={onKeydownSearchInput}
        value={searchText}
      />
      <Icon onClick={onClick}>
        <AiIcons.AiOutlineClose />
      </Icon>
    </S.HeaderSearchBar>
  );
}

export default HeaderSearchBar;
