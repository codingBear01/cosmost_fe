/* libraries */
import React from 'react';
import { useNavigate } from 'react-router-dom';
/* components */
import * as S from './styled';
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilDiv,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../style';
import { CATEGORIES } from '../../../store';

function CourseRegistrationForm() {
  const navigate = useNavigate();

  return (
    <UtilDiv width={'76.8rem'} padding={'7rem 0 0 0'}>
      <S.UploadCourseImgArea>
        {/* 코스 이미지 업로드 버튼 */}
        <S.UploadImgButtonWrap>
          <Button
            type="button"
            width={'9rem'}
            height={'9rem'}
            margin={''}
            fontSize={'3rem'}
            color={color.white}
            bgColor={color.darkBlue}
            hoveredBgColor={color.navy}
          >
            <AiIcons.AiOutlinePlus />
          </Button>
          <S.UploadImgInput type="file" />
        </S.UploadImgButtonWrap>
        {/* 업로드된 코스 이미지들 */}
        <S.UploadedCourseImgsWrap>
          <S.CoursePreviewImg />
          <S.CoursePreviewImg />
          <S.CoursePreviewImg />
          <S.CoursePreviewImg />
          <S.CoursePreviewImg />
        </S.UploadedCourseImgsWrap>
      </S.UploadCourseImgArea>
      {/* 코스 카테고리 선택 드랍다운 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>카테고리 선택</S.CourseDetailInfoTitle>
        <S.CourseCategoryWrap>
          <S.CourseCategorySelect>
            {CATEGORIES &&
              CATEGORIES[0].gu.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))}
          </S.CourseCategorySelect>
          <S.CourseCategorySelect>
            {CATEGORIES &&
              CATEGORIES[1].theme.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))}
          </S.CourseCategorySelect>
        </S.CourseCategoryWrap>
      </S.AddDetailCourseInfoArea>
      {/* 새로운 장소 추가 영역 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>새로운 장소 추가 0/5</S.CourseDetailInfoTitle>
        <S.AddDetailCourseInfoWrap>
          <S.AddLocationButton type="button">
            <BsIcons.BsMap />
            <S.CourseDetailInfoText>지도에서 장소 추가</S.CourseDetailInfoText>
          </S.AddLocationButton>
          <S.AddedLocationOrHashTagsWrap>
            <S.CourseDetailInfoText>1번 장소</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>2번 장소</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>3번 장소</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>4번 장소</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>5번 장소</S.CourseDetailInfoText>
          </S.AddedLocationOrHashTagsWrap>
        </S.AddDetailCourseInfoWrap>
      </S.AddDetailCourseInfoArea>
      {/* 해시태그 추가 영역 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>해시태그 추가 0/5</S.CourseDetailInfoTitle>
        <S.AddDetailCourseInfoWrap>
          <S.InputHashTagWrap>
            <Input
              type="text"
              name=""
              placeholder="해시태그"
              maxLength={20}
              height={'3rem'}
              margin={'0 2rem 0 0'}
              fontSize={fs.m}
            />
            <Button
              width={'3rem'}
              height={'3rem'}
              color={color.white}
              type="button"
            >
              <AiIcons.AiOutlinePlus />
            </Button>
          </S.InputHashTagWrap>
          <S.AddedLocationOrHashTagsWrap>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
          </S.AddedLocationOrHashTagsWrap>
        </S.AddDetailCourseInfoWrap>
      </S.AddDetailCourseInfoArea>
      {/* 코스 설명 영역 */}
      <S.CourseDescription
        placeholder="코스에 대해 설명해주세요."
        maxLength={1000}
      ></S.CourseDescription>
      {/* 코스 등록, 취소 버튼 */}
      <S.CourseRegistrationButtonWrap>
        <Button
          type="button"
          width={'12rem'}
          height={'5rem'}
          margin={'0 4rem 0 0'}
          fontSize={fs.m}
          color={color.black}
          bgColor={color.lightGrey}
          hoveredBgColor={color.grey}
          onClick={() => navigate(-1)}
        >
          취소
        </Button>
        <Button
          type="submit"
          width={'12rem'}
          height={'5rem'}
          margin={'0 0 0 4rem'}
          fontSize={fs.m}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          // 임시로 메인 페이지로 redirect되게 해놓음 추후 수정
          onClick={() => navigate('/')}
        >
          등록
        </Button>
      </S.CourseRegistrationButtonWrap>
    </UtilDiv>
  );
}

export default CourseRegistrationForm;
