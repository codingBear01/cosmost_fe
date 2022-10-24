/* libraries */
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

export const AddressApiWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const GettingCurrentLocationButtonWrap = styled.div`
  display: flex;
  align-items: center;
  align-self: end;

  svg {
    margin: auto 0;
  }
`;

export const AddressApiContent = styled(DaumPostcode)`
  height: 50rem !important;
`;
