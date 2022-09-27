import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { FaChevronUp } from 'react-icons/fa';

function FloationgIcons() {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShowTopBtn = () => {
      window.scrollY > 400 ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener('scroll', handleShowTopBtn);
    return () => {
      window.removeEventListener('scroll', handleShowTopBtn);
    };
  }, []);

  return (
    <>
      {showBtn && (
        <S.FloatingIcon onClick={scrollToTop}>
          <FaChevronUp />
        </S.FloatingIcon>
      )}
    </>
  );
}

export default FloationgIcons;
