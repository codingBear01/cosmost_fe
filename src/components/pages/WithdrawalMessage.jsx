/* libraries */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WithdrawalMessage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      <h1>그 동안 cosMost를 이용해주셔서 감사합니다. 다음에 또 만나요.</h1>
    </div>
  );
}

export default WithdrawalMessage;
