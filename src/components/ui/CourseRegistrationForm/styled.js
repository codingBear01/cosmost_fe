/* libraries */
import styled from "styled-components";
import { Link } from "react-router-dom";
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from "../../../style";

export const UploadCourseImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 3rem;
`;

export const UploadImgButtonWrap = styled.div``;

export const UploadImgInput = styled.input`
  display: none;
`;

export const UploadedCourseImgsWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-left: 3rem;
`;

export const CoursePreviewImg = styled.div`
  width: 9rem;
  height: 9rem;
  position: relative;
  border-radius: ${br.default};
  background-color: ${color.grey};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ backgroundImage }) => backgroundImage || "none"};
  opacity: ${({ opacity }) => opacity || "1"};
`;

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

export const CourseCategoryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width 100%;
`;

export const CourseCategorySelect = styled.select`
  margin-right: 15rem;
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

export const InputHashTagWrap = styled.div`
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
  font-size: ${fs.xl};
  cursor: pointer;
`;

export const AddedLocationOrHashTagsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
`;

export const CourseDescription = styled.textarea`
  align-self: center;
  width: 70rem;
  height: 50rem;
  margin-top: 7rem;
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
