/* libraries */
import styled from 'styled-components';
/* icons */
import * as AiIcons from 'react-icons/ai';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from '../../../style';

// 이미지 업로드 영역
export const UploadCourseImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 3rem;
`;

export const UploadImgButtonWrap = styled.div`
  align-self: start;
`;

export const UploadImgInput = styled.input`
  display: none;
`;

export const UploadedCourseImgsWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 3rem;
  gap: 1.5rem;
`;

export const CoursePreviewImg = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 9rem;
  height: 9rem;
  border-radius: ${br.default};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ backgroundImage }) => backgroundImage || 'none'};
  opacity: ${({ opacity }) => opacity || '1'};
`;

export const ItemRemoveButton = styled(AiIcons.AiFillCloseCircle)`
  position: absolute;
  top: ${({ top }) => top || '0'};
  right: ${({ right }) => right || '0'};
  width: 2rem;
  height: 2rem;
  color: ${color.lightBlue};
`;

export const FeaturedImageText = styled.div`
  width: 100%;
  border-radius: 0 0 ${br.default} ${br.default};
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
`;

// 카테고리 영역
export const CourseCategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width 100%;
`;

export const CourseCategorySelect = styled.select`
  margin-right: ${({ marginRight }) => marginRight || '15rem'};
  padding-bottom: 1rem;
  border: none;
  border-bottom: 1px solid ${color.white};
  outline: none;
  background: transparent;
  font-size: ${fs.m};
  font-weight: 600;
  color: ${color.white};
  cursor: pointer;

  option {
    font-size: ${fs.s};
    color: ${color.black};
  }
`;

// 새로운 장소 추가 영역
export const AddDetailCourseInfoArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 4rem;
`;

export const CourseDetailInfoTitle = styled.span`
  margin: 4rem 0;
  font-size: 3rem;
  font-weight: 600;
`;

export const AddDetailCourseInfoWrap = styled.div`
  width: 100%;
`;

export const AddLocationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 3rem;
  border-radius: 0.5rem;
  font-size: ${fs.xl};
  font-weight: 600;
  color: ${color.white};
  cursor: pointer;
`;

// 네이버 지도 영역
export const NaverMapOverlay = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: ${({ top }) => `${top}px`};
  z-index: 1;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: RGBA(0, 0, 0, 0.85);
`;

export const NaverMapForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60rem;
`;

export const NaverMapHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

export const NaverMapHeaderButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6rem;
`;

export const PlaceCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  padding-top: 2rem;
`;

// 해시태그 영역
export const InputHashTagWrap = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 3rem;

  svg {
    font-size: 3rem;
  }
`;

export const CourseDetailInfoText = styled.span`
  margin-left: ${gap.l};
  font-size: ${fs.m};
  cursor: pointer;
`;

export const AddedLocationOrHashTagsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 3rem;
`;

export const CourseInputWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const CourseDescription = styled.textarea`
  align-self: center;
  width: 60rem;
  height: 50rem;
  margin-top: 5rem;
  padding: 2rem;
  border: 1px solid ${color.white};
  border-radius: ${br.default};
  background: transparent;
  font-size: ${fs.m};
  color: ${color.white};
`;

export const CourseRegistrationButtonWrap = styled.div`
  margin-top: 5rem;
`;
