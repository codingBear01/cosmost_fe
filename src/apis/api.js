/* libraries */
import axios from "axios";

/* Auth */
/** 코스 작성자 정보를 가져온 후 가져온 코스 작성자 정보를 state로 업데이트 시켜주는 함수
 *  authorID : 코스 작성자 ID를 나타내는 Number
 *  setState : 가져온 값을 state 값으로 변경시켜주기 위한 Function
 */
export const fetchUser = (token, setState) => {
  const url = `${process.env.REACT_APP_API}/auths`;
  const config = {
    headers: {
      Authorization: token,
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

export const getCourseAuthor = (id, setState) => {
  const url = `${process.env.REACT_APP_API}/view/info?id=author-id`;
  const config = {
    headers: {
      Authorization: id,
    },
    timeout: 3000,
  };

  if (!id) return;

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
export const updateUserAddress = (
  e,
  token,
  beforeEditUserInfo,
  navigate,
  toast,
  detailAddress
) => {
  e.preventDefault();
  const formData = new FormData();
  const url = `${process.env.REACT_APP_API}/auths`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  const updateBody2 = {
    loginId: beforeEditUserInfo.loginId,
    loginPwd: beforeEditUserInfo.loginPwd,
    nickname: beforeEditUserInfo.nickname,
    email: beforeEditUserInfo.email,
    address: beforeEditUserInfo.address + " " + detailAddress,
    role: beforeEditUserInfo.role,
    sns: beforeEditUserInfo.sns,
    status: beforeEditUserInfo.status,
    ageGroup: beforeEditUserInfo.ageGroup,
    married: beforeEditUserInfo.married,
    type: "회원정보 수정",
    profileImgOriginName: beforeEditUserInfo.profileImgOriginName,
    profileImgSaveName: beforeEditUserInfo.profileImgSaveName,
    profileImgSaveUrl: beforeEditUserInfo.profileImgSaveUrl,
  };

  const updateBodyJson = JSON.stringify(updateBody2);
  const updateBodyBlob = new Blob([updateBodyJson], {
    type: "application/json",
  });

  const profilePictureBlob = new Blob([""]);

  formData.append("updateAuthRequest", updateBodyBlob);
  formData.append("file", profilePictureBlob);

  axios
    .put(url, formData, config)
    .then((response) => {
      //수정된 데이터 다시 가져와서 리다이렉트 하기
      toast.success(response.data);
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
          navigate(`/user/edit/menu`, {
            replace: true,
            state: resonse.data,
          });
        })
        .catch((error) => {
          new Error(error);
          toast.error(
            "변경된 주소 정보를 가져오는데 실패했습니다. 관리자에게 문의하세요"
          );
        });
    })
    .catch((error) => {
      new Error(error);
      toast.error("주소 변경에 실패했습니다. 관리자에게 문의하세요.");
    });
};

/** 사용자 비밀번호 수정 */
export const updateUserPassword = (
  e,
  beforeEditUserInfo,
  checkPasswords,
  token,
  oldPassword,
  newPassword,
  navigate,
  toast
) => {
  e.preventDefault();

  if (!checkPasswords()) return;

  const formData = new FormData();
  const url = `${process.env.REACT_APP_API}/auths`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  const updateBody2 = {
    loginId: beforeEditUserInfo.loginId,
    loginPwd: beforeEditUserInfo.loginPwd,
    oldPwd: oldPassword,
    newPwd: newPassword,
    email: beforeEditUserInfo.email,
    address: beforeEditUserInfo.address,
    role: beforeEditUserInfo.role,
    nickname: beforeEditUserInfo.nickname,
    sns: beforeEditUserInfo.sns,
    status: beforeEditUserInfo.status,
    ageGroup: beforeEditUserInfo.ageGroup,
    married: beforeEditUserInfo.married,
    profileImgOriginName: beforeEditUserInfo.profileImgOriginName,
    profileImgSaveName: beforeEditUserInfo.profileImgSaveName,
    profileImgSaveUrl: beforeEditUserInfo.profileImgSaveUrl,
    type: "비밀번호 수정",
  };

  const updateBodyJson = JSON.stringify(updateBody2);
  const updateBodyBlob = new Blob([updateBodyJson], {
    type: "application/json",
  });

  const profilePictureBlob = new Blob([""]);

  formData.append("updateAuthRequest", updateBodyBlob);
  formData.append("file", profilePictureBlob);

  axios
    .put(url, formData, config)
    .then((response) => {
      //수정된 데이터 다시 가져와서 리다이렉트 하기
      toast.success(response.data);
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
          navigate(`/user/edit/menu`, {
            replace: true,
            state: resonse.data,
          });
        })
        .catch((error) => {
          new Error(error);
          toast.error(
            "변경된 비밀번호 정보를 가져오는데 실패했습니다. 관리자에게 문의하세요"
          );
        });
    })
    .catch((error) => {
      new Error(error);
      toast.error("비밀번호 변경에 실패했습니다. 관리자에게 문의하세요.");
    });
};

