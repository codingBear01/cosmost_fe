/* libraries */
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* components */
import {
  Button,
  Input,
  NextBtn,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* APIs */
import { updateUserAddress } from '../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function InputDetailAddressForm({ state }) {
  /* Path */
  const token = localStorage.getItem('token');
  const path = useLocation().pathname;
  const isEditAddressPage = path.includes('edit');
  const isNaverAddressPage = path.includes('naver');
  const navigate = useNavigate();

  const [detailAddress, setDetailAddress] = useState('');

  /* Handlers */
  /* 상세주소 입력시 호출될 핸들러. state를 전달한다.*/
  const onChangeDetailAddress = (e) => {
    setDetailAddress(e.target.value);
  };

  /* 다음 버튼 클릭시 호출할 핸들러. 상세주소 유효성 검사 후 다음 창으로 넘어간다.*/
  const onClickCheckInput = (e) => {
    if (!detailAddress) {
      e.preventDefault();
      toast.error('상세주소를 입력해주세요.');
    }
  };

  return (
    <UtilForm>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
        limit={1}
      />
      <UtilTitle>상세 주소를 입력해주세요.</UtilTitle>
      <UtilInputWrap>
        <Input
          type="text"
          value={state.address}
          disabled
          width={'340px'}
          height={'40px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={detailAddress}
          placeholder="상세 주소"
          width={'340px'}
          height={'40px'}
          onChange={onChangeDetailAddress}
        />
      </UtilInputWrap>
      {/* 수정 버튼 */}
      {isEditAddressPage ? (
        <Button
          type="submit"
          width={'100%'}
          height={'40px'}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={(e) => {
            updateUserAddress(e, token, state, navigate, toast, detailAddress);
          }}
        >
          수정
        </Button>
      ) : !isEditAddressPage && !isNaverAddressPage ? (
        <NextBtn
          to={'/sign-up'}
          state={{ ...state, detailAddress }}
          onClick={onClickCheckInput}
        />
      ) : (
        <></>
      )}
    </UtilForm>
  );
}

export default InputDetailAddressForm;
