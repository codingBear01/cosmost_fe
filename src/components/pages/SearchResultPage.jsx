import React from "react";
import { SEARCH_RESULT_PAGE_DATA_LIST } from "../../data";
import { Header, FlexDiv, SearchResultPageItem } from "../common";
import { COLOR_LIST } from "../../style";

function SearchResultPage() {
  return (
    <div style={{ backgroundColor: "#E6E6E6" }}>
      <Header></Header>
      <FlexDiv margin="7rem 0 0 0" justifyContent="center">
        <FlexDiv
          margin="3rem 0 0 0"
          width="120rem"
          flexWrap="wrap"
          justifyContent="space-around"
        >
          {SEARCH_RESULT_PAGE_DATA_LIST.map((item, index) => {
            return <SearchResultPageItem key={index} item={item} />;
          })}
        </FlexDiv>
      </FlexDiv>
    </div>
  );
}

export default SearchResultPage;
