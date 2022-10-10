/* 여러 페이지에 중복해서 쓰이는 components */
export {
  Button,
  FlexDiv,
  Footer,
  Header,
  Icon,
  Input,
  NextBtn,
  OrderingButton,
  OrderingModal,
  PageContainer,
  ProfilePic,
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
  HistoriesForm,
  InputAddressForm,
  InputDetailAddressForm,
  LoginForm,
  MainSection,
  ReportForm,
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
  SignUp,
  User,
} from './pages/';
