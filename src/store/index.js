/* page 이동 시 scrollY 최상단으로 만드는 custom component */
export { default as GoToTop } from './GoToTop';

/* functions */
export { sharingByKakao } from './sharing';

/* recoil states */
export {
  isReportFormOpenedAtom,
  isOrderingModalOpenedAtom,
  loginStateAtom,
  pathnameAtom,
  userAtom,
} from './recoilStates';

/* temporary array */
export {
  FOLLOWS,
  MAIN_COURSES,
  RANKERS,
  REPORT_HISTORIES,
} from './temporaryArray/';

/* other Function */
export {
  base64ImgSrcToImgBinaryData,
  createNaverMap,
  addNaverMapMarker,
  addNaverMapMarkerInfo,
  printFormData,
  getCoursePointAverage,
  getCourseAuthor,
  getCourseReviews,
  getCourseGoodCount,
  getCourseDetail,
} from './functions';
