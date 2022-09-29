import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const MENUBAR_MENU_LIST = [
  {
    id: 1,
    leftEl: <AiIcons.AiOutlineLogin />,
    title: '로그인',
    isLogin: false,
    isHandleLog: true,
  },
  {
    id: 2,
    leftEl: <AiIcons.AiOutlineUserAdd />,
    title: '회원가입',
    isLogin: false,
    path: '/signup/agreement',
  },
  {
    id: 3,
    title: '닉네임',
    isMyPage: true,
    isLogin: true,
    path: '/user',
  },
  {
    id: 4,
    leftEl: <AiIcons.AiOutlineLogout />,
    title: '로그아웃',
    isLogin: true,
    isHandleLog: true,
  },
  {
    id: 5,
    leftEl: <RiIcons.RiPoliceCarLine />,
    title: '신고하기',
    isLogin: true,
  },
  {
    id: 6,
    leftEl: <BiIcons.BiCategory />,
    title: '카테고리',
    subNav: [],
  },
];

export const CATEGORY_LIST = [
  {
    id: 1,
    categoryName: '지역별',
    categories: [],
  },
  {
    id: 2,
    categoryName: '테마별',
    categories: [],
  },
];

for (let i = 0; i < MENUBAR_MENU_LIST.length; i++) {
  if (MENUBAR_MENU_LIST[i].title === '카테고리') {
    for (let j = 0; j < CATEGORY_LIST.length; j++) {
      MENUBAR_MENU_LIST[i].subNav.push(CATEGORY_LIST[j]);
    }
  }
}

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
  '커플',
  '퇴근 후 가볍게 한잔',
  '동네 산책',
  '숨은 맛집',
  '기념일',
  '소개팅',
  '데이트',
  '특별한 날',
  '한가로운 날',
  '인생샷',
];

for (let i in guArr) {
  CATEGORY_LIST[0].categories.push({
    id: +i + 1,
    title: guArr[i],
  });
}

for (let i in themeArr) {
  CATEGORY_LIST[1].categories.push({
    id: +i + 1,
    title: themeArr[i],
  });
}
