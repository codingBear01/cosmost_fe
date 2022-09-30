/* components */
import { Link } from "react-router-dom";
import * as S from "./styled";

/* 메인 페이지, 검색 결과 페이지 등에 쓰이는 코스의 이미지 */
function CourseImg({ src, alt, width, height }) {
  return (
    <Link to="/course/detail" style={{ display: "block", height: height }}>
      <S.StyledCourseImg
        width={width}
        height={height}
        src={src}
        alt={alt}
      ></S.StyledCourseImg>
    </Link>
  );
}

export default CourseImg;
