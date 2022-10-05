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
} from '../../../../style';

export const ReportModalBg = styled.div`
  visibility: ${({ isReportModalOpened }) =>
    isReportModalOpened ? 'visible' : 'hidden'};
  position: absolute;
  top: ${({ isReportModalOpened }) => (isReportModalOpened ? '0' : '-100%')};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: ${color.black};
  transition: 0.5s;
`;

export const ReportModalForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45rem;
`;

export const ReportModalCats = styled.select`
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

export const ReportModalTextArea = styled.textarea`
  width: 45rem;
  height: 50rem;
  margin: 3rem 0;
  padding: ${gap.s};
  border: 1px solid ${color.white};
  border-radius: ${br.default};
  background: transparent;
  color: ${color.white};
`;

export const ReportModalBtnWrap = styled.div``;
