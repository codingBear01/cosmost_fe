/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../style';

export const ReportFormBg = styled.div`
  visibility: ${({ isReportFormOpened }) =>
    isReportFormOpened ? 'visible' : 'hidden'};
  position: absolute;
  top: ${({ isReportFormOpened }) => (isReportFormOpened ? '0' : '-100%')};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${color.black};
  transition: 0.5s;
`;

export const ReportForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45rem;
`;

export const ReportHistoryCat = styled.span`
  align-self: start;
  margin-bottom: 2rem;
  font-size: 18px;
`;

export const ReportFormTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  svg {
    margin: 5px 10px 50px;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const ReportFormTitle = styled.span`
  width: 45rem;
  height: 4rem;
  padding-left: 1rem;
  border-bottom: 1px solid ${color.white};
  font-size: ${fs.s};
  color: ${color.white};
`;

export const ReportFormCats = styled.select`
  align-self: start;
  margin: 2rem 0;
  border: none;
  border-bottom: 1px solid ${color.white};
  outline: none;
  background: transparent;
  color: ${color.white};

  option {
    color: ${color.black};
  }
`;

export const ReportFormTextArea = styled.textarea`
  width: 45rem;
  height: 35rem;
  margin: 3rem 0;
  padding: ${gap.s};
  border: 1px solid ${color.white};
  border-radius: ${br.default};
  background: transparent;
  color: ${color.white};
`;

export const ReportFormBtnWrap = styled.div``;
