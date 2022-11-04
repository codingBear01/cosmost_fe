/* libraries */
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom } from '../../../store';
/* components */
import * as S from './styled';
import { Button, Icon, Input, UtilForm, UtilInputWrap } from '../..';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as FcIcons from 'react-icons/fc';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import { GiToken } from 'react-icons/gi';

function LoadingForm() {
  return <div>로딩 중ㅋ</div>;
}

export default LoadingForm;
