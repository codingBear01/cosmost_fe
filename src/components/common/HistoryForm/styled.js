/* libraries */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../style';

export const ReportHistoryList = styled.ul`
  width: 100%;
`;

export const ReportHistoryListItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${gap.l};
  cursor: pointer;
`;

export const ReportHistoryDateWrap = styled.div`
  width: 100%;
  margin-bottom: ${gap.s};
  padding: 0.5rem ${gap.s};
  border: 2px solid ${color.white};
  border-radius: ${br.default};
  font-size: 16px;
`;

export const ReportHistoryTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${gap.s};
  padding: 0 ${gap.l};
  width: 100%;
`;

export const ReportHistoryTitle = styled.span`
  font-size: 14px;
  color: ${color.white};
`;

export const ReportHistoryContent = styled.p`
  width: 100%;
  height: 6rem;
  padding: 0 4rem;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
`;
