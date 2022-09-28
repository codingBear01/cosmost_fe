import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { FaChevronUp } from 'react-icons/fa';

function ToTopBtn() {
  const [isShownToTopBtn, setIsShownToTopBtn] = useState(false);

  // ToTopBtn 클릭 시 scrollY 맨 위로 이동시키는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  // scrollY 값이 400보다 클 경우에만 ToTopBtn 표시
  useEffect(() => {
    const handleShowTopBtn = () => {
      window.scrollY > 400
        ? setIsShownToTopBtn(true)
        : setIsShownToTopBtn(false);
    };
    window.addEventListener('scroll', handleShowTopBtn);
    return () => {
      window.removeEventListener('scroll', handleShowTopBtn);
    };
  }, []);

  return (
    <>
      <S.FloatingIcon onClick={scrollToTop} isShownToTopBtn={isShownToTopBtn}>
        <FaChevronUp />
      </S.FloatingIcon>
    </>
  );
}

export default ToTopBtn;
