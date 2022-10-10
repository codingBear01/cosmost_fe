/* libraries */
import React from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { isOrderingModalOpenedAtom } from '../../../store';
/* components */
import * as S from './styled';
import { SelectingCategoryArea } from '.';
import { OrderingButton, UtilDiv } from '../../';

function SearchedCoursesForm() {
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );

  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  return (
    <UtilDiv width={'76.8rem'} padding={'7rem 0'} margin={'0 auto'}>
      {/* 카테고리 선택 영역 */}
      <SelectingCategoryArea />
      {/* 정렬 기준 버튼 */}
      <OrderingButton onClick={onClickOpenOrderingModal} />
    </UtilDiv>
  );
}

export default SearchedCoursesForm;
