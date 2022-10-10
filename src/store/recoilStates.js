import { atom } from 'recoil';

/* Login 상태 관련 임시 state */
export const isLoginAtom = atom({
  key: 'isLoginAtom',
  default: false,
});

/* ReportForm Open 여부 state */
export const isReportFormOpenedAtom = atom({
  key: 'isReportFormOpenedAtom',
  default: false,
});

/* OrderingModal Open 여부 state */
export const isOrderingModalOpenedAtom = atom({
  key: 'isOrderingModalOpenedAtom',
  default: false,
});
