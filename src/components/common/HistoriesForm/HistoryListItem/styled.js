import styled from 'styled-components';
import {
  COLOR_LIST as color,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BORDER_RADIUS_LIST as br,
} from '../../../../style';

export const ReportHistoryUtilButtonWrap = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: ${gap.l};
    font-size: ${fs.xl} !important;
    cursor: pointer;
  }
`;

export const StyledHistoryListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${gap.l};
`;

export const HistoryDateAndRateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${gap.s};
  padding: 0.5rem ${gap.s};
  border: 2px solid ${color.white};
  border-radius: ${br.default};
`;

export const HistoryDate = styled.span`
  font-size: 16px;
`;

export const ReportHistoryCategoryAndUtilButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${gap.l};
`;

export const ReportHistoryCategory = styled.span`
  align-self: start;
  font-size: 14px;
`;

export const WarningDeleteIconWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${color.red};
  cursor: pointer;

  svg {
    align-self: center;
  }
  span {
    margin-left: 0.2rem;
    font-size: ${fs.xs} !important;
  }
`;

export const HistoryTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${gap.s};
  padding: ${gap.l};
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
`;
