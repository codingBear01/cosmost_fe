export const HASH_TAG_LIST = [];

const arr = [
  '광안리 맛집',
  '인생샷 스팟',
  '소개팅 100% 성공 보장',
  '나른한 커피 한잔 하기 좋은 카페',
  '서비스 많이 주는',
  '기념일 보내기 좋은',
  '조용한 카페',
  '치팅데이',
  '전망 좋은',
  '산책 맛집',
];

for (let i = 0; i < arr.length; i++) {
  HASH_TAG_LIST.push({
    id: i + 1,
    text: arr[i],
  });
}
