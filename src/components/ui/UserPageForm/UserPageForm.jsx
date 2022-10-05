/* libraries */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
import { UserPageMenuList, UserProfilArea } from '.';
import { ReportForm, UtilDiv, UtilTitle } from '../..';

function UserInfoForm() {
  /* 모달창 Open 여부 state */
  const [isReportFormOpened, setIsReportFormOpened] = useState(false);

  /* 신고 모달창 Open 여부 조작하는 핸들러 */
  const onClickOpenReportForm = () => {
    setIsReportFormOpened(!isReportFormOpened);
    console.log('클릭됨!');
  };

  return (
    <UtilDiv pd={'5rem'}>
      <UtilTitle>닉네임 님</UtilTitle>
      {/* 유저 프로필 및 유저 정보, 프로필 편집 버튼 */}
      <UserProfilArea />
      {/* 유저 페이지 메뉴 목록 */}
      <UserPageMenuList onClickOpenReportForm={onClickOpenReportForm} />
      {/* 신고하기 모달창 */}
      <ReportForm
        onClickOpenReportForm={onClickOpenReportForm}
        setIsReportFormOpened={setIsReportFormOpened}
        isReportFormOpened={isReportFormOpened}
      />
    </UtilDiv>
  );
}

export default UserInfoForm;
