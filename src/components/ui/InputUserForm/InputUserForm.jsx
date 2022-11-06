/* libraries */
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button, Input, UtilForm, UtilInputWrap, UtilTitle } from '../..';
/* APIs */
import {
  checkIsDuplicatedId,
  checkIsDuplicatedNickname,
  signUpOrEditUser,
} from '../../../apis';
/* static data */
import { COLOR_LIST as color, GAP_LIST as gap } from '../../../style';
import { base64ImgSrcToImgBinaryData, printFormData } from '../../../store';

const PROFILE_PIC_DEFAULT_URL = '/assets/images/ProfileDefaultImage.png';

const RegExpId = /^[A-Za-z][A-Za-z0-9]{2,15}$/;
const RegExpNickName = /^[a-zA-Z0-9]{2,16}$/;
const RegExpPassword = /[a-zA-Z0-9!@#$%^&*()._-]{8,16}/;

function InputUserForm({ state, beforeEditUserInfo }) {
  const path = useLocation().pathname;
  const isEditUserPage = path.includes('edit');
  const token = localStorage.getItem('token');

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
  /* User가 입력한 정보 중 비어 있는 값이 있는지 나타내는 state */
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
  /* 아이디 및 닉네임 중복 확인 여부 관련 state */
  const [isDuplicatedIdChecked, setIsDuplicatedIdChecked] = useState(false);
  const [isDuplicatedNicknameChecked, setIsDuplicatedNicknameChecked] =
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
  }, [userInformation.password, userInformation.passwordConfirm]);

  /* 현재 페이지가 회원 정보 수정을 목적으로 들어온 경우 
     전달받은 state 값을 이용해 수정한다. */
  useEffect(() => {
    if (beforeEditUserInfo) {
      setUserInformation({
        ...userInformation,
        id: beforeEditUserInfo.loginId,
        nickname: beforeEditUserInfo.nickname,
      });

      //이미지 state 전달.
      setUploadedProfilePicture(beforeEditUserInfo.profileImgSaveUrl);
      setIsProfilePictureUploaded(true);

      //ID는 중복체크할 이유가 없으므로 ID 중복 state True로 전달
      setIsDuplicatedIdChecked(true);

      //ID와 닉네임, 프로필 관련 에러가 없음을 나타내는 state 값을 전달
      setEmptyInputError({
        ...emptyInputError,
        idEmpty: false,
        nicknameEmpty: false,
        profilePictureUrlEmpty: false,
      });
      setInputError({
        ...inputError,
        idError: false,
        nicknameError: false,
        profilePictureUrlError: false,
      });
    }
  }, []);

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

  /* 아이디 혹은 닉네임 중 빈 값이 있는지 확인하는 핸들러 */
  const checkIsIdOrNicknameEmpty = (type) => {
    if (type === 'id' && emptyInputError.idEmpty) {
      toast.error('먼저 아이디를 입력해주세요.');
      return false;
    }
    if (type === 'nickname' && emptyInputError.nicknameEmpty) {
      toast.error('먼저 닉네임을 입력해주세요.');
      return false;
    }
    return true;
  };

  /* 아이디 및 닉네임의 중복확인 버튼 클릭 여부를 확인하는 핸들러 */
  const checkIsDuplicationButtonClicked = () => {
    if (!isDuplicatedIdChecked) {
      toast.error('아이디 중복 여부를 확인해주세요.');
      return false;
    }
    if (!isDuplicatedNicknameChecked) {
      toast.error('닉네임 중복 여부를 확인해주세요.');
      return false;
    }
    return true;
  };

  return (
    <UtilForm>
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
            value={''}
            onChange={onChangeProfileImg}
          />
        </div>
        <S.UserProfileWrap flexDirection={'column'}>
          <UtilInputWrap margin={'0'} flexDirection={'column'}>
            <div style={{ alignSelf: 'start' }}>
              <Input
                type="text"
                name="id"
                value={userInformation.id}
                placeholder="아이디"
                disabled={isEditUserPage}
                width={'150px'}
                height={'40px'}
                margin={'0 10px'}
                fontSize={'14px'}
                onChange={onChangeUserInformation}
              />
              {!isEditUserPage && (
                <Button
                  type="button"
                  width={'80px'}
                  height={'40px'}
                  color={color.white}
                  bgColor={color.darkBlue}
                  hoveredBgColor={color.navy}
                  onClick={() =>
                    checkIsDuplicatedId(
                      userInformation.id,
                      checkIsIdOrNicknameEmpty,
                      toast,
                      setIsDuplicatedIdChecked,
                      isDuplicatedIdChecked
                    )
                  }
                >
                  중복확인
                </Button>
              )}
            </div>
            {!isEditUserPage && (
              <S.MessageBox>
                {emptyInputError.idEmpty ||
                  (inputError.idError && (
                    <S.ErrorMessage>
                      대소문자 및 숫자로 구성된 3자리 이상 16자리 이하여야
                      합니다.
                    </S.ErrorMessage>
                  ))}
              </S.MessageBox>
            )}
          </UtilInputWrap>

          <UtilInputWrap margin={'1rem 0 0 0'} flexDirection={'column'}>
            <div>
              <Input
                type="text"
                name="nickname"
                value={userInformation.nickname}
                placeholder="닉네임"
                width={'150px'}
                height={'40px'}
                margin={'0 10px'}
                fontSize={'14px'}
                onChange={onChangeUserInformation}
              />
              <Button
                type="button"
                width={'80px'}
                height={'40px'}
                color={color.white}
                bgColor={color.darkBlue}
                hoveredBgColor={color.navy}
                onClick={() =>
                  checkIsDuplicatedNickname(
                    userInformation.nickname,
                    checkIsIdOrNicknameEmpty,
                    toast,
                    setIsDuplicatedNicknameChecked
                  )
                }
              >
                중복확인
              </Button>
            </div>
            <S.MessageBox>
              {emptyInputError.nicknameEmpty ||
                (inputError.nicknameError && (
                  <S.ErrorMessage>
                    대소문자, 숫자로 구성된 2자리 이상 16자리 이하여야 합니다.
                  </S.ErrorMessage>
                ))}
            </S.MessageBox>
          </UtilInputWrap>
        </S.UserProfileWrap>
      </S.UserProfileWrap>

      {/* 앞서 입력한 이메일, 주소, 상세주소 */}
      {!isEditUserPage && (
        <>
          <UtilInputWrap>
            <Input
              type="text"
              value={userInformation.email}
              disabled={true}
              width={'340px'}
              height={'40px'}
              margin={'0 10px'}
              fontSize={'14px'}
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
              fontSize={'14px'}
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
              fontSize={'14px'}
            />
          </UtilInputWrap>
        </>
      )}

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
          fontSize={'14px'}
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
          fontSize={'14px'}
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
      {!isEditUserPage && (
        <Button
          type={'submit'}
          width={'340px'}
          height={'40px'}
          margin={'20px 0 0 0'}
          bgColor={color.darkBlue}
          color={color.white}
          hoveredBgColor={color.navy}
          onClick={(e) =>
            signUpOrEditUser(
              e,
              checkIsDuplicationButtonClicked,
              inputError,
              base64ImgSrcToImgBinaryData,
              uploadedProfilePicture,
              userInformation,
              isEditUserPage,
              beforeEditUserInfo,
              toast,
              navigate,
              printFormData
            )
          }
        >
          회원가입
        </Button>
      )}
      {isEditUserPage && (
        <Button
          type={'submit'}
          width={'340px'}
          height={'40px'}
          margin={'20px 0 0 0'}
          bgColor={color.darkBlue}
          color={color.white}
          hoveredBgColor={color.navy}
          value={'회원정보 수정'}
          onClick={(e) =>
            signUpOrEditUser(
              e,
              checkIsDuplicationButtonClicked,
              inputError,
              base64ImgSrcToImgBinaryData,
              uploadedProfilePicture,
              userInformation,
              isEditUserPage,
              beforeEditUserInfo,
              toast,
              navigate,
              printFormData
            )
          }
        >
          수정
        </Button>
      )}
    </UtilForm>
  );
}

export default InputUserForm;
