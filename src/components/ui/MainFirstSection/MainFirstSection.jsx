import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as S from './styled';
import { Button, Section } from '../../';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';

const RANKING_LIST = [];

for (let i = 1; i <= 10; i++) {
  RANKING_LIST.push({
    id: i,
    rank: i,
    imgUrl:
      'https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg',
    nickname: '강명모',
  });
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function MainFirstSection() {
  return (
    <Section backgroundColor={color.darkBlue}>
      <S.FirstSectionContainer>
        <S.FirstSectionContent>
          <S.FirstSectionTitle
            title={'당신의 일상을 공유하세요'}
          ></S.FirstSectionTitle>
          <S.MainSearchArea>
            <S.MainSearchBar></S.MainSearchBar>
            <Button
              width={'100px'}
              height={'50px'}
              btnTxt={'검색'}
              btnFs={'25px'}
            ></Button>
          </S.MainSearchArea>

          <div>
            <span style={{ color: `${color.white}`, fontSize: `${fs.xl}` }}>
              #해시태그
            </span>
            <span style={{ color: `${color.white}`, fontSize: `${fs.xl}` }}>
              #해시태그
            </span>
            <span style={{ color: `${color.white}`, fontSize: `${fs.xl}` }}>
              #해시태그
            </span>
            <span style={{ color: `${color.white}`, fontSize: `${fs.xl}` }}>
              #해시태그
            </span>
            <span style={{ color: `${color.white}`, fontSize: `${fs.xl}` }}>
              #해시태그
            </span>
            <span style={{ color: `${color.white}`, fontSize: `${fs.xl}` }}>
              #해시태그
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '215px',
              height: '50px',
              marginTop: '50px',
              borderTop: `1px solid ${color.white}`,
              borderBottom: `1px solid ${color.white}`,
              fontSize: '16px',
              color: `${color.white}`,
              gap: '10px',
            }}
          >
            <span>👑</span>
            <span>1</span>
            <img
              src="https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg"
              alt="img"
              style={{ width: '30px', height: '30px', borderRadius: '100%' }}
            />
            <span>강명모</span>
          </div>
        </S.FirstSectionContent>

        <S.SliderWrap>
          <div></div>
          <div></div>
          <div></div>
        </S.SliderWrap>

        <Carousel responsive={responsive}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Carousel>
      </S.FirstSectionContainer>
    </Section>
  );
}

export default MainFirstSection;
