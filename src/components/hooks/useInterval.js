import { useEffect, useRef } from 'react';

/* MainPage의 FirstSection에서 Ranking을 delay초마다 보여줄 때 사용하는 custom hooks */
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
