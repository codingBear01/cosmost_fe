/* libraries */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { isReportFormOpenedAtom } from '../../../store';
/* components */
import { UserProfilArea } from '.';
import { ReportForm, UtilDiv, UtilTitle, MenuListForm } from '../..';

function UserInfoForm() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  /* 모달창 Open 여부 state */
  const [isReportFormOpened, setIsReportFormOpened] = useRecoilState(
    isReportFormOpenedAtom
  );

  /* 신고 모달창 Open 여부 조작하는 핸들러 */
  const onClickOpenReportForm = () => {
    setIsReportFormOpened(!isReportFormOpened);
  };

  /* token 없을 시 에러 페이지로 redirect */
  useEffect(() => {
    if (!token) {
      navigate('/error');
    }
  }, []);

  return (
    <UtilDiv width={'100%'} height={'100vh'}>
      <UtilTitle>닉네임 님</UtilTitle>
      {/* 유저 프로필 및 유저 정보, 프로필 편집 버튼 */}
      <UserProfilArea token={token} />
      {/* 유저 페이지 메뉴 목록 */}
      <MenuListForm onClickOpenReportForm={onClickOpenReportForm} />
      {/* 신고하기 모달창 */}
      <ReportForm
        onClick={onClickOpenReportForm}
        setIsReportFormOpened={setIsReportFormOpened}
        isReportFormOpened={isReportFormOpened}
      />
    </UtilDiv>
  );
}

export default UserInfoForm;
