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
  deleteCourse,
  getCategories,
  // Comment
  getSingleCourseView,
  getCourseReviews,
  getMyReviews,
  postCourseReview,
  updateCourseReview,
  // Popularity
  getCourseAverageRate,
  getCoursesSortedByAverageRate,
  getCourseLikeCount,
  handleLikeCourseReview,
  likedCourseReview,
  handleLikeCourse,
  checkLikedCourse,
  fetchCourseReviewLikeCount,
  handleFollow,
  fetchIsFollowed,
  // Board
  getReportCategories,
  postReport,
  updateReport,
} from './api';
