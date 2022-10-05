/* icons */
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as FcIcons from 'react-icons/fc';
/* static data */
import { COLOR_LIST as color } from '../style';

export const LOGIN_BTN_LIST = [
  {
    id: 1,
    text: '이메일로 회원가입',
    icon: <AiIcons.AiOutlineMail />,
    bg_col: `${color.darkBlue}`,
    color: `${color.white}`,
    hov_bg_col: `${color.navy}`,
  },
  {
    id: 2,
    text: '',
    icon: <RiIcons.RiKakaoTalkFill />,
    bg_col: '#F7E111',
    hov_bg_col: '#c7b50e',
  },
  {
    id: 3,
    text: '',
    icon: <SiIcons.SiNaver />,
    bg_col: '#04CF5C',
    color: `${color.white}`,
    hov_bg_col: '#02b34e',
  },
  {
    id: 4,
    text: '',
    icon: <FcIcons.FcGoogle />,
    bg_col: '#F5F5F7',
    hov_bg_col: `${color.lightGrey}`,
  },
];
