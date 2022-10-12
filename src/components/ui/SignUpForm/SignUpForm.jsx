/* libraries */
import React, { useRef, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    PROFILE_PIC_URL: PROFILE_PIC_DEFAULT_URL,
  });

  /* User가 입력한 정보의 유효성 여부를 나타내는 state */
  const [inputError, setInputError] = useState({
    idError: true,
    nicknameError: true,
    passwordError: true,
    passwordConfirmError: true,
    ageError: true,
    marriageError: true,
    PROFILE_PIC_URL_ERROR: true,
  });

  /* User가 입력한 정보 중 버이 있는 값이 있는지 나타내는 state */
  const [emptyInputError, setEmptyInputError] = useState({
    idEmpty: true,
    nicknameEmpty: true,
    passwordEmpty: true,
    passwordConfirmEmpty: true,
    ageEmpty: true,
    marriageEmpty: true,
    PROFILE_PIC_URL_Empty: true,
  });

  /* 프로필 이미지 업로드 여부를 나타내는 state */
  const [profileChangeState, setProfileChangeState] = useState(false);

  /* 프로필 이미지 업로드에 쓰이는 useRef */
  const profileInputRef = useRef();

  /* 패스워드 일치 여부를 확인하는 함수 */
  useEffect(() => {
    if (userInformation.password !== userInformation.passwordConfirm) {
      setInputError({ ...inputError, passwordConfirmError: true });
    } else {
      setInputError({ ...inputError, passwordConfirmError: false });
    }
  }, [userInformation.password]);

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

      if (e.target.value == 'default') {
        setInputError({ ...inputError, ageError: true });
      } else setInputError({ ...inputError, ageError: false });
    } else if (e.target.name === 'marriage') {
      if (e.target.value === '') {
        setEmptyInputError({ ...emptyInputError, marriageEmpty: true });
      } else setEmptyInputError({ ...emptyInputError, marriageEmpty: false });

      if (e.target.value == 'default') {
        setInputError({ ...inputError, marriageError: true });
      } else setInputError({ ...inputError, marriageError: false });
    }

    setUserInformation({ ...userInformation, [e.target.name]: e.target.value });
  };

  /* 사용자가 프로파일 이미지를 선택했을 때 호출할 핸들러. 선택한 이미지의 URL 경로를 state로 전달한다. */
  const onChangeProfileImg = (e) => {
    const FileReaderObject = new FileReader();
    FileReaderObject.onload = () => {
      setUserInformation({
        ...userInformation,
        PROFILE_PIC_URL: FileReaderObject.result,
      });
      setProfileChangeState(true);
      setInputError({ ...inputError, PROFILE_PIC_URL_ERROR: false });
    };
    FileReaderObject.readAsDataURL(e.target.files.item(0));
  };

  /* 회원가입 버튼을 클릭할 때 호출할 핸들러*/
  const onSubmitRegisterUser = (e) => {
    e.preventDefault();

    const ErrorCheck = Object.values(inputError).every((element) => {
      return !element;
    });

    if (ErrorCheck) {
      const sendData = {
        loginId: userInformation.id,
        loginPwd: userInformation.password,
        email: userInformation.email,
        status: 1,
        role: 0,
        nickname: userInformation.nickname,
        address: `${userInformation.address} ${userInformation.detailAddress}`,
        birthdate: userInformation.age,
        married: userInformation.marriage,
      };
      console.log(sendData);
    } else {
      toast.error('유효하지 않은 데이터가 있습니다.');
    }
  };

  return (
    <UtilForm padding={'10rem 0'} onSubmit={onSubmitRegisterUser}>
      <UtilTitle>회원 정보를 입력해주세요.</UtilTitle>
      {/* 프사, 아이디, 닉네임 */}
      <S.UserProfileWrap marginBottom={gap.xl}>
        <div>
          <S.UploadProfilePicBox
            bgImgUrl={`url(${userInformation.PROFILE_PIC_URL})`}
            onClick={onClickUploadProilePic}
          >
            {profileChangeState || '프로필 이미지 업로드'}
          </S.UploadProfilePicBox>
          <S.ProfilePicUploadInput
            ref={profileInputRef}
            type="file"
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
            <option value={'미혼'}>미혼</option>
            <option value={'기혼'}>기혼</option>
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </UtilForm>
  );
}

export default SignUpForm;
