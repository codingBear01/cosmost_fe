/* 여러 페이지에 중복해서 쓰이는 components */
export {
  Button,
  CourseUtillityModal,
  DeleteModal,
  Footer,
  Header,
  HistoriesForm,
  Icon,
  Input,
  NextBtn,
  OrderingButton,
  OrderingModal,
  PageContainer,
  ProfilePic,
  ReportForm,
  Section,
  SmallProfilePic,
  ToTopBtn,
  UtilDiv,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from './common/';

/* 특정 페이지에서만 쓰이는 요소들 */
export {
  CourseDetailForm,
  CourseRegistrationForm,
  DaumAddressApiForm,
  EmailValidationForm,
  FollowsForm,
  InputAddressForm,
  InputDetailAddressForm,
  LoginForm,
  MainSection,
  SearchedCoursesForm,
  SignUpForm,
  UserPageForm,
} from './ui/';

/* pages */
export {
  CourseDetail,
  CourseRegistration,
  EmailValidation,
  Follows,
  Histories,
  InputAddress,
  InputDetailAddress,
  Login,
  Main,
  SearchedCourses,
  SignUp,
  User,
} from './pages/';
