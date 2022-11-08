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

export const pathnameAtom = atom({
  key: 'pathnameAtom',
  default: window.location.pathname,
});

export const userAtom = atom({
  key: 'userAtom',
  default: null,
});

export const isLoadingAtom = atom({
  key: 'isLoadingAtom',
  default: true,
});

export const queryStringsStateAtom = atom({
  key: 'queryStringsStateAtom',
  default: true,
});

export const searchingTypeAtom = atom({
  key: 'searchingTypeAtom',
  default: 'search',
});
