/* hooks */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInterval } from './../../hooks/';
/* components */
import * as S from './styled';
import { Button, Section, SmallProfilePic } from '../../';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from './../../../style/';
import { USER_RANKING_LIST } from '../../../data';
/* CONSTANTS */
const RANKER_LENGTH = USER_RANKING_LIST.length;

function MainFirstSection() {
  /* Ranking 기능 구현을 위한 ranker의 Top position 및 index */
  const [topPosition, setTopPosition] = useState(0);
  const [rankerIndex, setRankerIndex] = useState(1);

  // 2초마다 topPosition 및 rankerIndex값에 변화를 줘서 Ranking 보여주기 기능 구현하는 함수
  useInterval(() => {
    if (rankerIndex === RANKER_LENGTH) {
      setTopPosition(0);
      setRankerIndex(1);
    } else {
      setTopPosition((prev) => prev - 5.5);
      setRankerIndex((prev) => prev + 1);
    }
  }, 2000);

  return (
    <Section
      height={'86.8rem'}
      backgroundColor={color.darkBlue}
      paddingTop={'7rem'}
    >
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
            {USER_RANKING_LIST &&
              USER_RANKING_LIST.map((ranker, i) => (
                <li
                  key={ranker.id}
                  style={{
                    top: `${topPosition}rem`,
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
