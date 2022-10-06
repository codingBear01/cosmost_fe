import React from 'react';
import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';

const FlexDiv = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  display: ${({ display }) => display || 'flex'};
  justify-content: ${({ justify_content }) => justify_content || 'normal'};
  align-items: ${({ align_items }) => align_items || 'center'};
  margin: ${({ margin }) => margin || '0 0 0 0'};
  flex-wrap: ${({ flex_wrap }) => flex_wrap || 'nowrap'};
  font-size: ${({ font_size }) => font_size || '1.5rem'};
  font-weight: ${({ font_weight }) => font_weight || 'normal'};
`;

export default FlexDiv;
