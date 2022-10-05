import React from 'react';
/* components */
import * as S from './styled';
import {
  Button,
  Input,
  ProfilePic,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../style';

function ReportHistoryForm() {
  return (
    <UtilForm pd={'10rem 0'}>
      <UtilTitle>신고내역</UtilTitle>
    </UtilForm>
  );
}

export default ReportHistoryForm;
