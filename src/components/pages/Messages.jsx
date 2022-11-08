/* libraries */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/* components */
import styled from 'styled-components';
/* CONSTANTS */
const MESSAGES = {
  withdrawal: `그 동안 cosMost를 이용해주셔서 감사합니다.다음에 또 만나요.`,
  error: '오류가 발생했습니다.',
  notFound: '페이지를 찾을 수 없습니다.',
};

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: white;
`;

const StyledButton = styled.button`
  margin-top: 5rem;
  color: white;
  font-size: 3rem;
  font-weight: 600;

  &:hover {
    border-bottom: 1px solid white;
  }
`;

const StyledText = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
`;

function Messages({ type }) {
  const navigate = useNavigate();
  const [leftSecond, setLeftSecond] = useState(3);

  useEffect(() => {
    if (type === 'withdrawal') {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
      const decreaseSecond = setInterval(() => {
        setLeftSecond((prev) => prev - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
        clearTimeout(decreaseSecond);
      };
    }
  }, []);

  return (
    <StyledDiv>
      {type === 'withdrawal' && (
        <>
          <StyledText fontSize={'5rem'}>그 동안 cosMost를</StyledText>
          <StyledText fontSize={'5rem'}>이용해주셔서 감사합니다.</StyledText>
          <StyledText fontSize={'5rem'}>다음에 또 만나요.</StyledText>
          <StyledText fontSize={'2rem'} style={{ marginTop: '5rem' }}>
            {leftSecond}초 뒤 메인페이지로 이동
          </StyledText>
        </>
      )}
      {type !== 'withdrawal' && (
        <>
          <StyledText fontSize={'5rem'}>{MESSAGES[type]}</StyledText>
          <StyledButton onClick={() => navigate('/')}>메인으로</StyledButton>
        </>
      )}
    </StyledDiv>
  );
}

export default Messages;
