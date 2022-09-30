import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import * as BiIcons from 'react-icons/bi';

export const MENUBAR_MENU_LIST = [
  {
    id: 1,
    icon: <AiIcons.AiOutlineLogin />,
    title: '로그인',
    isLogin: false,
    isHandleLog: true,
  },
  {
    id: 2,
    icon: <AiIcons.AiOutlineUserAdd />,
    title: '회원가입',
    isLogin: false,
    path: '/signup/agreement',
  },
  {
    id: 3,
    title: '닉네임',
    imgUrl:
      'https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg',
    isMyPage: true,
    isLogin: true,
    path: '/user',
  },
  {
    id: 4,
    icon: <AiIcons.AiOutlineLogout />,
    title: '로그아웃',
    isLogin: true,
    isHandleLog: true,
  },
  {
    id: 5,
    icon: <RiIcons.RiPoliceCarLine />,
    title: '신고하기',
    isLogin: true,
    isReport: true,
  },
];

export const CATEGORY_LIST = [
  {
    id: 1,
    icon: <FiIcons.FiMap />,
    categoryName: '지역별',
    subCategories: [],
  },
  {
    id: 2,
    icon: <BiIcons.BiBrush />,
    categoryName: '테마별',
    subCategories: [],
  },
];

const guArr = [
  '중구',
  '서구',
  '동구',
  '영도구',
  '부산진구',
  '동래구',
  '남구',
  '북구',
  '강서구',
  '해운대구',
  '사하구',
  '금정구',
  '연제구',
  '수영구',
  '사상구',
  '기장군',
];

const themeArr = [
  '평범한듯 특별한 날',
  '조용히 보내고 싶은 날',
  '가볍게 한잔 하고 싶은 날',
  '기억에 남기고 싶은 날',
  '나를 놓아버리고 싶은 날',
  '평범한듯 특별한 날',
  '조용히 보내고 싶은 날',
  '가볍게 한잔 하고 싶은 날',
  '기억에 남기고 싶은 날',
  '나를 놓아버리고 싶은 날',
];

for (let i in guArr) {
  CATEGORY_LIST[0].subCategories.push({
    id: +i + 1,
    title: guArr[i],
  });
}

for (let i in themeArr) {
  CATEGORY_LIST[1].subCategories.push({
    id: +i + 1,
    title: themeArr[i],
  });
}