/** 입력된 아이디의 중복 여부를 확인하는 핸들러 */
export const checkIsDuplicatedId = (
  id,
  checkIsIdOrNicknameEmpty,
  toast,
  setIsDuplicatedIdChecked,
  isDuplicatedIdChecked
) => {
  if (!checkIsIdOrNicknameEmpty("id")) return;

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
        toast.success("사용 가능한 아이디입니다.");
        setIsDuplicatedIdChecked(!isDuplicatedIdChecked);
      }
    })
    .catch((error) => {
      new Error(error);
      if (error.response.status === 400) {
        toast.error("이미 존재하는 아이디입니다.");
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
  if (!checkIsIdOrNicknameEmpty("nickname")) return;

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
        toast.success("사용 가능한 닉네임입니다.");
        setIsDuplicatedNicknameChecked(true);
      }
    })
    .catch((error) => {
      new Error(error);
      if (error.response.status === 400) {
        toast.error("이미 존재하는 닉네임입니다.");
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
  toast,
  navigate,
  printFormData,
  isNaverUserPage,
  token
) => {
  const formData = new FormData();
  e.preventDefault();

  // 중복체크
  if (!checkIsDuplicationButtonClicked()) return;

  const ErrorCheck = Object.values(inputError).every((element) => {
    return !element;
  });

  if (ErrorCheck) {
    let url;

    const [profileImgSaveUrl] = base64ImgSrcToImgBinaryData(
      uploadedProfilePicture
    );

    let signUpBody;
    // 네이버 회원가입용 signUpBody
    if (isNaverUserPage) {
      url = `${process.env.REACT_APP_API}/signin/naver`;
      signUpBody = {
        nickname: userInformation.nickname,
        email: userInformation.email,
        ageGroup: userInformation.age,
        married: userInformation.marriage,
        address: `${userInformation.address} ${userInformation.detailAddress}`,
        sns: "YES",
      };
      // 일반 회원가입용 signUpBody
    } else {
      url = `${process.env.REACT_APP_API}/auths`;
      signUpBody = {
        loginId: userInformation.id,
        loginPwd: userInformation.password,
        email: userInformation.email,
        married: userInformation.marriage,
        nickname: userInformation.nickname,
        sns: "NO",
        address: `${userInformation.address} ${userInformation.detailAddress}`,
        ageGroup: userInformation.age,
      };
    }

    let updateBody;
    let updateBody2;
    //회원수정에서 프로필 이미지를 변경했을 때의 Body
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
        type: "회원정보 수정",
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
        Authorization: isEditUserPage ? token : "",
      },
      timeout: 3000,
    };
    //회원수정
    if (isEditUserPage) {
      //프로필 이미지가 변경되었다면
      if (uploadedProfilePicture.slice(0, 4) == "data") {
        const updateBodyJson = JSON.stringify(updateBody);
        const updateBodyBlob = new Blob([updateBodyJson], {
          type: "application/json",
        });

        const [profilePictureBinaryData, profilePictureMimeType] =
          base64ImgSrcToImgBinaryData(uploadedProfilePicture);

        const profilePictureBlob = new Blob([profilePictureBinaryData], {
          type: profilePictureMimeType,
        });

        formData.append("updateAuthRequest", updateBodyBlob);
        formData.append("file", profilePictureBlob);
      }
      //프로필 이미지가 변경되지 않았다면
      else {
        const updateBodyJson = JSON.stringify(updateBody2);
        const updateBodyBlob = new Blob([updateBodyJson], {
          type: "application/json",
        });

        const profilePictureBlob = new Blob([""]);

        formData.append("updateAuthRequest", updateBodyBlob);
        formData.append("file", profilePictureBlob);
      }

      // 회원수정
      axios
        .put(url, formData, config)
        .then((response) => {
          //수정된 데이터 다시 가져와서 리다이렉트 하기
          toast.success(response.data);
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
              navigate("/user/edit/menu", {
                replace: true,
                state: resonse.data,
              });
            })
            .catch((error) => {
              new Error(error);
              toast.error(
                "수정된 데이터를 가져오는데 실패했습니다. 관리자에게 문의하세요"
              );
            });
        })
        .catch((error) => {
          new Error(error);
          toast.error("회원정보 변경에 실패했습니다. 관리자에게 문의하세요.");
        });
    }
    //회원가입
    else {
      const signUpBodyJson = JSON.stringify(signUpBody);
      const signUpBodyBlob = new Blob([signUpBodyJson], {
        type: "application/json",
      });
      const [profilePictureBinaryData, profilePictureMimeType] =
        base64ImgSrcToImgBinaryData(uploadedProfilePicture);

      const profilePictureBlob = new Blob([profilePictureBinaryData], {
        type: profilePictureMimeType,
      });

      if (isNaverUserPage) {
        formData.append("createOAuthRequest", signUpBodyBlob);
      } else {
        formData.append("createAuthRequest", signUpBodyBlob);
      }

      formData.append("file", profilePictureBlob);

      printFormData(formData);
      axios
        .post(url, formData, config)
        .then((response) => {
          if (response.data.accessToken) {
            localStorage.setItem("token", response.data.accessToken);
            navigate(`/`, { replace: true });
          } else {
            navigate(`/login`, { replace: true });
          }
        })
        .catch((error) => {
          toast.error("회원가입에 실패했습니다. 관리자에게 문의하세요.");
        });
    }
  } else {
    toast.warn("모든 값을 입력해주세요.");
  }
};

