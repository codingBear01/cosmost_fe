import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  COLOR_LIST,
  BORDER_RADIUS_LIST,
  GAP_LIST,
  FONT_SIZE_LIST,
} from '../../style/';
import { FlexDiv, PageRootDiv, PageTitle, HeightCenterDiv } from '../common';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { StyledButton } from '../common/Button/styled';
import { AgreementPageData } from '../../data/';

const AgreementPageButton = styled(StyledButton)`
  margin: 0 1rem;
  background-color: ${(props) => props.backgroundColor || StyledButton.color};
`;

const ItemTitle = styled.span`
  color: ${COLOR_LIST.white};
  font-size: ${FONT_SIZE_LIST.s};
  width: 47.5rem;
`;

const ItemTextarea = styled.textarea`
  width: 50rem;
  height: 10rem;
`;

function AgreementPageItem({ title, content, enable, onClick }) {
  const AiOutlineCheckCircleStyle = ({ color }) => {
    return {
      color: color || 'white',
      width: '3rem',
      height: '3rem',
    };
  };
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
      <div>{content && <ItemTextarea defaultValue={content} />}</div>
    </div>
  );
}

function AgreementPage(props) {
  // Navigate 용 함수와 체크박스 State, 이벤트 핸들러 클릭 state 생성.
  const navigate = useNavigate();
  const [checkState, setCheckState] = useState({
    allCheck: false,
    useCheck: false,
    privacyCheck: false,
    locationCheck: false,
  });
  const [onClickCheckState, SetOnClickCheckState] = useState(false);

  /*comMost 이용약관, 개인정보수집, 위치기반 수집 동의가 전부 체크된 경우 모든 동의 자동 체크
  comMost 이용약관, 개인정보수집, 위치기반 수집 동의 중 하나라도 체크되지 않은 경우 모든 동의 자동 체크 해제*/
  useEffect(() => {
    const CheckState3 = Object.entries(checkState)
      .slice(1)
      .every((element) => element[1]);
    if (CheckState3) {
      setCheckState({ ...checkState, allCheck: true });
    } else {
      setCheckState({ ...checkState, allCheck: false });
    }
    return;
  }, [onClickCheckState]);

  /*각 체크박스 클릭시 체크박의 state를 관리해주는 Click 이벤트 핸들러
  모든 동의 체크를 하면 나머지 체크박스가 전부 체크되며 모든 동의 체크 해제를 하면 나머지 체크박스가 전부 체크해제된다.*/
  const onClickCheck = (e, state) => {
    if (state === 'allCheck') {
      if (checkState[state]) {
        setCheckState({
          allCheck: false,
          useCheck: false,
          privacyCheck: false,
          locationCheck: false,
        });
      } else {
        setCheckState({
          allCheck: true,
          useCheck: true,
          privacyCheck: true,
          locationCheck: true,
        });
      }
      SetOnClickCheckState(!onClickCheckState);
      return;
    }
    setCheckState({ ...checkState, [state]: !checkState[state] });
    SetOnClickCheckState(!onClickCheckState);
  };

  // 취소 버튼 클릭 이벤트 핸들러
  const onClickCancleButton = (e) => {
    navigate('/');
  };

  // 확인 버튼 클릭 이벤트 핸들러
  const onClickAgreeButton = (e) => {
    const agreementCheck = Object.values(checkState).every(
      (element) => element
    );
    if (agreementCheck) navigate('/signup');
    else alert('모든 동의를 체크해주세요.');
  };

  return (
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
      <FlexDiv margin={'0 0 2rem 0'} justifyContent={'center'}>
        <AgreementPageButton
          backgroundColor={COLOR_LIST.grey}
          width={'24rem'}
          height={'6rem'}
          onClick={onClickCancleButton}
        >
          취소
        </AgreementPageButton>
        <AgreementPageButton
          width={'24rem'}
          height={'6rem'}
          onClick={onClickAgreeButton}
        >
          확인
        </AgreementPageButton>
      </FlexDiv>
    </HeightCenterDiv>
  );
}

export default AgreementPage;
