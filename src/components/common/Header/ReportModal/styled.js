import styled from 'styled-components';
import { Input } from '../../Input';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../../style/';

export const ReportModal = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  display: ${({ isReportModalOpen }) => (isReportModalOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${color.white};
`;

export const ReportForm = styled.form`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 60rem;
  height: 80rem;
  padding: ${gap.xl};
  border-radius: ${br.default};
  background-color: ${color.white};

  ${media.mobile} {
    position: relative;
    top: -15%;
  }
`;

export const ReportFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  svg {
    align-self: flex-start;
    margin-right: ${gap.l};
    font-size: ${fs.xl};
    cursor: pointer;
  }
`;

export const ReportCategories = styled.select`
  align-self: start;
  margin-left: ${gap.l};
  padding: ${gap.s};
  border: none;
  border-bottom: 1px solid ${color.darkBlue};
  background-color: ${color.white};
  font-size: ${fs.s};
  font-weight: 600;

  &:focus {
    outline: none;
  }
`;

export const ReportTitle = styled.span`
  margin-left: ${gap.l};
  color: ${color.black};
  font-size: 3rem;
  font-weight: 600;
`;

export const ReportTitleInput = styled(Input)`
  border-radius: 0;
  border-bottom: 1px solid ${color.darkBlue};

  &:focus {
    outline: none;
  }
`;

export const ReportContent = styled.textarea`
  width: 48rem;
  height: 40rem;
  padding: ${gap.m};
  border: 1px solid ${color.darkBlue};
  border-radius: ${br.default};
  font-size: ${fs.m};
`;

export const ReportBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25rem;
`;

export const ReportBtn = styled.button`
  width: 9rem;
  height: 4rem;
  background-color: ${({ action }) =>
    action === 'cancel' ? color.lightGrey : color.lightBlue};
  border-radius: ${br.default};
  font-size: ${fs.m};
  font-weight: 600;
  color: ${({ action }) => (action === 'cancel' ? color.black : color.white)};
  transition: all 0.15s ease-in;

  &:hover {
    background-color: ${({ action }) =>
      action === 'cancel' ? color.grey : color.blue};
  }
`;
