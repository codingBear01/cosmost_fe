/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button, Input, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';

function ReportForm({
  onClick,
  setIsReportFormOpened,
  isReportFormOpened,
  type,
  report,
  isHistoriesChanged,
  setIsHistoriesChanged,
}) {
  console.log(report);

  const [reportCategories, setReportCategories] = useState([]);
  /* 신고 작성 관련 ref */
  const reportTitle = useRef();
  const reportContent = useRef();
  const reportCategory = useRef();

  /* Handlers */
  /* 모달창 닫힐 시 입력값 초기화 */
  useEffect(() => {
    if (type === 'update') {
      reportTitle.current.value = '';
      reportContent.current.value = '';
      reportCategory.current.value = 'default';
    }
  }, [isReportFormOpened, type]);

  const checkReportInput = () => {
    if (reportCategory.current.value === 'default') {
      toast.error('카테고리를 입력해주세요.');
      return false;
    }
    if (!reportTitle.current.value) {
      toast.error('제목을 입력해주세요.');
      return false;
    }
    if (!reportContent.current.value) {
      toast.error('내용을 입력해주세요.');
      return false;
    }
    return true;
  };

  /* APIs */
  /* 리뷰 작성에 쓰일 신고 카테고리를 불러오는 함수 */
  // const getReportCategories = () => {
  //   const url = `${process.env.REACT_APP_BOARD_IP}/v1/boards`;
  // const config = { timeout: 3000 };

  //   axios
  //     .get(url, config)
  //     .then((response) => {
  //       setReportCategories(response.data);
  //     })
  //     .catch((error) => {
  //       new Error(error);
  //     });
  // };
  // useEffect(() => {
  //   getReportCategories();
  // }, []);

  /* 신고 버튼 클릭 시 작성된 신고 내용을 서버로 전송하는 함수 */
  const postReport = (e) => {
    e.preventDefault();

    if (!checkReportInput()) return;

    const url = `${process.env.REACT_APP_BOARD_IP}/v1/boards`;
    const body = {
      reporterId: 2,
      reportTitle: reportTitle.current.value,
      reportContent: reportContent.current.value,
      createReportCategoryListRequestList: [
        {
          reportCategory: +reportCategory.current.value,
        },
      ],
    };
    const config = { timeout: 3000 };

    axios
      .post(url, body, config)
      .then((response) => {
        setIsReportFormOpened(!isReportFormOpened);
      })
      .catch((error) =>
        toast.error('오류가 발생했습니다. 관리자에게 문의하세요.')
      );
  };

  /* 수정 버튼 클릭 시 작성된 신고 수정 내용을 서버로 전송하는 함수 */
  const updateReport = (e, id) => {
    e.preventDefault();

    if (!checkReportInput()) return;

    const url = `${process.env.REACT_APP_BOARD_IP}/v1/boards/${id}`;
    const body = {
      reportTitle: reportTitle.current.value,
      reportContent: reportContent.current.value,
      updateReportCategoryListRequestList: [
        {
          id: report.reportCategoryList[0].id,
          reportCategory: +reportCategory.current.value,
        },
      ],
    };
    const config = { timeout: 3000 };

    axios
      .put(url, body, config)
      .then((response) => {
        setIsHistoriesChanged(!isHistoriesChanged);
        setIsReportFormOpened(!isReportFormOpened);
      })
      .catch((error) =>
        toast.error('오류가 발생했습니다. 관리자에게 문의하세요.')
      );
  };

  /* Hooks */
  /* 신고 모달 열렸을 때 바깥 영역 스크롤 방지하고 스크롤 Y좌표 맨 위로 설정하는 함수 */
  useEffect(() => {
    if (isReportFormOpened) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isReportFormOpened]);

  return (
    <S.ReportFormBg isReportFormOpened={isReportFormOpened}>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <S.ReportForm>
        <S.ReportFormTitleWrap>
          <UtilTitle>
            {/* 타입에 따라 텍스트 변경 */}
            {!type && '신고하기'}
            {type === 'detail' && '신고 상세 조회'}
            {type === 'update' && '신고 수정하기'}
          </UtilTitle>
          <AiIcons.AiOutlineClose onClick={onClick} />
        </S.ReportFormTitleWrap>
        {/* 신고 상세 조회면 해당 신고의 분류 정보, 신고하기 혹은 수정하기 폼이면 신고 유형 드랍다운 */}
        {type === 'detail' ? (
          <S.ReportHistoryCat>
            분류: {report?.reportCategoryList[0].reportCategoryName}
          </S.ReportHistoryCat>
        ) : (
          <S.ReportFormCats ref={reportCategory}>
            <option value="default">신고 유형</option>
            <option value={1}>사용자</option>
            <option value={2}>코스</option>
            <option value={3}>리뷰</option>
            {reportCategories &&
              reportCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.reportCategoryName}
                </option>
              ))}
          </S.ReportFormCats>
        )}
        {/* 신고 제목 */}
        {/* 신고 상세 조회면 해당 신고의 제목, 신고하기 및 수정하기 폼이면 신고 제목 입력 인풋 */}
        {type === 'detail' ? (
          <S.ReportFormTitle>{report?.reportTitle}</S.ReportFormTitle>
        ) : (
          <Input
            ref={reportTitle}
            type="text"
            placeholder={type === 'update' ? report.reportTitle : '제목'}
            width={'45rem'}
            height={'4rem'}
          />
        )}
        {/* 신고 내용 */}
        {/* 상세 조회면 수정 불가, 신고하기 및 수정하기면 수정 가능 */}
        {type === 'detail' ? (
          <S.ReportFormTextArea
            disabled
            value={report?.reportContent}
          ></S.ReportFormTextArea>
        ) : (
          <S.ReportFormTextArea
            ref={reportContent}
            type={'text'}
            placeholder={
              type === 'update'
                ? report.reportContent
                : '신고 내용을 입력해주세요.'
            }
            maxLength={500}
          ></S.ReportFormTextArea>
        )}
        {/* 신고 버튼 */}
        {/* 신고하기, 수정하기면 보이고, 상세 조회는 안 보임*/}
        {type !== 'detail' && (
          <S.ReportFormBtnWrap>
            <Button
              type="button"
              width={'8rem'}
              height={'3.5rem'}
              marign={'0 3rem'}
              color={color.black}
              bgColor={color.lightGrey}
              hoveredBgColor={color.grey}
              onClick={onClick}
            >
              취소
            </Button>
            <Button
              type="submit"
              width={'8rem'}
              height={'3.5rem'}
              margin={'0 3rem'}
              color={color.white}
              bgColor={color.darkBlue}
              hoveredBgColor={color.navy}
              onClick={
                !type ? (e) => postReport(e) : (e) => updateReport(e, report.id)
              }
            >
              {!type && '신고'}
              {type === 'update' && '수정'}
            </Button>
          </S.ReportFormBtnWrap>
        )}
      </S.ReportForm>
    </S.ReportFormBg>
  );
}

export default ReportForm;
