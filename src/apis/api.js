/* libraries */
import axios from 'axios';

/* Auth */
/** 코스 작성자 정보를 가져온 후 가져온 코스 작성자 정보를 state로 업데이트 시켜주는 함수
 *  authorID : 코스 작성자 ID를 나타내는 Number
 *  setState : 가져온 값을 state 값으로 변경시켜주기 위한 Function
 */
export const getCourseAuthor = (id, setState) => {
  const url = `${process.env.REACT_APP_API}/view/info?id=author-id`;
  const config = {
    headers: {
      Authorization: id,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => {
      setState(response.data);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 사용자 주소 수정 */
export const updateUserAddress = () => {};

/** 사용자 비밀번호 수정 */
export const updateUserPassword = (e, checkPasswords) => {
  e.preventDefault();

  if (!checkPasswords()) return;

  alert('비밀번호를 변경했습니다!');
  // navigate(-1);
};

/** 입력된 아이디의 중복 여부를 확인하는 핸들러 */
export const checkIsDuplicatedId = (
  id,
  checkIsIdOrNicknameEmpty,
  toast,
  setIsDuplicatedIdChecked,
  isDuplicatedIdChecked
) => {
  if (!checkIsIdOrNicknameEmpty('id')) return;

  // const url = `${process.env.REACT_APP_AUTH_IP}/v1/validation/duplicate?id=login-id`;
  const url = `${process.env.REACT_APP_API}/validation/duplicate?id=login-id`;
  const config = {
    headers: {
      Authorization: id,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => {
      if (response.status === 200) {
        toast.success('사용 가능한 아이디입니다.');
        setIsDuplicatedIdChecked(!isDuplicatedIdChecked);
      }
    })
    .catch((error) => {
      new Error(error);
      if (error.response.status === 400) {
        toast.error('이미 존재하는 아이디입니다.');
      }
    });
};

/** 입력된 닉네임의 중복 여부를 확인하는 핸들러 */
export const checkIsDuplicatedNickname = (
  nickname,
  checkIsIdOrNicknameEmpty,
  toast,
  setIsDuplicatedNicknameChecked
) => {
  if (!checkIsIdOrNicknameEmpty('nickname')) return;

  // const url = `${process.env.REACT_APP_AUTH_IP}/v1/validation/duplicate?id=nickname`;
  const url = `${process.env.REACT_APP_API}/validation/duplicate?id=nickname`;
  const config = {
    headers: {
      Authorization: nickname,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => {
      if (response.status === 200) {
        toast.success('사용 가능한 닉네임입니다.');
        setIsDuplicatedNicknameChecked(true);
      }
    })
    .catch((error) => {
      new Error(error);
      if (error.response.status === 400) {
        toast.error('이미 존재하는 닉네임입니다.');
      }
    });
};

/** 회원가입 및 수정 */
export const signUpOrEditUser = (
  e,
  checkIsDuplicationButtonClicked,
  inputError,
  base64ImgSrcToImgBinaryData,
  uploadedProfilePicture,
  userInformation,
  isEditUserPage,
  beforeEditUserInfo,
  token,
  toast,
  navigate,
  printFormData
) => {
  const formData = new FormData();
  e.preventDefault();

  // 중복체크
  if (!checkIsDuplicationButtonClicked()) return;

  const ErrorCheck = Object.values(inputError).every((element) => {
    return !element;
  });

  if (ErrorCheck) {
    // const url = `${process.env.REACT_APP_AUTH_IP}/v1/auths`;
    const url = `${process.env.REACT_APP_API}/auths`;
    const [profileImgSaveUrl] = base64ImgSrcToImgBinaryData(
      uploadedProfilePicture
    );

    //회원가입용 Body
    const signUpBody = {
      loginId: userInformation.id,
      loginPwd: userInformation.password,
      email: userInformation.email,
      married: userInformation.marriage,
      nickname: userInformation.nickname,
      sns: 'NO',
      address: `${userInformation.address} ${userInformation.detailAddress}`,
      ageGroup: userInformation.age,
    };
    //회원수정에서 프로필 이미지를 변경했을 때의 Body
    let updateBody;
    let updateBody2;
    if (isEditUserPage) {
      updateBody = {
        loginId: userInformation.id,
        loginPwd: userInformation.password,
        nickname: userInformation.nickname,
        email: beforeEditUserInfo?.email,
        address: beforeEditUserInfo.address,
        role: beforeEditUserInfo.role,
        sns: beforeEditUserInfo.sns,
        status: beforeEditUserInfo.status,
        ageGroup: userInformation.age,
        married: userInformation.marriage,
        type: '회원정보 수정',
      };
      //회원수정에서 프로필 이미지를 변경하지 않았을 때의 Body
      updateBody2 = {
        ...updateBody,
        profileImgOriginName: beforeEditUserInfo.profileImgOriginName,
        profileImgSaveName: beforeEditUserInfo.profileImgSaveName,
        profileImgSaveUrl: beforeEditUserInfo.profileImgSaveUrl,
      };
    }

    const config = {
      headers: {
        Authorization: isEditUserPage ? token : '',
      },
      timeout: 3000,
    };
    //회원수정

    if (isEditUserPage) {
      //프로필 이미지가 변경되었다면
      if (uploadedProfilePicture.slice(0, 4) == 'data') {
        const updateBodyJson = JSON.stringify(updateBody);
        const updateBodyBlob = new Blob([updateBodyJson], {
          type: 'application/json',
        });

        const [profilePictureBinaryData, profilePictureMimeType] =
          base64ImgSrcToImgBinaryData(uploadedProfilePicture);

        const profilePictureBlob = new Blob([profilePictureBinaryData], {
          type: profilePictureMimeType,
        });

        formData.append('updateAuthRequest', updateBodyBlob);
        formData.append('file', profilePictureBlob);
      }
      //프로필 이미지가 변경되지 않았다면
      else {
        const updateBodyJson = JSON.stringify(updateBody2);
        const updateBodyBlob = new Blob([updateBodyJson], {
          type: 'application/json',
        });

        const profilePictureBlob = new Blob(['']);

        formData.append('updateAuthRequest', updateBodyBlob);
        formData.append('file', profilePictureBlob);
      }

      // 회원수정
      axios
        .put(url, formData, config)
        .then((response) => {
          //수정된 데이터 다시 가져와서 리다이렉트 하기
          toast.success(response.data);
          // const url = `${process.env.REACT_APP_AUTH_IP}/v1/auths`;
          const url = `${process.env.REACT_APP_API}/auths`;
          const config = {
            headers: {
              Authorization: token,
            },
            timeout: 1000,
          };
          axios
            .get(url, config)
            .then((resonse) => {
              navigate('/user/edit/menu', {
                replace: true,
                state: resonse.data,
              });
            })
            .catch((error) => {
              new Error(error);
              toast.error(
                '수정된 데이터를 가져오는데 실패했습니다. 관리자에게 문의하세요'
              );
            });
        })
        .catch((error) => {
          new Error(error);
          toast.error('회원정보 변경에 실패했습니다. 관리자에게 문의하세요.');
        });
    }
    //회원가입
    else {
      const signUpBodyJson = JSON.stringify(signUpBody);
      const signUpBodyBlob = new Blob([signUpBodyJson], {
        type: 'application/json',
      });
      const [profilePictureBinaryData, profilePictureMimeType] =
        base64ImgSrcToImgBinaryData(uploadedProfilePicture);

      const profilePictureBlob = new Blob([profilePictureBinaryData], {
        type: profilePictureMimeType,
      });

      formData.append('createAuthRequest', signUpBodyBlob);
      formData.append('file', profilePictureBlob);

      printFormData(formData);

      axios
        .post(url, formData, config)
        .then((response) => {
          navigate(`/login`, { replace: true });
        })
        .catch((error) => {
          new Error(error);
          toast.error('회원가입에 실패했습니다. 관리자에게 문의하세요.');
        });
    }
  } else {
    toast.warn('모든 값을 입력해주세요.');
  }
};

/** 회원탈퇴 */
export const withdrawUser = (
  e,
  passwordRef,
  token,
  setIsLoggedIn,
  navigate,
  toast
) => {
  // const url = `${process.env.REACT_APP_AUTH_IP}/v1/auths`;
  const url = `${process.env.REACT_APP_API}/auths`;
  const body = {
    loginId: '111',
    loginPwd: passwordRef.current.value,
    email: '123@naver.com',
    married: 'SINGLE',
    nickname: '1',
    address: '1',
    ageGroup: '20대',
    status: 'WITHDRAWL',
    sns: 'NO',
    role: 'USER',
    profileImgOriginName: '1',
    profileImgSaveName: 's3',
    profileImgSaveUrl: '1',
    type: e.target.value,
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .put(url, body, config)
    .then((response) => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/withdrawal-message');
    })
    .catch((error) => {
      new Error(error);
      toast.error('회원탈퇴에 실패했습니다. 관리자에게 문의하세요.');
    });
};

/* Cosmost */
/** 코스 상세 정보를 조회하는 함수
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
export const getCourseDetail = (courseId, setState) => {
  // const url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts/${courseId}`;
  const url = `${process.env.REACT_APP_API}/cosmosts/${courseId}`;
  const config = { timeout: 3000 };

  axios
    .get(url, config)
    .then((response) => {
      setState(response.data);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 코스 평균 평점을 기준으로 정렬된 코스들을 조회하는 함수
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
export const getCoursesSortedByAverageRate = (page, setState) => {
  // const url = `${process.env.REACT_APP_COSMOST_IP}/v1/view/ranking?order=rate&sort=desc&page=${page}&size=4`;
  const url = `${process.env.REACT_APP_API}/view/ranking?order=rate&sort=desc&page=${page}&size=4`;
  const config = { timeout: 3000 };

  axios
    .get(url, config)
    .then((response) => {
      setState(response.data);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 코스 혹은 코스 리뷰 삭제 */
export const deleteCourseOrReview = (
  clicked,
  courseId,
  courseReviewId,
  onClickOpenDeleteModal,
  navigate,
  toast,
  setIsClickedCourseReviewChanged,
  isClickedCourseReviewChanged
) => {
  if (clicked === 'course') {
    // const url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts/${id}`;
    const url = `${process.env.REACT_APP_API}/cosmosts/${courseId}`;
    const config = { timeout: 1000 };
    axios
      .delete(url, config)
      .then((response) => {
        onClickOpenDeleteModal();
        navigate(-1);
      })
      .catch((error) => {
        new Error(error);
        toast.error(
          '코스 삭제 도중 오류가 발생했습니다. 관리자에게 문의하세요.'
        );
      });
  }
  //코스 리뷰 삭제
  else {
    // const url = `${process.env.REACT_APP_COMMENT_IP}/v1/comments/${id}/review`;
    const url = `${process.env.REACT_APP_API}/comments/${courseReviewId}/review`;
    const config = { timeout: 3000 };

    axios
      .delete(url, config)
      .then((response) => {
        onClickOpenDeleteModal();
        setIsClickedCourseReviewChanged(!isClickedCourseReviewChanged);
      })
      .catch((error) => {
        new Error(error);
        toast.error('오류가 발생했습니다. 관리자에게 문의하세요.');
      });
  }
};

export const getCategories = (type, URLS, setCategories) => {
  const url = URLS[type];
  const config = { timeout: 3000 };

  axios
    .get(url, config)
    .then((response) =>
      setCategories((prev) => {
        return {
          ...prev,
          [type]: response.data,
        };
      })
    )
    .catch((error) => new Error(error));
};

/* Comment */
/** 해당 코스의 리뷰 정보를 가져오는 함수.
 *  courseId : 코스 ID를 나타내는 Number
 *  thenCallback : 리뷰를 가져오는데 성공했을 때 호출할 콜백
 *  errorCallback : 리뷰를 가져오는데 실패했을 때 호출할 콜백
 */
export const getCourseReviews = (courseId, setState) => {
  // const url = `${process.env.REACT_APP_COMMENT2_IP}/v1/comments?type=review`;
  // const url = `${process.env.REACT_APP_API}/comments?type=review`;
  // http://gateway.cosmost.shop/v1/comments?type=review&sort=id,desc&page=1&size=4
  // const config = {
  //   headers: {
  //     Authorization: courseId,
  //   },
  //   timeout: 3000,
  // };
  // axios
  //   .get(url, config)
  //   .then((response) => setState(response.data))
  //   .catch((error) => {
  //     new Error(error);
  //   });
};

/** 단일 코스의 조회용 데이터를 가져와 state로 업데이트하는 함수
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
export const getSingleCourseView = (courseId, setState) => {
  // const url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts/${courseId}?filter=frame`;
  const url = `${process.env.REACT_APP_API}/cosmosts/${courseId}?filter=frame`;
  const config = { timeout: 3000 };

  console.log('url', url);

  axios
    .get(url, config)
    .then((response) => {
      let singleCourseViewData = response.data;
      getCourseAverageRate(
        courseId,
        (result) => {
          const cpaArr = result.data;
          singleCourseViewData = {
            ...singleCourseViewData,
            courseAvgRate: cpaArr[0].courseAvgRate,
          };
          setState(singleCourseViewData);
        },
        (error) => {
          let cpaArr;
          switch (error.response.data) {
            case '해당 코스의 리뷰가 존재하지 않습니다':
              cpaArr = [{ courseId: courseId, courseAvgRate: 0 }];
              break;
            default:
              new Error(error);
              break;
          }
          singleCourseViewData = {
            ...singleCourseViewData,
            courseAvgRate: cpaArr[0].courseAvgRate,
          };
          setState(singleCourseViewData);
        }
      );
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 코스 리뷰 등록 */
export const postCourseReview = (
  e,
  checkCourseReviewValues,
  courseDetail,
  reviewContentRef,
  rateRef,
  toast
) => {
  e.preventDefault();

  if (!checkCourseReviewValues()) return;

  // const url = `${process.env.REACT_APP_COMMENT_IP}/v1/comments`;
  const url = `${process.env.REACT_APP_API}/comments`;
  const temporaryBody = {
    courseId: courseDetail.id,
    reviewerId: 1,
    courseReviewContent: reviewContentRef.current.value,
    rate: rateRef.current,
  };
  const config = { timeout: 3000 };

  axios
    .post(url, temporaryBody, config)
    .then((response) => {
      reviewContentRef.current.value = '';
    })
    .catch((error) => {
      new Error(error);
      toast.error('오류가 발생했습니다. 관리자에게 문의하세요.');
    });
};

/** 내가 작성한 리뷰 조회 */
export const getMyReviews = (token, setReviews) => {
  // const url = `${process.env.REACT_APP_COMMENT_IP}/v1/comments?filter=auth&type=review`;
  const url = `${process.env.REACT_APP_API}/comments?filter=auth&type=review`;
  const config = {
    headers: {
      Authorization: token, // 로그인한 사용자의 식별자
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => {
      setReviews(response.data);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 코스 리뷰 수정 */
export const editCourseReview = (
  courseId,
  checkEditCourseReviewValues,
  edittedReviewContentRef,
  edittedReviewRateRef,
  setIsCourseReviewEditTextareaOpened,
  setIsClickedCourseReviewChanged,
  isClickedCourseReviewChanged,
  token
) => {
  if (!checkEditCourseReviewValues()) return;

  // const token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDgiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzQzNzM4NCwiZXhwIjozNzY2NzQzNzM4NH0.Tz-E2hPqW8zSC94tYcD2GzqMPZKvWWz76UJC2RmGpXw';
  // const url = `${process.env.REACT_APP_COMMENT_IP}/v1/comments/${courseId}`;
  const url = `${process.env.REACT_APP_API}/comments/${courseId}`;
  const body = {
    courseReviewContent: edittedReviewContentRef.current.value,
    rate: edittedReviewRateRef.current.value,
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .put(url, body, config)
    .then((response) => {
      edittedReviewContentRef.current.value = '';
      setIsCourseReviewEditTextareaOpened(false);
      setIsClickedCourseReviewChanged(!isClickedCourseReviewChanged);
    })
    .catch((error) => {
      new Error(error);
    });
};

/* Popularity */
/** 단일 코스 평균 평점을 가져오는 데 성공하면 콜백함수를 호출하는 함수
 *  courseID : 코스 ID를 나타내는 Number
 *  thenCallback : 값을 가져오는 데 성공할 시 호출할 콜백함수
 *  errorCallback : 값을 가져오는 데 실패할 시 호출할 콜백함수
 */
export const getCourseAverageRate = (courseID, thenCallback, errorCallback) => {
  // const url = `${process.env.REACT_APP_COMMENT1_IP}/v1/view?rate=average&course=${courseID}`;

  const url = `${process.env.REACT_APP_API}/view?rate=average&course=${courseID}`;
  const config = {
    timeout: 3000,
  };

  axios.get(url, config).then(thenCallback).catch(errorCallback);
};

/** 해당 코스의 좋아요 개수를 가져온 뒤 코스 좋아요 개수를 state로 업데이트 시켜주는 함수.
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
export const getCourseLikeCount = (courseID, setState) => {
  const url = `${process.env.REACT_APP_API}/popularities/${courseID}?filter=count&type=cosmost`;
  const config = {
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((result) => {
      setState(result.data.courseThumbsCnt);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 코스 리뷰 좋아요 등록 및 취소 */
export const handleLikeCourseReview = (
  id,
  type,
  checkIsLoggedIn,
  token,
  isLoggedIn,
  navigate,
  compareAuthorIdWithLoggedInUserId,
  courseReview,
  loggedInUserId,
  toast,
  setIsLikedCourseReviewChanged,
  isLikedCourseReviewChanged
) => {
  if (!checkIsLoggedIn(token, isLoggedIn, navigate)) return;

  if (
    !compareAuthorIdWithLoggedInUserId(
      courseReview.reviewerId,
      loggedInUserId,
      toast
    )
  )
    return;

  // const token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDgiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzQzNzM4NCwiZXhwIjozNzY2NzQzNzM4NH0.Tz-E2hPqW8zSC94tYcD2GzqMPZKvWWz76UJC2RmGpXw';
  const URLS = {
    // like: `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities`,
    like: `${process.env.REACT_APP_API}/popularities`,
    // unlike: `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${id}/review`,
    unlike: `${process.env.REACT_APP_API}/popularities/${id}/review`,
  };
  const body = {
    courseReviewId: id,
    type: 'courseReviewThumbsup',
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  if (type === 'like') {
    axios
      .post(URLS[type], body, config)
      .then((response) =>
        setIsLikedCourseReviewChanged(!isLikedCourseReviewChanged)
      )
      .catch((error) => new Error(error));
  } else {
    axios
      .delete(URLS[type], config)
      .then((response) =>
        setIsLikedCourseReviewChanged(!isLikedCourseReviewChanged)
      )
      .catch((error) => new Error(error));
  }
};

/** 코스 리뷰 좋아요 개수 조회 */
export const fetchCourseReviewLikeCount = (id, setState) => {
  const url = `${process.env.REACT_APP_API}/popularities/${id}?filter=count&type=review`;
  const config = { timeout: 3000 };

  axios
    .get(url, config)
    .then((response) => {
      setState(response.data.courseReviewThumbsupCount);
    })
    .catch((error) => new Error(error));
};

/** 코스 좋아요 등록 및 취소 */
export const handleLikeCourse = (
  id,
  type,
  checkIsLoggedIn,
  token,
  isLoggedIn,
  navigate,
  compareAuthorIdWithLoggedInUserId,
  courseDetail,
  loggedInUserId,
  toast,
  setIsLikedCourseChanged,
  isLikedCourseChanged
) => {
  if (!checkIsLoggedIn(token, isLoggedIn, navigate)) return;

  if (
    !compareAuthorIdWithLoggedInUserId(
      courseDetail.authorId,
      loggedInUserId,
      toast
    )
  )
    return;

  // const token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
  const URLS = {
    // like: `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities`,
    like: `${process.env.REACT_APP_API}/popularities`,
    // unlike: `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${id}/cosmost`,
    unlike: `${process.env.REACT_APP_API}/popularities/${id}/cosmost`,
  };
  const url = URLS[type];
  const body = {
    courseId: id,
    type: 'course',
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  if (type === 'like') {
    axios
      .post(url, body, config)
      .then((response) => setIsLikedCourseChanged(!isLikedCourseChanged))
      .catch((error) => new Error(error));
  } else {
    axios
      .delete(url, config)
      .then((response) => setIsLikedCourseChanged(!isLikedCourseChanged))
      .catch((error) => new Error(error));
  }
};

/** 코스 좋아요 여부 확인 */
export const checkLikedCourse = (courseDetail, setIsLikedCourse, token) => {
  // const token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
  // const url = `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${courseDetail.id}?type=cosmost`;
  const url = `${process.env.REACT_APP_API}/popularities/${courseDetail.id}?type=cosmost`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => {
      setIsLikedCourse(response.data);
    })
    .catch((error) => new Error(error));
};

/** 팔로우 혹은 언팔로우 */
export const handleFollow = (
  type,
  followId,
  setIsFollowedChanged,
  isFollowedChanged
) => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';

  const URLS = {
    follow: `${process.env.REACT_APP_API}/popularities`,
    unfollow: `${process.env.REACT_APP_API}/popularities/${followId}/following`,
  };
  const url = URLS[type];
  const body = {
    followingId: followId,
    type: 'follow',
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  if (type === 'follow') {
    axios
      .post(url, body, config)
      .then((response) => {
        setIsFollowedChanged(!isFollowedChanged);
      })
      .catch((error) => new Error(error));
  } else {
    axios
      .delete(url, config)
      .then((response) => {
        setIsFollowedChanged(!isFollowedChanged);
      })
      .catch((error) => new Error(error));
  }
};

/** 상대방과 팔로우 여부 조회 */
export const fetchIsFollowed = (id, setIsFollowed) => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
  const url = `${process.env.REACT_APP_API}/popularities/${id}?type=follow`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => setIsFollowed(response.data))
    .catch((error) => new Error(error));
};

/* Board */
/** 나의 신고 내역 조회 */
export const getMyReports = (token, setReports) => {
  // const url = `${process.env.REACT_APP_BOARD_IP}/v1/boards?filter=auth`;
  const url = `${process.env.REACT_APP_API}/boards?filter=auth`;
  const config = {
    headers: {
      Authorization: token, // 로그인한 사용자의 토큰
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => {
      setReports(response.data);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 리뷰 작성에 쓰일 신고 카테고리를 불러오는 함수 */
export const getReportCategories = (setReportCategories) => {
  // const url = `${process.env.REACT_APP_BOARD_IP}/v1/boards`;
  const url = `${process.env.REACT_APP_API}/boards`;
  const config = { timeout: 3000 };

  axios
    .get(url, config)
    .then((response) => {
      setReportCategories(response.data);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 신고 버튼 클릭 시 작성된 신고 내용을 서버로 전송하는 함수 */
export const postReport = (
  e,
  checkReportInput,
  reportTitle,
  reportContent,
  reportCategory,
  setIsReportFormOpened,
  isReportFormOpened,
  toast
) => {
  e.preventDefault();

  if (!checkReportInput()) return;

  // const url = `${process.env.REACT_APP_BOARD_IP}/v1/boards`;
  const url = `${process.env.REACT_APP_API}/boards`;
  const body = {
    reporterId: 2,
    reportTitle: reportTitle.current.value,
    reportContent: reportContent.current.value,
    createReportCategoryListRequestList: [
      {
        reportCategory: +reportCategory.current.value,
      },
    ],
  };
  const config = { timeout: 3000 };

  axios
    .post(url, body, config)
    .then((response) => {
      setIsReportFormOpened(!isReportFormOpened);
    })
    .catch((error) => {
      new Error(error);
      toast.error('오류가 발생했습니다. 관리자에게 문의하세요.');
    });
};

/** 수정 버튼 클릭 시 작성된 신고 수정 내용을 서버로 전송하는 함수 */
export const updateReport = (
  e,
  id,
  checkReportInput,
  reportTitle,
  reportContent,
  report,
  reportCategory,
  setIsHistoriesChanged,
  isHistoriesChanged,
  setIsReportFormOpened,
  isReportFormOpened,
  toast
) => {
  e.preventDefault();

  if (!checkReportInput()) return;

  // const url = `${process.env.REACT_APP_BOARD_IP}/v1/boards/${id}`;
  const url = `${process.env.REACT_APP_API}/boards/${id}`;
  const body = {
    reportTitle: reportTitle.current.value,
    reportContent: reportContent.current.value,
    updateReportCategoryListRequestList: [
      {
        id: report.reportCategoryList[0].id,
        reportCategory: +reportCategory.current.value,
      },
    ],
  };
  const config = { timeout: 3000 };

  axios
    .put(url, body, config)
    .then((response) => {
      setIsHistoriesChanged(!isHistoriesChanged);
      setIsReportFormOpened(!isReportFormOpened);
    })
    .catch((error) => {
      new Error(error);
      toast.error('오류가 발생했습니다. 관리자에게 문의하세요.');
    });
};

/** 코스 리뷰 좋아요 여부 확인 */
export const likedCourseReview = (id, setIsLikedCourseReview, token) => {
  // const token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDgiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzQzNzM4NCwiZXhwIjozNzY2NzQzNzM4NH0.Tz-E2hPqW8zSC94tYcD2GzqMPZKvWWz76UJC2RmGpXw';
  // const url = `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${id}?type=review`;
  const url = `${process.env.REACT_APP_API}/popularities/${id}?type=review`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => setIsLikedCourseReview(response.data))
    .catch((error) => new Error(error));
};
