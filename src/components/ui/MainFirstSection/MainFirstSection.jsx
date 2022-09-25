import React from 'react';
import * as S from './styled';
import { Button, Input, Section } from '../../';
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

function MainFirstSection() {
  return (
    <Section backgroundColor={color.darkBlue}>
      <S.FirstSectionContainer>
        <S.FirstSectionContent>
          <S.FirstSectionTitle
            title={'당신의 일상을 공유하세요'}
          ></S.FirstSectionTitle>
          <S.MainSearchArea>
            <S.SearchInput
              type={'text'}
              width={'42rem'}
              height={'5rem'}
              fontSize={fs.xl}
            ></S.SearchInput>
            <Button width={'10rem'} height={'5rem'} fontSize={'2.5rem'}>
              검색
            </Button>
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
              width: '21.5rem',
              height: '5rem',
              margin: '3rem 0',
              borderTop: `0.1rem solid ${color.white}`,
              borderBottom: `0.1rem solid ${color.white}`,
              fontSize: '1.6rem',
              color: `${color.white}`,
              gap: '1rem',
            }}
          >
            <span>👑</span>
            <span>1</span>
            <img
              src="https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg"
              alt="img"
              style={{ width: '3rem', height: '3rem', borderRadius: '100%' }}
            />
            <span>강명모</span>
          </div>
        </S.FirstSectionContent>

        <S.SliderWrap>
          <div></div>
          <div></div>
          <div></div>
        </S.SliderWrap>
      </S.FirstSectionContainer>
    </Section>
  );
}

export default MainFirstSection;