/** 회원탈퇴 */
export const withdrawUser = (
  e,
  beforeEditUserInfo,
  passwordRef,
  token,
  navigate,
  toast,
  setIsLoggedIn
) => {
  e.preventDefault();

  const formData = new FormData();
  const url = `${process.env.REACT_APP_API}/auths`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  const updateBody2 = {
    loginId: beforeEditUserInfo.loginId,
    loginPwd: passwordRef.current.value,
    email: beforeEditUserInfo.email,
    married: beforeEditUserInfo.married,
    nickname: beforeEditUserInfo.nickname,
    address: beforeEditUserInfo.address,
    ageGroup: beforeEditUserInfo.ageGroup,
    status: "WITHDRAWL",
    sns: beforeEditUserInfo.sns,
    role: beforeEditUserInfo.role,
    profileImgOriginName: beforeEditUserInfo.profileImgOriginName,
    profileImgSaveName: beforeEditUserInfo.profileImgSaveName,
    profileImgSaveUrl: beforeEditUserInfo.profileImgSaveUrl,
    type: "회원 탈퇴",
  };

  const updateBodyJson = JSON.stringify(updateBody2);
  const updateBodyBlob = new Blob([updateBodyJson], {
    type: "application/json",
  });

  formData.append("updateAuthRequest", updateBodyBlob);

  axios
    .put(url, formData, config)
    .then((response) => {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/withdrawal-message");
    })
    .catch((error) => {
      new Error(error);
      toast.error("회원 탈퇴에 실패했습니다. 관리자에게 문의하세요.");
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

/** 코스 삭제 */
export const deleteCourse = (id, navigate, toast, token) => {
  const url = `${process.env.REACT_APP_API}/cosmosts/${id}`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .delete(url, config)
    .then((response) => {
      navigate("/");
    })
    .catch((error) => {
      new Error(error);
      toast.error("코스 삭제 도중 오류가 발생했습니다. 관리자에게 문의하세요.");
    });
};

/** 카테고리 조회 */
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
  const url = `${process.env.REACT_APP_API}/cosmosts/${courseId}?filter=frame`;
  const config = { timeout: 3000 };

  if (!courseId) return;

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
            case "해당 코스의 리뷰가 존재하지 않습니다":
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
  checkCourseReviewValues,
  courseDetail,
  reviewContentRef,
  rateRef,
  toast,
  token
) => {
  if (!checkCourseReviewValues()) return;

  const url = `${process.env.REACT_APP_API}/comments`;
  const body = {
    courseId: courseDetail.id,
    courseReviewContent: reviewContentRef.current.value,
    rate: rateRef.current,
    type: "courseReview",
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .post(url, body, config)
    .then((response) => {
      reviewContentRef.current.value = "";
      window.location.replace(`/course-detail/${courseDetail.id}`);
    })
    .catch((error) => {
      new Error(error);
      toast.error("오류가 발생했습니다. 관리자에게 문의하세요.");
    });
};

/** 코스 리뷰 수정 */
export const updateCourseReview = (
  checkEditCourseReviewValues,
  courseDetail,
  edittedReviewContentRef,
  edittedReviewRateRef,
  token,
  setIsCourseReviewEditTextareaOpened
) => {
  if (!checkEditCourseReviewValues()) return;

  const url = `${process.env.REACT_APP_API}/comments/${courseDetail.id}`;
  const body = {
    courseReviewContent: edittedReviewContentRef.current.value,
    rate: edittedReviewRateRef.current,
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
      setIsCourseReviewEditTextareaOpened(false);
      window.location.replace(`/course-detail/${courseDetail.id}`);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 코스 리뷰 삭제 */
export const deleteCourseReview = (
  courseDetail,
  setIsDisplayed,
  toast,
  token
) => {
  const url = `${process.env.REACT_APP_API}/comments/${courseDetail.id}/review`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .delete(url, config)
    .then((response) => {
      setIsDisplayed(false);
    })
    .catch((error) => {
      new Error(error);
      toast.error("코스 삭제 도중 오류가 발생했습니다. 관리자에게 문의하세요.");
    });
};

/* Popularity */
/** 단일 코스 평균 평점을 가져오는 데 성공하면 콜백함수를 호출하는 함수
 *  courseID : 코스 ID를 나타내는 Number
 *  thenCallback : 값을 가져오는 데 성공할 시 호출할 콜백함수
 *  errorCallback : 값을 가져오는 데 실패할 시 호출할 콜백함수
 */
export const getCourseAverageRate = (courseId, thenCallback, errorCallback) => {
  if (!courseId) return;

  const url = `${process.env.REACT_APP_API}/view?rate=average&course=${courseId}`;
  const config = {
    timeout: 3000,
  };

  if (!courseId) return;

  axios.get(url, config).then(thenCallback).catch(errorCallback);
};

/** 해당 코스의 좋아요 개수를 가져온 뒤 코스 좋아요 개수를 state로 업데이트 시켜주는 함수.
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
export const getCourseLikeCount = (courseId, setState) => {
  if (!courseId) return;

  const url = `${process.env.REACT_APP_API}/popularities/${courseId}?filter=count&type=cosmost`;
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
  navigate,
  compareAuthorIdWithLoggedInUserId,
  courseReview,
  loggedInUserId,
  toast,
  setIsLikedCourseReviewChanged,
  isLikedCourseReviewChanged,
  token
) => {
  if (!checkIsLoggedIn(token, navigate)) return;

  if (
    !compareAuthorIdWithLoggedInUserId(
      courseReview.reviewerId,
      loggedInUserId,
      toast
    )
  )
    return;

  const URLS = {
    like: `${process.env.REACT_APP_API}/popularities`,
    unlike: `${process.env.REACT_APP_API}/popularities/${id}/review`,
  };
  const body = {
    courseReviewId: id,
    type: "courseReviewThumbsup",
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  if (type === "like") {
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
  navigate,
  compareAuthorIdWithLoggedInUserId,
  courseDetail,
  loggedInUserId,
  toast,
  setIsLikedCourseChanged,
  isLikedCourseChanged,
  token
) => {
  if (!checkIsLoggedIn(token, navigate)) return;

  if (
    !compareAuthorIdWithLoggedInUserId(
      courseDetail.authorId,
      loggedInUserId,
      toast
    )
  )
    return;

  const URLS = {
    like: `${process.env.REACT_APP_API}/popularities`,
    unlike: `${process.env.REACT_APP_API}/popularities/${id}/cosmost`,
  };
  const url = URLS[type];
  const body = {
    courseId: id,
    type: "course",
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  if (type === "like") {
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
  if (!token) return;

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
  isFollowedChanged,
  token
) => {
  const URLS = {
    follow: `${process.env.REACT_APP_API}/popularities`,
    unfollow: `${process.env.REACT_APP_API}/popularities/${followId}/following`,
  };
  const url = URLS[type];
  const body = {
    followingId: followId,
    type: "follow",
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  if (type === "follow") {
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
export const fetchIsFollowed = (id, setIsFollowed, token) => {
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

/** 코스 리뷰 좋아요 여부 확인 */
export const likedCourseReview = (id, setIsLikedCourseReview, token) => {
  if (!token) return;

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

/** 나의 팔로워 수 조회 */
export const fetchMyFollowersCount = (token, setMyFollowersCount) => {
  const url = `${process.env.REACT_APP_API}/popularities?filter=auth&type=follower&sort=id,desc&page=0&size=4`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => setMyFollowersCount(response.data[0].readMyFollewerCnt))
    .catch((error) => new Error(error));
};

/** 나의 팔로잉 수 조회 */
export const fetchMyFollowingsCount = (token, setMyFollowingsCount) => {
  const url = `${process.env.REACT_APP_API}/popularities?filter=auth&type=following&sort=id,desc&page=0&size=4`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) =>
      setMyFollowingsCount(response.data[0].readMyFollowingCnt)
    )
    .catch((error) => new Error(error));
};

/* Board */
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

/** 신고하기 */
export const postReport = (
  checkReportInput,
  reportTitle,
  reportContent,
  reportCategory,
  setIsReportFormOpened,
  isReportFormOpened,
  toast,
  token
) => {
  if (!checkReportInput()) return;

  const url = `${process.env.REACT_APP_API}/boards`;
  const body = {
    reportTitle: reportTitle,
    reportContent: reportContent,
    createReportCategoryListRequestList: [
      {
        reportCategory: +reportCategory.current.value,
      },
    ],
  };
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .post(url, body, config)
    .then((response) => {
      setIsReportFormOpened(!isReportFormOpened);
    })
    .catch((error) => {
      new Error(error);
      toast.error("오류가 발생했습니다. 관리자에게 문의하세요.");
    });
};

/** 신고 수정 */
export const updateReport = (
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
  toast,
  token
) => {
  if (!checkReportInput()) return;

  const url = `${process.env.REACT_APP_API}/boards/${id}`;
  const body = {
    reportTitle: reportTitle,
    reportContent: reportContent,
    updateReportCategoryListRequestList: [
      {
        id: report.reportCategoryList[0].id,
        reportCategory: +reportCategory.current.value,
      },
    ],
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
      setIsHistoriesChanged(!isHistoriesChanged);
      setIsReportFormOpened(!isReportFormOpened);
      window.location.replace(`/user/${report.reporterId}/report-histories`);
    })
    .catch((error) => {
      new Error(error);
      toast.error("오류가 발생했습니다. 관리자에게 문의하세요.");
    });
};

/** 신고 내역 삭제 */
export const deleteMyReport = (report, token, setIsDisplayed) => {
  const url = `${process.env.REACT_APP_API}/boards/${report.id}`;
  const config = {
    headers: {
      Authorization: token,
    },
    timeout: 3000,
  };

  axios
    .delete(url, config)
    .then((response) => {
      setIsDisplayed(false);
    })
    .catch((error) => new Error(error));
};

/** 신고 답변 조회 */
export const fetchAnswerAboutMyReport = (
  report,
  setAnswerAboutReport,
  setIsAnswered
) => {
  const url = `${process.env.REACT_APP_API}/comments?filter=auth&type=answer`;
  const config = {
    headers: {
      Authorization: report.id,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => {
      setAnswerAboutReport(response.data);
      setIsAnswered(true);
    })
    .catch((error) => {
      setIsAnswered(false);
      new Error(error);
    });
};
