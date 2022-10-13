/* hooks */
import React, { useState, useEffect } from 'react';
/* components */
import * as S from './styled';
/* react-icons */
import { FaChevronUp } from 'react-icons/fa';

function ToTopBtn() {
  const [isShownToTopBtn, setIsShownToTopBtn] = useState(false);

  /* ToTopBtn 클릭 시 scrollY 맨 위로 이동시키는 함수 */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  /* scrollY 값이 400보다 클 경우에만 ToTopBtn 표시 */
  useEffect(() => {
    const handleShowToTopBtn = () => {
      window.scrollY > 400
        ? setIsShownToTopBtn(true)
        : setIsShownToTopBtn(false);
    };
    window.addEventListener('scroll', handleShowToTopBtn);
    return () => {
      window.removeEventListener('scroll', handleShowToTopBtn);
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
