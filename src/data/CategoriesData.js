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
    content: guArr[i],
  });
}

for (let i in themeArr) {
  CATEGORY_LIST[1].categories.push({
    id: +i + 1,
    content: themeArr[i],
  });
}
