/* libraries */
import axios from "axios";

/** base64ImgSrc 이미지 경로를 바이너리 데이터로 변환한 뒤 변환한 바이너리 데이터와 MIME-Type을 배열로 반환하는 함수. */
const base64ImgSrcToImgBinaryData = (imgSrc) => {
  let returnArr = [];
  let Base64DataReg;
  const mimeTypeReg = /data:(.*);/;

  if (imgSrc.slice(0, 3) === "url") {
    Base64DataReg = /,(.*)\)/;
  } else {
    Base64DataReg = /,(.*)/;
  }

  if (imgSrc !== "none") {
    const itemMimeType = imgSrc.match(mimeTypeReg)
      ? imgSrc.match(mimeTypeReg)[1]
      : null;
    const itemBase64Data = imgSrc.match(Base64DataReg)
      ? imgSrc.match(Base64DataReg)[1]
      : null;
    const itemDecodeData = atob(itemBase64Data);

    // 디코딩된 문자열을 바이너리 데이터로 변환.
    let itemDecodeDataLength = itemDecodeData.length;
    let itemBinaryData = new Uint8Array(itemDecodeDataLength);
    while (itemDecodeDataLength--) {
      itemBinaryData[itemDecodeDataLength] =
        itemDecodeData.charCodeAt(itemDecodeDataLength);
    }

    returnArr.push(itemBinaryData);
    returnArr.push(itemMimeType);
    return returnArr;
  }

  returnArr.push(null);
  returnArr.push(null);
  return returnArr;
};

/** 네이버맵을 생성하고 생성된 네이버 맵을 반환하는 함수
 * elementId = string
 * defaultCoordinate = {
    latitude: Number,
    longitude: Number,
  }
*/
const createNaverMap = (
  elementId = "map",
  defaultCoordinate = {
    latitude: 35.179816,
    longitude: 129.0750223,
  }
) => {
  const { naver } = window;
  const map = new naver.maps.Map(elementId, {
    center: new naver.maps.LatLng(
      defaultCoordinate.latitude,
      defaultCoordinate.longitude
    ),
    zoom: 10,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: naver.maps.MapTypeControlStyle.BUTTON,
      position: naver.maps.Position.TOP_LEFT,
    },
    zoomControl: true,
    zoomControlOptions: {
      style: naver.maps.ZoomControlStyle.SMALL,
      position: naver.maps.Position.TOP_RIGHT,
    },
    scaleControl: false,
    logoControl: false,
    mapDataControl: false,
  });
  return map;
};

/** 네이버맵에 마커를 등록하고 마커에 이벤트 리스너들을 등록하는 함수.
 * map = object
 * markerInfo = {
    latitude : Number
    longitude : Number
    eventList : [
        {
            eventName : string
            eventListener : function
        },
        ...
    ]
  }
  * 반환값 : object(등록한 마커)
*/
const addNaverMapMarker = (map = null, markerInfo = null) => {
  const { naver } = window;
  let registeredMarker = null;

  if (map && markerInfo) {
    registeredMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(
        markerInfo.latitude,
        markerInfo.longitude
      ),
      map: map,
    });

    markerInfo.eventList.map((item, index) => {
      naver.maps.Event.addListener(
        registeredMarker,
        item.eventName,
        item.eventListener
      );
    });
  }

  return registeredMarker;
};

/** 네이버맵의 마커에 추가설명을 표시하는 함수.
 *  map : object
 *  marker : object
 *  elementString : HTML 구조 문자열(Element.innerHTML 등)을 나타내는 string.
 *  style : elementString 에 적용할 style CSS 속성값이 저장된 style.
 *  반환값 : 추가설명을 나타내는 Element(object)
 * */
const addNaverMapMarkerInfo = (map, marker, elementString, style) => {
  const { naver } = window;
  const infowindow = new naver.maps.InfoWindow({
    content: elementString,
    ...style,
  });

  infowindow.close();
  return infowindow;
};

/** FormData에 등록된 key와 value를 출력하는 함수
 *
 */
const printFormData = (formData) => {
  for (let key of formData.keys()) {
    console.log(key, ":", formData.get(key));
  }
};

/** 단일 코스 평균 평점을 가져오는 데 성공하면 콜백함수를 호출하는 함수
 *  courseID : 코스 ID를 나타내는 Number
 *  thenCallback : 값을 가져오는 데 성공할 시 호출할 콜백함수
 *  errorCallback : 값을 가져오는 데 실패할 시 호출할 콜백함수
 */
