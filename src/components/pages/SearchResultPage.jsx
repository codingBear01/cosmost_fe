import React from "react";
import { Header, FlexDiv, SearchResultPageItem } from "../common";

let temp = Array(16);
temp = [...temp];
console.log(temp);
function SearchResultPage() {
  return (
    <div>
      <Header></Header>
      <FlexDiv margin="7rem 0 0 0" justifyContent="center">
        <FlexDiv width="120rem" flexWrap="wrap" justifyContent="space-around">
          {temp.map((item, index) => {
            return <SearchResultPageItem key={index} />;
          })}
        </FlexDiv>
      </FlexDiv>
    </div>
  );
}

export default SearchResultPage;
