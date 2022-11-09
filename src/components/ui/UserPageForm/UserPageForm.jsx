/* libraries */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { isReportFormOpenedAtom } from '../../../store';
/* components */
import { UserProfilArea } from '.';
import { ReportForm, UtilDiv, UtilTitle, MenuListForm } from '../..';
import { toast } from 'react-toastify';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function UserInfoForm() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [location, setLocation] = useState({
    state: '',
  });

  /** 모달창 Open 여부 state */
  const [isReportFormOpened, setIsReportFormOpened] = useRecoilState(
    isReportFormOpenedAtom
  );

  /** 신고 모달창 Open 여부 조작하는 핸들러 */
  const onClickOpenReportForm = () => {
    setIsReportFormOpened(!isReportFormOpened);
  };

  /* APIs */

  const getUserInfo = () => {
    const url = `${process.env.REACT_APP_API}/auths`;
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 1000,
    };
    axios
      .get(url, config)
      .then((resonse) => {
        setLocation({ ...location, state: resonse.data });
      })
      .catch((error) => {
        new Error(error);
        toast.error('데이터를 가져오는데 실패했습니다. 관리자에게 문의하세요');
      });
  };

  /** token 없을 시 에러 페이지로 redirect */
  useEffect(() => {
    if (!token) {
      navigate('/error');
    }
    getUserInfo();
  }, []);

  return (
    location.state && (
      <UtilDiv width={'100%'} height={'100vh'}>
        <UtilTitle>
          <span style={{ color: color.lightBlue }}>
            {location.state.nickname}
          </span>{' '}
          님
        </UtilTitle>
        {/* 유저 프로필 및 유저 정보, 프로필 편집 버튼 */}
        <UserProfilArea token={token} user={location.state} />
        {/* 유저 페이지 메뉴 목록 */}
        <MenuListForm onClickOpenReportForm={onClickOpenReportForm} />
        {/* 신고하기 모달창 */}
        <ReportForm
          onClick={onClickOpenReportForm}
          setIsReportFormOpened={setIsReportFormOpened}
          isReportFormOpened={isReportFormOpened}
        />
      </UtilDiv>
    )
  );
}

export default UserInfoForm;
