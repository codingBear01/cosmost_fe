import { atom } from 'recoil';

/* 신고하기 폼 Open 여부 state */
export const isReportFormOpenedAtom = atom({
  key: 'isReportFormOpenedAtom',
  default: false,
});

/* 정렬 기준 Modal Open 여부 state */
export const isOrderingModalOpenedAtom = atom({
  key: 'isOrderingModalOpenedAtom',
  default: false,
});
