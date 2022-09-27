import styled from 'styled-components';
import { Input } from '../Input';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const Header = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 7rem;
  background-color: ${color.darkBlue};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${gap.l};
  height: 100%;
`;

export const HeaderUtilWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuBarBackGround = styled.div`
  visibility: ${(props) => (props.isMenuBarOpen ? 'visible' : 'hidden')};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  right: ${(props) => (props.isMenuBarOpen ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 400ms;

  ${media.mobile} {
    right: 0;
    top: ${(props) => (props.isMenuBarOpen ? '-2%' : '-110%')};
    width: 100%;
    heigth: 100%;
  }
`;

export const MenuBarList = styled.ul`
  visibility: ${({ isMenuBarOpen }) => (isMenuBarOpen ? 'visible' : 'hidden')};
  position: fixed;
  z-index: 1;
  top: -20px;
  right: ${({ isMenuBarOpen }) => (isMenuBarOpen ? '0' : '-100%')};
  display: flex;
  justify-content: felx-start;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  height: 100vh;
  margin-top: ${gap.l};
  padding: ${gap.xl} 0;
  background-color: ${color.white};
  border-radius: ${br.default};
  box-shadow: inset 0 0 2px 1px ${color.grey};
  font-size: ${fs.l};
  font-weight: 600;
  color: ${color.darkBlue};
  transition: 400ms;

  svg {
    align-self: end;
    margin-right: ${gap.xl};
    cursor: pointer;
  }

  ${media.mobile} {
    right: 0;
    top: ${({ isMenuBarOpen }) => (isMenuBarOpen ? '-2%' : '-110%')};
    width: 100%;
    height: 30rem;
    padding-top: 4rem;
  }
`;

export const MenuBarListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 1rem 0;
  padding: ${gap.s} ${gap.xl};
  border-radius: ${br.default};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${color.lightGrey};
    box-shadow: inset 0 0 2px 1px ${color.grey};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${color.darkBlue};
  }

  svg {
    font-size: 3rem;
  }

  span:nth-child(2) {
    margin-left: ${gap.l};
  }

  ${media.mobile} {
    width: 20%;
    margin: 0.5rem 0;
  }
`;

export const ReportModal = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
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

export const HeaderSearchModal = styled.div`
  visibility: ${({ isSearchModalOpen }) =>
    isSearchModalOpen ? 'visible' : 'hidden'};
  position: fixed;
  z-index: 2;
  top: ${({ isSearchModalOpen }) => (isSearchModalOpen ? '0;' : '-100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 30%;
  background-color: ${color.lightGrey};
  transition: 0.15s;

  svg {
    color: ${color.white};
  }
`;

export const SearchModalInput = styled(Input)`
  &:focus {
    outline: none;
  }
`;
