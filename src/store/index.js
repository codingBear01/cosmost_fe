/* main에 띄워주는 코스 카드들 */
export { MAIN_COURSES } from './MainCourses';

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
  isLoadingAtom,
} from './recoilStates';

/* functions */
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
  viewAllcourseAverageRatingSort,
  getSingleCourseView,
} from './functions';

/* temporary array */
export { FOLLOWS, RANKERS, REPORT_HISTORIES } from './temporaryArray/';
