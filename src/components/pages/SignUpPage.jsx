import React, { useState, useRef } from 'react';
import DaumPostcode from 'react-daum-postcode';

import styled from 'styled-components';
import { BsFillCircleFill, BsCaretDownSquareFill } from 'react-icons/bs';
import { AiFillCloseSquare } from 'react-icons/ai';
import {
  COLOR_LIST,
  BORDER_RADIUS_LIST,
  GAP_LIST,
  FONT_SIZE_LIST,
} from '../../style/styles';
import { Link } from 'react-router-dom';
import {
  FlexDiv,
  Input,
  PageRootDiv,
  HeightCenterDiv,
  PageTitle,
} from '../common';
import { Button } from '../';

const profileImageDefaultPath = '/assets/images/ProfileDefaultImage.png';
const SignUpInput = styled(Input)`
  background-color: ${COLOR_LIST.white};
  border: 1px solid ${COLOR_LIST.grey};
  color : ${COLOR_LIST.black};
  &::placeholder {
    font-size : 1rem;
    color: ${COLOR_LIST.grey}};
  }
`;

const Select = styled.select`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  appearance: none ;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  font-size : 1rem;
  color: ${COLOR_LIST.grey}};
  text-indent : 1rem;
`;

const Selectimg = styled(BsCaretDownSquareFill)`
  width: 2rem;
  height: 2rem;
  color: #666ad1;
  background-color: white;
  border-radius: 0.4rem;
  position: absolute;
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
`;

const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  margin-right: 2rem;
  border-radius: ${BORDER_RADIUS_LIST.circle};
`;

const SingUpForm = styled.form`
  & > * {
    margin-bottom: 2rem;
  }
`;

const AddressApi = styled(DaumPostcode)`
  width: 50% !important;
`;

const AddressApiClose = styled(AiFillCloseSquare)`
  width: 5rem;
  height: 5rem;
  float: right;
  color: ${COLOR_LIST.white};
  cursor: pointer;
