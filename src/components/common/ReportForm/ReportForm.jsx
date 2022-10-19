/* libraries */
import React, { useEffect, useRef } from 'react';
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
  isReportHistoryPage,
  item,
}) {
  const reportTitle = useRef();
  const reportContent = useRef();
  const reportCategory = useRef();

  /* Handlers */
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
  const onClickReport = (e) => {
    e.preventDefault();

    if (!checkReportInput()) return;

    const reportUrl = `${process.env.REACT_APP_REPORT_IP}/v1/boards`;
    const reportBody = {
      reporterId: 2,
      reportTitle: reportTitle.current.value,
      reportContent: reportContent.current.value,
      createReportCategoryListRequestList: [
        {
          reportCategory: +reportCategory.current.value,
        },
      ],
    };

    axios
      .post(reportUrl, reportBody)
      .then((response) => {
        setIsReportFormOpened(!isReportFormOpened);
      })
      .catch((error) =>
        toast.error('오류가 발생했습니다. 관리자에게 문의하세요.')
      );

    setIsReportFormOpened(false);
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
            {/* 신고 내역 페이지이면 신고 상세 조회, 신고하기 폼이면 내가 남긴 리뷰 */}
            {isReportHistoryPage ? '신고 상세 조회' : '신고하기'}
          </UtilTitle>
          <AiIcons.AiOutlineClose onClick={onClick} />
        </S.ReportFormTitleWrap>
        {/* 신고 내역 페이지면 해당 신고의 분류, 신고하기 폼이면 신고 유형 드랍다운 */}
        {isReportHistoryPage ? (
          <S.ReportHistoryCat>
            분류: {item?.reportCategoryList[0].reportCategoryName}
          </S.ReportHistoryCat>
        ) : (
          <S.ReportFormCats ref={reportCategory}>
            <option value="default">신고 유형</option>
            <option value={1}>사용자</option>
            <option value={2}>리뷰</option>
            <option value={3}>코스</option>
          </S.ReportFormCats>
        )}
        {/* 신고 내역 페이지면 해당 신고의 제목, 신고하기 폼이면 신고 제목 입력 인풋 */}
        {isReportHistoryPage ? (
          <S.ReportFormTitle>{item?.reportTitle}</S.ReportFormTitle>
        ) : (
          // 신고 제목
          <Input
            ref={reportTitle}
            type="text"
            placeholder="제목"
            width={'45rem'}
            height={'4rem'}
          />
        )}
        {/* 신고 내용 */}
        <S.ReportFormTextArea
          ref={reportContent}
          placeholder="신고 내용을 입력해주세요."
          // 신고 내역 페이지면 입력 불가, 신고하기 폼이면 입력 가능
          disabled={isReportHistoryPage}
          value={item?.reportContent}
          maxLength={500}
        ></S.ReportFormTextArea>
        {/* 신고 버튼 */}
        {/* 신고 내역 페이지면 안 보임, 신고하기 폼이면 보임 */}
        {!isReportHistoryPage && (
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
              onClick={(e) => onClickReport(e)}
            >
              신고
            </Button>
          </S.ReportFormBtnWrap>
        )}
      </S.ReportForm>
    </S.ReportFormBg>
  );
}

export default ReportForm;
