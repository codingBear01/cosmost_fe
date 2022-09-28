import React from 'react';
import styled from 'styled-components';
import { COLOR_LIST } from '../../../style';

// 세로 중앙 정렬이 지정된 DIV 컴포넌트.
const HeightCenterDiv = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: center;
  flex-direction: column;
  width: ${({ width }) => width || 'auto'};
  height: 100vh;
  margin: ${({ margin }) => margin || '0 0 0 0'};
  padding: 2.5rem;
  background-color: ${COLOR_LIST.darkBlue};
`;

export default HeightCenterDiv;
