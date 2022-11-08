import { atom } from 'recoil';

export const isReportFormOpenedAtom = atom({
  key: 'isReportFormOpenedAtom',
  default: false,
});

export const isOrderingModalOpenedAtom = atom({
  key: 'isOrderingModalOpenedAtom',
  default: false,
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
