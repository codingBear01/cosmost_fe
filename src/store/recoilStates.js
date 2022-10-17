import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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

export const loginStateAtom = atom({
  key: 'loginStateAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
