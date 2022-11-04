export {
  // Auth
  getCourseAuthor,
  updateUserAddress,
  updateUserPassword,
  checkIsDuplicatedId,
  checkIsDuplicatedNickname,
  signUpOrEditUser,
  withdrawUser,
  // Cosmost
  getCourseDetail,
  deleteCourseOrReview,
  getCategories,
  // Comment
  getSingleCourseView,
  getCourseReviews,
  getMyReviews,
  postCourseReview,
  editCourseReview,
  // Popularity
  getCourseAverageRate,
  getCoursesSortedByAverageRate,
  getCourseLikeCount,
  handleLikeCourseReview,
  likedCourseReview,
  handleLikeCourse,
  checkLikedCourse,
  // Board
  getReportCategories,
  getMyReports,
  postReport,
  updateReport,
} from './api';
