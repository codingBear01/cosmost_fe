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
  postCourseReview,
  updateCourseReview,
  deleteCourseReview,
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
  fetchMyFollowersCount,
  fetchMyFollowingsCount,
  // Board
  getReportCategories,
  postReport,
  updateReport,
  deleteMyReport,
  fetchAnswerAboutMyReport,
} from './api';
