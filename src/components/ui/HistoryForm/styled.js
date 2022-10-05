/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../style';

export const HistoryList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const HistoryListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${gap.l};
`;

export const HistoryDateWrap = styled.div`
  width: 100%;
  margin-bottom: ${gap.s};
  padding: 0.5rem ${gap.s};
  border: 2px solid ${color.white};
  border-radius: ${br.default};
  font-size: 16px;
  cursor: pointer;
`;

export const ReportHistoryCat = styled.span`
  align-self: start;
  margin-left: ${gap.l};
  font-size: 14px;
`;

export const HistoryTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${gap.s};
  padding: 0 ${gap.l};
  width: 100%;
`;

export const HistoryTitle = styled.span`
  font-size: 14px;
  color: ${color.white};
  cursor: pointer;

  span {
    &:hover {
      border-bottom: 1px solid ${color.white};
    }
  }
`;

export const HistoryContent = styled.p`
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
  cursor: pointer;
`;
