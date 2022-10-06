/* libraries */
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
/* icons */
import * as BiIcons from 'react-icons/bi';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../style';

export const AddressApiWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55rem;
`;

export const GettingCurrentLocationButtonWrap = styled.div`
  display: flex;
  align-items: center;
  align-self: end;
  width: 20rem;

  svg {
    margin: auto 0;
  }
`;

export const AddressApiContent = styled(DaumPostcode)`
  height: 50rem !important;
`;

// export const LocationBaseImg = styled(BiCurrentLocation)`
//   width: 3rem;
//   height: 3rem;
//   margin-right: 1rem;
//   color: ${color.white};
// `;
