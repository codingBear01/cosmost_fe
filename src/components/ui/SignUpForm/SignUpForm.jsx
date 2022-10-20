/* libraries */
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

/* components */
import * as S from './styled';
import { Button, Input, UtilForm, UtilInputWrap, UtilTitle } from '../..';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../style';

const PROFILE_PIC_DEFAULT_URL = '/assets/images/ProfileDefaultImage.png';

const RegExpId = /^[A-Za-z][A-Za-z0-9]{2,15}$/;
const RegExpNickName = /^[a-z0-9가-힣]{2,16}$/;
const RegExpPassword = /[a-zA-Z0-9!@#$%^&*()._-]{8,16}/;

function SignUpForm({ state }) {
  /* User가 입력한 정보를 나타내는 state */
  const [userInformation, setUserInformation] = useState({
    id: '',
    nickname: '',
    ...state,
    password: '',
    passwordConfirm: '',
    age: 'default',
    marriage: 'default',
    profilePictureUrl: PROFILE_PIC_DEFAULT_URL,
  });

  /* User가 입력한 정보의 유효성 여부를 나타내는 state */
  const [inputError, setInputError] = useState({
    idError: true,
    nicknameError: true,
    passwordError: true,
    passwordConfirmError: true,
    ageError: true,
    marriageError: true,
    profilePictureUrlError: true,
  });

  /* User가 입력한 정보 중 버이 있는 값이 있는지 나타내는 state */
  const [emptyInputError, setEmptyInputError] = useState({
    idEmpty: true,
    nicknameEmpty: true,
    passwordEmpty: true,
    passwordConfirmEmpty: true,
    ageEmpty: true,
    marriageEmpty: true,
    profilePictureUrlEmpty: true,
  });

  /* 프로필 이미지 관련 state */
  const [uploadedProfilePicture, setUploadedProfilePicture] = useState(null);
  const [isProfilePictureUploaded, setIsProfilePictureUploaded] =
    useState(false);

  /* 프로필 이미지 업로드에 쓰이는 useRef */
  const profileInputRef = useRef();

  const navigate = useNavigate();

  /* Handlers */
  /* 패스워드 일치 여부를 확인하는 함수 */
  useEffect(() => {
    if (userInformation.password !== userInformation.passwordConfirm) {
      setInputError({ ...inputError, passwordConfirmError: true });
    } else {
      setInputError({ ...inputError, passwordConfirmError: false });
    }
  }, [userInformation.password, inputError, userInformation.passwordConfirm]);

  /*사용자가 프로파일 이미지 등록 버튼을 클릭한 경우 호출할 핸들러. input[type=file]에 클릭 이벤트를 발생시킨다.*/
  const onClickUploadProilePic = (e) => {
    e.preventDefault();
    profileInputRef.current.click();
  };

  /* 사용자가 데이터를 입력할 때 호출할 핸들러. 입력값이 조건문을 통과하면 state에 저장한다. */
  const onChangeUserInformation = (e) => {
    if (e.target.name === 'id') {
      if (e.target.value === '') {
        setEmptyInputError({ ...emptyInputError, idEmpty: true });
      } else setEmptyInputError({ ...emptyInputError, idEmpty: false });

      if (RegExpId.test(e.target.value) === false) {
        setInputError({ ...inputError, idError: true });
      } else setInputError({ ...inputError, idError: false });
    } else if (e.target.name === 'nickname') {
      if (e.target.value === '') {
        setEmptyInputError({ ...emptyInputError, nicknameEmpty: true });
      } else setEmptyInputError({ ...emptyInputError, nicknameEmpty: false });

      if (RegExpNickName.test(e.target.value) === false) {
        setInputError({ ...inputError, nicknameError: true });
      } else setInputError({ ...inputError, nicknameError: false });
    } else if (e.target.name === 'password') {
      if (e.target.value === '') {
        setEmptyInputError({ ...emptyInputError, passwordEmpty: true });
      } else setEmptyInputError({ ...emptyInputError, passwordEmpty: false });

      if (RegExpPassword.test(e.target.value) === false) {
        setInputError({ ...inputError, passwordError: true });
      } else setInputError({ ...inputError, passwordError: false });
    } else if (e.target.name === 'passwordConfirm') {
      if (e.target.value === '') {
        setEmptyInputError({ ...emptyInputError, passwordConfirmEmpty: true });
      } else
        setEmptyInputError({ ...emptyInputError, passwordConfirmEmpty: false });

      if (userInformation.password !== e.target.value) {
        setInputError({ ...inputError, passwordConfirmError: true });
      } else setInputError({ ...inputError, passwordConfirmError: false });
    } else if (e.target.name === 'age') {
      if (e.target.value === '') {
        setEmptyInputError({ ...emptyInputError, ageEmpty: true });
      } else setEmptyInputError({ ...emptyInputError, ageEmpty: false });

      if (e.target.value === 'default') {
        setInputError({ ...inputError, ageError: true });
      } else setInputError({ ...inputError, ageError: false });
    } else if (e.target.name === 'marriage') {
      if (e.target.value === '') {
        setEmptyInputError({ ...emptyInputError, marriageEmpty: true });
      } else setEmptyInputError({ ...emptyInputError, marriageEmpty: false });

      if (e.target.value === 'default') {
        setInputError({ ...inputError, marriageError: true });
      } else setInputError({ ...inputError, marriageError: false });
    }

    setUserInformation({ ...userInformation, [e.target.name]: e.target.value });
  };

  /* 사용자가 프로파일 이미지를 선택했을 때 호출할 핸들러. 선택한 이미지의 URL 경로를 state로 전달한다. */
  const onChangeProfileImg = (e) => {
    if (e.target.files[0]) {
      setUserInformation({
        ...userInformation,
        profilePictureUrl: e.target.files[0],
      });
      setIsProfilePictureUploaded(true);
      setInputError({ ...inputError, profilePictureUrlError: false });
    } else {
      setUploadedProfilePicture(PROFILE_PIC_DEFAULT_URL);
    }

    // 화면에 프로필 사진 표시
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        setUploadedProfilePicture(fileReader.result);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  /* 입력된 id의 중복 여부를 확인하는 핸들러 */
  const checkIsDuplicatedId = (id) => {
    const checkIsDuplicatedIdUrl = `${process.env.REACT_APP_AUTH_IP}/v1/validation/duplicate?id=${id}`;

    axios
      .get(checkIsDuplicatedIdUrl)
      .then((response) => {
        if (response.status === 200) {
          toast.success('사용 가능한 아이디입니다.');
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error('이미 존재하는 아이디입니다.');
        }
      });
  };

  /* 회원가입 버튼 클릭 시 사용자를 등록하는 핸들러 */
  const onSubmitRegisterUser = (e) => {
    e.preventDefault();

    const ErrorCheck = Object.values(inputError).every((element) => {
      return !element;
    });

    if (ErrorCheck) {
      const registerUserUrl = `${process.env.REACT_APP_AUTH_IP}/v1/auths`;

      const userInput = {
        loginId: userInformation.id,
        loginPwd: userInformation.password,
        email: userInformation.email,
        married: userInformation.marriage,
        nickname: userInformation.nickname,
        sns: 'NO',
        status: 'ACTIVE',
        role: 'USER',
        address: `${userInformation.address} ${userInformation.detailAddress}`,
        agegroup: userInformation.age,
        // profileImgSaveUrl: userInformation.profilePictureUrl,
        profileImgSaveUrl:
          'https://pokemon.fandom.com/ko/wiki/%ED%94%BC%EC%B9%B4%EC%B8%84_(%EC%9C%A0%EB%82%98%EC%9D%B4%ED%8A%B8)',
      };

      axios
        .post(registerUserUrl, userInput)
        .then((response) => {
          navigate('/login');
        })
        .catch((error) =>
          toast.error('회원가입에 실패하였습니다. 관리자에게 문의하세요.')
        );
    } else {
      toast.warn('모든 값을 입력해주세요.');
    }
  };

  return (
    <UtilForm padding={'10rem 0'} onSubmit={onSubmitRegisterUser}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <UtilTitle>회원 정보를 입력해주세요.</UtilTitle>
      {/* 프사, 아이디, 닉네임 */}
      <S.UserProfileWrap marginBottom={gap.xl}>
        <div>
          <S.UploadProfilePicBox
            bgImgUrl={`url(${
              uploadedProfilePicture
                ? uploadedProfilePicture
                : PROFILE_PIC_DEFAULT_URL
            })`}
            onClick={onClickUploadProilePic}
          >
            {isProfilePictureUploaded || '프로필 이미지 업로드'}
          </S.UploadProfilePicBox>
          <S.ProfilePicUploadInput
            ref={profileInputRef}
            type="file"
            accept="image/jpg,impge/png,image/jpeg"
            onChange={onChangeProfileImg}
          />
        </div>
        <S.UserProfileWrap flexDirection={'column'}>
          <UtilInputWrap margin={'0'} flexDirection={'column'}>
            <div>
              <Input
                type="text"
                name="id"
                value={userInformation.id}
                placeholder="아이디"
                width={'150px'}
                height={'40px'}
                margin={'0 10px'}
                onChange={onChangeUserInformation}
              />

              <Button
                type="button"
                width={'80px'}
                height={'40px'}
                color={color.white}
                bgColor={color.darkBlue}
                hoveredBgColor={color.navy}
                onClick={() => checkIsDuplicatedId(userInformation.id)}
              >
                중복확인
              </Button>
            </div>
            <S.MessageBox>
              {emptyInputError.idEmpty ||
                (inputError.idError && (
                  <S.ErrorMessage>
                    대소문자 및 숫자로 구성된 3자리 이상 16자리 이하여야 합니다.
                  </S.ErrorMessage>
                ))}
            </S.MessageBox>
          </UtilInputWrap>

          <UtilInputWrap margin={'1rem 0 0 0'} flexDirection={'column'}>
            <div>
              <Input
                type="text"
                name="nickname"
                placeholder="닉네임"
                width={'150px'}
                height={'40px'}
                margin={'0 10px'}
                onChange={onChangeUserInformation}
              />
              <Button
                type="button"
                width={'80px'}
                height={'40px'}
                color={color.white}
                bgColor={color.darkBlue}
                hoveredBgColor={color.navy}
              >
                중복확인
              </Button>
            </div>
            <S.MessageBox>
              {emptyInputError.nicknameEmpty ||
                (inputError.nicknameError && (
                  <S.ErrorMessage>
                    대소문자, 숫자, 한글로 구성된 2자리 이상 16자리 이하여야
                    합니다.
                  </S.ErrorMessage>
                ))}
            </S.MessageBox>
          </UtilInputWrap>
        </S.UserProfileWrap>
      </S.UserProfileWrap>

      {/* 앞서 입력한 이메일, 주소, 상세주소 */}
      <UtilInputWrap>
        <Input
          type="text"
          value={userInformation.email}
          disabled={true}
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={userInformation.address}
          disabled={true}
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
        />
      </UtilInputWrap>
      <UtilInputWrap>
        <Input
          type="text"
          value={userInformation.detailAddress}
          disabled={true}
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
        />
      </UtilInputWrap>

      {/* 비밀번호 */}
      <UtilInputWrap mb={'0'}>
        <Input
          type="password"
          name="password"
          value={userInformation.password}
          placeholder="비밀번호"
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
          onChange={onChangeUserInformation}
        />
      </UtilInputWrap>
      {emptyInputError.passwordEmpty ||
        (inputError.passwordError && (
          <S.ErrorMessage>
            패스워드는 영소문자, 특수문자를 포함하여 8글자 이상 16자리 이하여야
            합니다.
          </S.ErrorMessage>
        ))}

      <UtilInputWrap mb={'0'}>
        <Input
          type="password"
          name="passwordConfirm"
          value={userInformation.passwordConfirm}
          placeholder="비밀번호 재확인"
          width={'340px'}
          height={'40px'}
          margin={'0 10px'}
          onChange={onChangeUserInformation}
        />
      </UtilInputWrap>
      {emptyInputError.passwordConfirmEmpty ||
        (inputError.passwordConfirmError && (
          <S.ErrorMessage>
            앞서 입력한 패스워드와 동일하지 않습니다.
          </S.ErrorMessage>
        ))}

      {/* 연령대, 결혼 여부 드롭다운 */}
      <S.UserInfoDropDownWrap>
        <div>
          <S.UserInfoDropDown
            name="age"
            value={userInformation.age}
            onChange={onChangeUserInformation}
          >
            <option value="default">연령대</option>
            <option value="10">10대</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대 이상</option>
          </S.UserInfoDropDown>
          {emptyInputError.ageEmpty ||
            (inputError.ageError && (
              <S.ErrorMessage>연령대를 선택해주세요</S.ErrorMessage>
            ))}
        </div>
        <div>
          <S.UserInfoDropDown
            name="marriage"
            value={userInformation.marriage}
            onChange={onChangeUserInformation}
          >
            <option value="default">결혼 여부</option>
            <option value="SINGLE">미혼</option>
            <option value="DOUBLE">기혼</option>
          </S.UserInfoDropDown>
          {emptyInputError.marriageEmpty ||
            (inputError.marriageError && (
              <S.ErrorMessage>결혼 여부를 선택해주세요</S.ErrorMessage>
            ))}
        </div>
      </S.UserInfoDropDownWrap>
      {/* 회원가입 버튼 */}
      <Button
        type={'submit'}
        width={'340px'}
        height={'40px'}
        margin={'20px 0 0 0'}
        bgColor={color.darkBlue}
        color={color.white}
        hoveredBgColor={color.navy}
      >
        회원가입
      </Button>
    </UtilForm>
  );
}

export default SignUpForm;
