import React from "react";
import { SEARCH_RESULT_PAGE_DATA_LIST } from "../../data";
import { Header, FlexDiv, SearchResultPageItem } from "../common";

function SearchResultPage() {
  return (
    <div>
      <Header></Header>
      <FlexDiv margin="11rem 0 0 0" justifyContent="center">
        <FlexDiv width="120rem" flexWrap="wrap" justifyContent="space-around">
          {SEARCH_RESULT_PAGE_DATA_LIST.map((item, index) => {
            return <SearchResultPageItem key={index} item={item} />;
          })}
        </FlexDiv>
      </FlexDiv>
    </div>
  );
}

export default SearchResultPage;
