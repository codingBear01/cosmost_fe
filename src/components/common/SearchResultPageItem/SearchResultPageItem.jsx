import React from "react";
import { FlexDiv, CourseImg, CourseTitle, HashTag } from "../../common";

function SearchResultPageItem() {
  return (
    <div style={{ width: "25rem" }}>
      <div>
        <CourseImg width={"100%"} />
      </div>
      <div>
        <CourseTitle fontSize={"2rem"}>코스 제목</CourseTitle>
        <FlexDiv justify-content="space-beetween" alignItems="normal">
          <FlexDiv fontSize="1.5rem" alignItems="normal" fontWeight="bold">
            <div>@지역별</div>
            <div>@테마별</div>
          </FlexDiv>
          <div>
            <div>2022/01/03</div>
            <div>포스트맨</div>
          </div>
        </FlexDiv>
        <div>
          <HashTag>#해시태그</HashTag>
          <HashTag>#해시태그</HashTag>
          <HashTag>#해시태그</HashTag>
        </div>
        <FlexDiv fontWeight="bold">
          1번장소 &rarr; 2번장소 &rarr; 3번장소 &rarr; 4번 장소 &rarr; 5번장소
        </FlexDiv>
      </div>
    </div>
  );
}

export default SearchResultPageItem;