const getCoursePointAverage = (courseID, thenCallback, errorCallback) => {
  const url = `${process.env.REACT_APP_COMMENT1_IP}/v1/view?rate=average&course=${courseID}`;
  const config = {
    timeout: 3000,
  };

  axios.get(url, config).then(thenCallback).catch(errorCallback);
};

/** 코스 작성자 정보를 가져온 후 가져온 코스 작성자 정보를 state로 업데이트 시켜주는 함수
 *  authorID : 코스 작성자 ID를 나타내는 Number
 *  setState : 가져온 값을 state 값으로 변경시켜주기 위한 Function
 */
const getCourseAuthor = (id, setState) => {
  const url = `${process.env.REACT_APP_AUTH_IP}/v1/view/info?id=author-id`;
  const config = {
    headers: {
      Authorization: id,
    },
    timeout: 3000,
  };
  axios
    .get(url, config)
    .then((result) => {
      console.log(result);
      setState(result.data);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 해당 코스의 리뷰 정보를 가져오는 함수.
 *  courseID : 코스 ID를 나타내는 Number
 *  thenCallback : 리뷰를 가져오는데 성공했을 때 호출할 콜백
 *  errorCallback : 리뷰를 가져오는데 실패했을 때 호출할 콜백
 */
const getCourseReviews = (courseID, setState) => {
  const url = `${process.env.REACT_APP_COMMENT2_IP}/v1/comments?type=review`;
  const config = {
    headers: {
      Authorization: courseID,
    },
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((response) => setState(response.data))
    .catch((error) => {
      new Error(error);
    });
};

/** 해당 코스의 좋아요 개수를 가져온 뒤 코스 좋아요 개수를 state로 업데이트 시켜주는 함수.
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
const getCourseGoodCount = (courseID, setState) => {
  const url = `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${courseID}?filter=count&type=cosmost`;
  const config = {
    timeout: 3000,
  };

  axios
    .get(url, config)
    .then((result) => {
      setState(result.data);
    })
    .catch((error) => {
      new Error(error);
    });
};

/** 코스의 정보를 가져온 뒤 state로 업데이트 시켜주는 함수.
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
const getCourseDetail = (courseID, setState) => {
  const url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts/${courseID}`;
  const config = { timeout: 3000 };

  axios
    .get(url, config)
    .then((response) => {
      setState(response.data);
    })
    .catch((error) => {
      alert("코스 정보 가져오기 실패");
    });
};

/** 코스 평균 평점을 기준으로 모든 코스를 페이지 단위로 조회하여 state로 업데이트하는 함수
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
const viewAllcourseAverageRatingSort = (page, setState) => {
  const url = `${process.env.REACT_APP_COSMOST_IP}/v1/view/ranking?order=rate&sort=desc&page=${page}&size=4`;
  const config = { timeout: 3000 };

  axios
    .get(url, config)
    .then((response) => {
      setState(response.data);
    })
    .catch((error) => {
      alert("코스 평균 평점 기준으로 가져오기 실패");
    });
};

/** 단일 코스의 조회용 데이터를 가져와 state로 업데이트하는 함수
 *  courseID : 코스 ID를 나타내는 Number
 *  setState : 업데이트해줄 함수
 */
const getSingleCourseView = (courseID, setState) => {
  const url = `${process.env.REACT_APP_COSMOST_IP}/v1/cosmosts/${courseID}?filter=frame`;
  const config = { timeout: 3000 };

  axios
    .get(url, config)
    .then((response) => {
      let singleCourseViewData = response.data;
      getCoursePointAverage(
        courseID,
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
              cpaArr = [{ courseId: courseID, courseAvgRate: 0 }];
              break;
            default:
              console.log(error);
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
      console.log("단일 코스의 조회용 데이터 가져오기 실패");
    });
};

export {
  base64ImgSrcToImgBinaryData,
  createNaverMap,
  addNaverMapMarker,
  addNaverMapMarkerInfo,
  printFormData,
  getCoursePointAverage,
  getCourseAuthor,
  getCourseReviews,
  getCourseGoodCount,
  getCourseDetail,
  viewAllcourseAverageRatingSort,
  getSingleCourseView,
};
