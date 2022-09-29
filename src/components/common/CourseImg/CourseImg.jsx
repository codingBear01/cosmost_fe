/* components */
import { Link } from 'react-router-dom';
import * as S from './styled';

/* 메인 페이지, 검색 결과 페이지 등에 쓰이는 코스의 이미지 */
function CourseImg({ width, height }) {
  return (
    <Link to="/course/detail">
      <S.StyledCourseImg
        width={width}
        height={height}
        src="https://t1.daumcdn.net/blogfile/fs11/23_blog_2008_07_13_10_37_48795c5e1d9b4?x-content-disposition=inline&filename=haeyongj_20.jpg"
        alt="사진"
      ></S.StyledCourseImg>
    </Link>
  );
}

export default CourseImg;
