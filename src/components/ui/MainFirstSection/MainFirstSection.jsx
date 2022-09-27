import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { Button, Section, SmallProfilePic } from '../../';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';
import { USER_RANKING_LIST } from './../../../store/data/RankingData';

function MainFirstSection() {
  const [topPosition, setTopPosition] = useState(0);

  return (
    <Section height={'86.8rem'} backgroundColor={color.darkBlue}>
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
            <Link to="/course/result">
              <Button width={'10rem'} height={'5rem'} fontSize={'2.5rem'}>
                검색
              </Button>
            </Link>
          </S.MainSearchArea>

          <div>
            <S.MainHashTag>#해시태그해시태그</S.MainHashTag>
            <S.MainHashTag>#해시태그</S.MainHashTag>
            <S.MainHashTag>#해시태그</S.MainHashTag>
            <S.MainHashTag>#해시태그</S.MainHashTag>
            <S.MainHashTag>#해시태그</S.MainHashTag>
            <S.MainHashTag>#해시태그</S.MainHashTag>
            <S.MainHashTag>#해시태그</S.MainHashTag>
            <S.MainHashTag>#해시태그</S.MainHashTag>
            <S.MainHashTag>#해시태그</S.MainHashTag>
          </div>

          <S.MainRankingBox>
            {/* 일정 시간 지날 때마다 Y좌푯값 or top위치 변경하여 index 1씩 증가하다가 마지막에 다다르면 초기화 
            좌푯값: top: -55px
            */}
            {USER_RANKING_LIST &&
              USER_RANKING_LIST.map((ranker, i) => (
                <li
                  key={ranker.id}
                  style={{
                    top: 0 - topPosition,
                  }}
                >
                  {ranker.isTop && <span>👑</span>}
                  {!ranker.isTop && <span style={{ width: '1.8rem' }}></span>}
                  <span>{ranker.rank}</span>
                  <SmallProfilePic src={ranker.imgUrl} alt={ranker.nickname} />
                  <span>{ranker.nickname}</span>
                </li>
              ))}
          </S.MainRankingBox>
        </S.FirstSectionContent>

        <S.SliderWrap>
          <div></div>
        </S.SliderWrap>
      </S.FirstSectionContainer>
    </Section>
  );
}

export default MainFirstSection;
