/* libraries */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
import { ReportModal, UserPageMenuList, UserProfilArea } from '.';
import { UtilDiv, UtilTitle } from '../..';

function UserInfoForm() {
  /* 모달창 Open 여부 state */
  const [isReportModalOpened, setIsReportModalOpened] = useState(false);

  /* 신고 모달창 Open 여부 조작하는 핸들러 */
  const onClickOpenReportModal = () => {
    setIsReportModalOpened(!isReportModalOpened);
  };

  return (
    <UtilDiv pd={'5rem'}>
      <UtilTitle>닉네임 님</UtilTitle>
      {/* 유저 프로필 및 유저 정보, 프로필 편집 버튼 */}
      <UserProfilArea />
      {/* 유저 페이지 메뉴 목록 */}
      <UserPageMenuList onClickOpenReportModal={onClickOpenReportModal} />
      {/* 신고하기 모달창 */}
      <ReportModal
        onClickOpenReportModal={onClickOpenReportModal}
        isReportModalOpened={isReportModalOpened}
      />
    </UtilDiv>
  );
}

export default UserInfoForm;
