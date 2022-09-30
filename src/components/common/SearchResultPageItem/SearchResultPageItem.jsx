import React from "react";
import { FlexDiv, CourseImg, CourseTitle, HashTag } from "../../common";
import { COLOR_LIST, BORDER_RADIUS_LIST } from "../../../style";

function SearchResultPageItem({ item }) {
  console.log(item);
  return (
    <div
      style={{
        width: "25rem",
        margin: "0 0 3rem 0",
        border: `1px solid ${COLOR_LIST.lightBlue}`,
        borderRadius: BORDER_RADIUS_LIST.default,
      }}
    >
      <div style={{ borderBottom: `1px solid ${COLOR_LIST.lightBlue}` }}>
        <CourseImg src={item.imgUrl} width={"100%"} height={"19rem"} />
      </div>
      <div>
        <CourseTitle
          fontSize={"2rem"}
          rate={item.rate}
          overflow="hidden"
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
        >
          {item.title}
        </CourseTitle>
        <FlexDiv justify-content="space-beetween" alignItems="normal">
          <FlexDiv
            fontSize="1.5rem"
            alignItems="normal"
            fontWeight="bold"
            display="block"
          >
            {item.categories.map((categoriesItem, index) => {
              return <div key={index}>{"@" + categoriesItem.categoryName}</div>;
            })}
          </FlexDiv>
          <div>
            <div>{item.date}</div>
            <div>{item.user}</div>
          </div>
        </FlexDiv>
        <div>
          {item.hashTags.map((item, index) => {
            return <HashTag key={index}>{item.hashTagName}</HashTag>;
          })}
        </div>
        <FlexDiv fontWeight="bold">
          {item.courses.map((courseItem, index, courses) => {
            if (index === courses.length - 1) return courseItem.courseName;
            else return courseItem.courseName + " -> ";
          })}
        </FlexDiv>
      </div>
    </div>
  );
}

export default SearchResultPageItem;
