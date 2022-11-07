/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
/* components */
import * as S from './styled';
import { Button, Input, UtilTitle } from '../..';
/* APIs */
import { getReportCategories, postReport, updateReport } from '../../../apis';
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
  const token = localStorage.getItem('token');

  const [reportCategories, setReportCategories] = useState([]);

  /* 신고 작성 관련 ref */
  const reportTitle = useRef();
  const reportContent = useRef();
  const reportCategory = useRef();

  /* Handlers */
  /** 모달창 닫힐 시 입력값 초기화 */
  useEffect(() => {
    if (type === 'update') {
      reportTitle.current.value = '';
      reportContent.current.value = '';
      reportCategory.current.value = 'default';
    }
  }, [isReportFormOpened, type]);

  const checkReportInput = () => {
    if (reportCategory.current.value === 'default') {
      toast.error('카테고리를 선택해주세요.');
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
  /** 신고 카테고리를 가져오는 hooks */
  useEffect(() => {
    getReportCategories(setReportCategories);
  }, []);

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
        limit={1}
      />
      <S.ReportForm>
        <S.ReportFormTitleWrap>
          <UtilTitle>
            {/* 타입에 따라 텍스트 변경 */}
            {!type && '신고하기'}
            {type === 'detail' && '신고 상세 조회'}
            {type === 'update' && '신고 수정하기'}
            {type === 'answer' && '신고 답변'}
          </UtilTitle>
          <AiIcons.AiOutlineClose onClick={onClick} />
        </S.ReportFormTitleWrap>
        {/* 신고 상세 조회면 해당 신고의 분류 정보, 신고하기 혹은 수정하기 폼이면 신고 유형 드랍다운 */}
        {type === 'detail' || type === 'answer' ? (
          <>
            {type === 'detail' && (
              <S.ReportHistoryCat>
                분류: {report?.reportCategoryList[0].reportCategoryName}
              </S.ReportHistoryCat>
            )}
          </>
        ) : (
          <S.ReportFormCats ref={reportCategory}>
            <option value="default">카테고리</option>
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
        {type === 'detail' || type === 'answer' ? (
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
        {type === 'detail' || type === 'answer' ? (
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
        {type !== 'detail' && type !== 'answer' ? (
          <S.ReportFormBtnWrap>
            <Button
              type="button"
              width={'80px'}
              height={'35px'}
              margin={'0 10px'}
              color={color.black}
              bgColor={color.lightGrey}
              hoveredBgColor={color.grey}
              onClick={onClick}
            >
              취소
            </Button>
            <Button
              type="button"
              width={'80px'}
              height={'35px'}
              margin={'0 10px'}
              color={color.white}
              bgColor={color.darkBlue}
              hoveredBgColor={color.navy}
              onClick={
                !type
                  ? (e) =>
                      postReport(
                        checkReportInput,
                        reportTitle,
                        reportContent,
                        reportCategory,
                        setIsReportFormOpened,
                        isReportFormOpened,
                        toast,
                        token
                      )
                  : (e) =>
                      updateReport(
                        report.id,
                        checkReportInput,
                        reportTitle,
                        reportContent,
                        report,
                        reportCategory,
                        setIsHistoriesChanged,
                        isHistoriesChanged,
                        setIsReportFormOpened,
                        isReportFormOpened,
                        toast,
                        token
                      )
              }
            >
              {!type && '신고'}
              {type === 'update' && '수정'}
            </Button>
          </S.ReportFormBtnWrap>
        ) : (
          <></>
        )}
      </S.ReportForm>
    </S.ReportFormBg>
  );
}

export default ReportForm;
