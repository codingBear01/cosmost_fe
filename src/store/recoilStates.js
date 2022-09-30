import { atom } from 'recoil';

/* HeaderSearchBar Open 관련 Atoms */
export const searchBarOpenAtom = atom({
  key: 'searchBarAtom',
  default: false,
});
export const scrollYAtom = atom({
  key: 'scrollYAtom',
  default: 0,
});

/* MenuBarCategory Open 관련 Atoms */
export const categoryOpenAtom = atom({
  key: 'categoryOpenAtom',
  default: false,
});
export const guCategoryOpenAtom = atom({
  key: 'guCategoryOpenAtom',
  default: false,
});
export const themeCategoryOpenAtom = atom({
  key: 'themeCategoryOpenAtom',
  default: false,
});
