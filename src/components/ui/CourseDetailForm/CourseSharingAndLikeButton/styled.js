/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../../style';

// 공유, 좋아요 버튼
export const ShareAndLikeButton = styled.button`
  margin-left: ${gap.l};
  font-size: ${fs.xl};
  color: ${color.white};
`;
