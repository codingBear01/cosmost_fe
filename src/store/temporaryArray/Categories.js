export const CATEGORIES = [
  {
    id: 1,
    gu: [],
  },
  {
    id: 2,
    theme: [],
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
  '해운대구',
  '사하구',
  '금정구',
  '강서구',
  '연제구',
  '수영구',
  '사상구',
  '기장군',
];

for (let i in guArr) {
  CATEGORIES[0].gu.push({
    id: i + 1,
    name: guArr[i],
    value: guArr[i],
  });
}

const themeArr = [
  '조용히 보내고 싶은 날',
  '가볍게 한잔 하고 싶은 날',
  '나를 놓아버리고 싶은 날',
  '인생샷을 남기고 싶은 날',
  '특별히 기념하고 싶은 날',
];

for (let i in themeArr) {
  CATEGORIES[1].theme.push({
    id: i + 1,
    name: themeArr[i],
    value: themeArr[i],
  });
}
