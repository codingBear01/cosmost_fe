import React from 'react';
/* components */
import {
  CourseContainer,
  Header,
  FlexDiv,
  SearchResultPageItem,
} from '../common';
/* static data */
import { SEARCH_RESULT_PAGE_DATA_LIST as data } from '../../data';
import { COLOR_LIST as color } from '../../style';

function SearchResultPage() {
  return (
    <div style={{ backgroundColor: `${color.white}` }}>
      <Header></Header>
      <FlexDiv justifyContent="center">
        <CourseContainer pt={'12rem'}>
          {data.map((item, index) => (
            <SearchResultPageItem key={index} item={item} />
          ))}
        </CourseContainer>
      </FlexDiv>
    </div>
  );
}

export default SearchResultPage;