`;

// onComplete={() => console.log("A")} // 값을 선택할 경우 실행되는 이벤트
// autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
// defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어

function SignUpPage() {
  const profileInputRef = useRef();
  const [addressApiEnable, setAddressApiEnable] = useState(false);
  const [inputState, setInputState] = useState({
    nickname: '',
    id: '',
    profileImage: profileImageDefaultPath,
    password: '',
    passwordConfirm: '',
    name: '',
    year: '',
    month: '',
    day: '',
    address: '',
    addressDetail: '',
    maritalStatus: '',
    email: '',
    certificationNumber: '',
  });

  /*사용자가 input에 텍스트를 입력할 때 호출할 핸들러
    사용자가 입력한 값들을 state로 넘겨준다.*/
  const onChangeInput = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  /*사용자가 프로파일 이미지 등록 버튼을 클릭한 경우 호출할 핸들러.
    input[type=file]에 클릭 이벤트를 발생시킨다.*/
  const onClickProfileButton = (e) => {
    e.preventDefault();
    profileInputRef.current.click();
  };

  /*사용자가 모달창에서 프로파일 이미지를 선택 후 확인을 눌렀을 시 호출할 핸들러.
    사용자가 등록한 이미지 경로를 URL로 변환한 후 State로 넘겨준다.*/
  const onChangeProfileImage = (e) => {
    const fileReader = new FileReader();
    const selectImageFile = e.currentTarget.files.item(0);
    fileReader.onload = (e) => {
      setInputState({ ...inputState, profileImage: fileReader.result });
    };
    fileReader.readAsDataURL(selectImageFile);
  };

  /*주소 검색 버튼을 클릭한 경우 호출할 핸들러 
    모달창 state를 전달한다.*/
  const onClickAddressButton = (e) => {
    e.preventDefault();
    setAddressApiEnable(!addressApiEnable);
  };

  /*API 모달창에서 닫기를 클릭한 경우 호출할 핸들러 
    모달창 state를 전달한다.*/
  const onClickModalClose = (e) => {
    setAddressApiEnable(!addressApiEnable);
  };

  /*API 모달창에서 주소를 클릭한 경우 호출할 핸들러 
    주소 정보 및 모달창 state를 전달한다.*/
  const onCompleteAddressModal = (data, e) => {
    console.log(data);
    setInputState({ ...inputState, address: data.address });
    setAddressApiEnable(!addressApiEnable);
  };

  return (
    <HeightCenterDiv height={'auto'}>
      <HeightCenterDiv width={'37.7rem'} height={'auto'}>
        <PageTitle>CosMost</PageTitle>
        <SingUpForm>
          <FlexDiv justifyContent={'space-between'}>
            <div>
              <ProfileImage src={inputState.profileImage} />
            </div>
            <div>
              <FlexDiv justifyContent={'space-between'} margin={'0 0 2rem 0'}>
                <SignUpInput
                  onChange={onChangeInput}
                  name="nickname"
                  value={inputState.nickname}
                  placeholder="닉네임"
                  width={'10rem'}
                  height={'4rem'}
                ></SignUpInput>
                <Button width={'13rem'} height={'4rem'} fontSize={'1.7rem'}>
                  중복확인
                </Button>
              </FlexDiv>
              <div>
                <SignUpInput
                  ref={profileInputRef}
                  onChange={onChangeProfileImage}
                  type="file"
                  style={{ display: 'none' }}
                />
                <Button
                  width={'25rem'}
                  height={'4rem'}
                  fontSize={'1.7rem'}
                  onClick={onClickProfileButton}
                >
                  프로필 이미지 업로드
                </Button>
              </div>
            </div>
          </FlexDiv>
          <FlexDiv justifyContent={'space-between'}>
            <SignUpInput
              onChange={onChangeInput}
              name="id"
              value={inputState.id}
              placeholder="아이디"
              width={'21rem'}
              height={'4rem'}
            ></SignUpInput>
            <Button width={'13rem'} height={'4rem'} fontSize={'1.7rem'}>
              중복확인
            </Button>
          </FlexDiv>
          <div>
            <SignUpInput
              onChange={onChangeInput}
              name="password"
              value={inputState.password}
              placeholder="비밀번호"
              width={'35rem'}
              height={'4rem'}
            ></SignUpInput>
          </div>
          <div>
            <SignUpInput
              onChange={onChangeInput}
              name="passwordConfirm"
              value={inputState.passwordConfirm}
              placeholder="비밀번호 재확인"
              width={'35rem'}
              height={'4rem'}
            ></SignUpInput>
          </div>
          <div>
            <SignUpInput
              onChange={onChangeInput}
              name="name"
              value={inputState.name}
              placeholder="이름"
              width={'35rem'}
              height={'4rem'}
            ></SignUpInput>
          </div>
          <FlexDiv justifyContent={'space-between'}>
            <SignUpInput
              onChange={onChangeInput}
              name="year"
              value={inputState.year}
              placeholder="년"
              width={'10rem'}
              height={'4rem'}
            ></SignUpInput>
            <label style={{ position: 'relative' }}>
              <Select
                name="month"
                value={inputState.month}
                width="10rem"
                height="4.3rem"
                required
                onChange={onChangeInput}
              >
                <option value="">월</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </Select>
              <Selectimg top="1.1rem" left="7.2rem" />
            </label>

            <SignUpInput
              onChange={onChangeInput}
              name="day"
              value={inputState.day}
              placeholder="일"
              width={'10rem'}
              height={'4rem'}
            ></SignUpInput>
          </FlexDiv>
          <FlexDiv justifyContent={'space-between'}>
            <SignUpInput
              disabled
              name="address"
              value={inputState.address}
              placeholder="주소"
              width={'21rem'}
              height={'4rem'}
            />
            <Button
              width={'13rem'}
              height={'4rem'}
              fontSize={'1.7rem'}
              onClick={onClickAddressButton}
            >
              검색
            </Button>
          </FlexDiv>
          {inputState.address && (
            <SignUpInput
              onChange={onChangeInput}
              name="addressDetail"
              value={inputState.addressDetail}
              placeholder="상세 주소"
              width={'35rem'}
              height={'4rem'}
            />
          )}
          <label style={{ display: 'block', position: 'relative' }}>
            <Select
              name="maritalStatus"
              value={inputState.maritalStatus}
              width={'36rem'}
              height={'4rem'}
              required
              onChange={onChangeInput}
            >
              <option value="">결혼여부</option>
              <option>미혼</option>
              <option>기혼</option>
            </Select>
            <Selectimg top="1.1rem" left="32rem" />
          </label>

          <FlexDiv justifyContent={'space-between'}>
            <SignUpInput
              onChange={onChangeInput}
              name="email"
              value={inputState.email}
              placeholder="이메일"
              width={'21rem'}
              height={'4rem'}
            ></SignUpInput>
            <Button width={'13rem'} height={'4rem'} fontSize={'1.7rem'}>
              인증번호 받기
            </Button>
          </FlexDiv>
          <div>
            <SignUpInput
              onChange={onChangeInput}
              name="certificationNumber"
              value={inputState.certificationNumber}
              placeholder="인증번호 입력 "
              width={'35rem'}
              height={'4rem'}
            ></SignUpInput>
          </div>
          <div>
            <Button width={'36rem'} height={'4rem'} fontSize={'1.7rem'}>
              가입하기
            </Button>
          </div>
        </SingUpForm>
      </HeightCenterDiv>
      {addressApiEnable && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            position: 'absolute',
            backgroundColor: 'RGBA(0,0,0,0.7)',
          }}
        >
          <div style={{ width: '50%' }}>
            <AddressApiClose onClick={onClickModalClose} />
          </div>
          <AddressApi onComplete={onCompleteAddressModal} />
        </div>
      )}
    </HeightCenterDiv>
  );
}

export default SignUpPage;
