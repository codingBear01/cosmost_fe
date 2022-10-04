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
    bg_color: `${color.darkBlue}`,
    color: `${color.white}`,
    hovered_col: `${color.lightBlue}`,
  },
  {
    id: 2,
    text: '',
    icon: <RiIcons.RiKakaoTalkFill />,
    bg_color: '#F7E111',
    hovered_col: '#c7b50e',
  },
  {
    id: 3,
    text: '',
    icon: <SiIcons.SiNaver />,
    bg_color: '#04CF5C',
    color: `${color.white}`,
    hovered_col: '#02b34e',
  },
  {
    id: 4,
    text: '',
    icon: <FcIcons.FcGoogle />,
    bg_color: '#F5F5F7',
    hovered_col: `${color.lightGrey}`,
  },
];
