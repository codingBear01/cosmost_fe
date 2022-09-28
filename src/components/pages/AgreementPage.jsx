import React, { useState } from 'react';
import styled from 'styled-components';
import {
  COLOR_LIST,
  BORDER_RADIUS_LIST,
  GAP_LIST,
  FONT_SIZE_LIST,
} from '../../style/styles';
import { Button, PageRootDiv, PageTitle, HeightCenterDiv } from '../common';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { StyledButton } from '../common/Button/styled';
import { AgreementPageData } from '../../data';
import { Link } from 'react-router-dom';

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'normal'};
  align-items: center;
  margin: ${(props) => props.margin || '0 0 0 0'};
`;

const AgreementPageButton = styled(StyledButton)`
  background-color: ${(props) => props.backgroundColor || StyledButton.color};
`;

function AgreementPageItem({ title, content, enable, onClick }) {
  const AiOutlineCheckCircleStyle = ({ color }) => {
    return {
      color: color || 'white',
      width: '3rem',
      height: '3rem',
    };
  };
  const ItemTitle = styled.span`
    color: ${COLOR_LIST.white};
    font-size: ${FONT_SIZE_LIST.s};
    width: 47.5rem;
  `;

  const ItemTextarea = styled.textarea`
    width: 50rem;
    height: 10rem;
  `;

  return (
    <div>
      <FlexDiv>
        <AiOutlineCheckCircle
          style={AiOutlineCheckCircleStyle({
            color: enable && COLOR_LIST.lightGreen,
          })}
          onClick={onClick}
        />
        <ItemTitle>{title}</ItemTitle>
      </FlexDiv>
      <div>{content && <ItemTextarea>{content}</ItemTextarea>}</div>
    </div>
  );
}

function AgreementPage() {
  const [checkState, setCheckState] = useState({
    allCheck: false,
    useCheck: false,
    privacyCheck: false,
    locationCheck: false,
  });

  const onClickCheck = (e, State) => {
    console.log(State);
    setCheckState({ ...checkState, [State]: !checkState[State] });
  };

  return (
    <PageRootDiv>
      <HeightCenterDiv justifyContent={'space-around'}>
        <Link to="/">
          <PageTitle>cosMost</PageTitle>
        </Link>
        {AgreementPageData.map((item, index) => {
          return (
            <AgreementPageItem
              key={index}
              title={item.title}
              content={item.content}
              enable={checkState[item.state]}
              onClick={(e) => onClickCheck(e, item.state)}
            />
          );
        })}
        <FlexDiv margin={'0 0 2rem 0'} justifyContent={'space-between'}>
          <AgreementPageButton
            backgroundColor={COLOR_LIST.grey}
            width={'24rem'}
            height={'6rem'}
          >
            취소
          </AgreementPageButton>
          <AgreementPageButton width={'24rem'} height={'6rem'}>
            확인
          </AgreementPageButton>
        </FlexDiv>
      </HeightCenterDiv>
    </PageRootDiv>
  );
}

export default AgreementPage;
