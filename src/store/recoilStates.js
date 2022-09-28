import { atom } from 'recoil';

export const searchBarOpenAtom = atom({
  key: 'searchBarAtom',
  default: false,
});

export const scrollYAtom = atom({
  key: 'scrollYAtom',
  default: 0,
});
