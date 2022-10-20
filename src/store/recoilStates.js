import { useRef } from 'react';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const isReportFormOpenedAtom = atom({
  key: 'isReportFormOpenedAtom',
  default: false,
});

export const isOrderingModalOpenedAtom = atom({
  key: 'isOrderingModalOpenedAtom',
  default: false,
});

export const loginStateAtom = atom({
  key: 'loginStateAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
