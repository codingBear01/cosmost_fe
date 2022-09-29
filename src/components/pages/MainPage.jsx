/* hooks */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { searchBarOpenAtom } from '../../store';
/* components */
import {
  Header,
  MainFirstSection,
  MainFourthSection,
  MainSecondSection,
  MainThirdSection,
  ToTopBtn,
  Footer,
} from '../';

function MainPage() {
  /* HeaderIcon 및 HeaderSearchBar 표시 여부 조작을 위한 serachBarOpen recoilState와 scrollY, pathName */
  const [isSearchBarOpen, setIsSearchBarOpen] =
    useRecoilState(searchBarOpenAtom);
  const [scrollY, setScrollY] = useState(0);
  const pathName = useLocation().pathname;

  /* scroll event가 일어날 때마다 scrollY값을 state scrollY에 set하는 함수들 */
  const handleScrollY = () => {
    // scrollY가 307보다 작다면 헤더 서치바 close
    if (window.scrollY < 307) {
      setIsSearchBarOpen(false);
    }
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleScrollY);
    };
    watch();
    return () => window.removeEventListener('scroll', handleScrollY);
  }, []);

  console.log('pathName', pathName);
  console.log('scrollY', scrollY);
  console.log('isSearchBarOpen', isSearchBarOpen);

  return (
    <>
      <Header pathName={pathName} scrollY={scrollY} />
      <MainFirstSection />
      <MainSecondSection />
      <MainThirdSection />
      <MainFourthSection />
      <ToTopBtn />
      <Footer />
    </>
  );
}

export default MainPage;
