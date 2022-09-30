/* components */
import * as S from './styled';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
import { REPORT_CATEGORIES_LIST } from '../../../../data';
/* react-icons */
import * as GrIcons from 'react-icons/gr';

function ReportModal({ handleReportModalOpen, isReportModalOpen }) {
  /* 신고 submit 함수*/
  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert('신고가 되었읍니다!🚔👮‍♂️');
  };

  return (
    <S.ReportModal isReportModalOpen={isReportModalOpen}>
      <S.ReportForm>
        <S.ReportFormHeader>
          <S.ReportTitle>신고하기</S.ReportTitle>
          <GrIcons.GrClose onClick={handleReportModalOpen} />
        </S.ReportFormHeader>

        <S.ReportCategories>
          {REPORT_CATEGORIES_LIST &&
            REPORT_CATEGORIES_LIST.map((cat, i) => (
              <option key={cat.id} value={cat.value}>
                {cat.option}
              </option>
            ))}
        </S.ReportCategories>

        <S.ReportTitleInput
          type={'text'}
          placeholder="제목"
          maxLength={50}
          width={'50rem'}
          height={'5rem'}
          fontSize={fs.l}
        />
        <S.ReportContent
          placeholder="신고 내용"
          maxLength={500}
        ></S.ReportContent>
        <S.ReportBtnWrap>
          <S.ReportBtn
            type="button"
            action={'cancel'}
            onClick={handleReportModalOpen}
          >
            취소
          </S.ReportBtn>
          <S.ReportBtn
            type="submit"
            action={'report'}
            onClick={handleReportSubmit}
          >
            신고
          </S.ReportBtn>
        </S.ReportBtnWrap>
      </S.ReportForm>
    </S.ReportModal>
  );
}

export default ReportModal;
