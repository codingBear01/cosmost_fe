/* CONSTANTS */
const { Kakao, location } = window;
const SHARED_URL = location.href;

/** Kakao 공유하기 함수 */
export const sharingByKakao = (data) => {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: data.courseTitle,
      description: data.courseComment,
      imageUrl: data.placeImgList[0].placeImgUrl,
      link: {
        webUrl: SHARED_URL,
        mobileWebUrl: SHARED_URL,
      },
    },
    buttons: [
      {
        title: '자세히 보기',
        link: {
          webUrl: SHARED_URL,
          mobileWebUrl: SHARED_URL,
        },
      },
    ],
  });
};

/* Image */
/** base64ImgSrc 이미지 경로를 바이너리 데이터로 변환한 뒤 변환한 바이너리 데이터와 MIME-Type을 배열로 반환하는 함수. */
export const base64ImgSrcToImgBinaryData = (imgSrc) => {
  let returnArr = [];
  let Base64DataReg;
  const mimeTypeReg = /data:(.*);/;

  if (imgSrc.slice(0, 3) === 'url') {
    Base64DataReg = /,(.*)\)/;
  } else {
    Base64DataReg = /,(.*)/;
  }

  if (imgSrc !== 'none') {
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

/** FormData에 등록된 key와 value를 출력하는 함수 */
export const printFormData = (formData) => {
  for (let key of formData.keys()) {
    console.log(key, ':', formData.get(key));
  }
};

/* Naver Map */
/** 네이버맵을 생성하고 생성된 네이버 맵을 반환하는 함수
 * elementId = string
 * defaultCoordinate = {
    latitude: Number,
    longitude: Number,
  }
*/
export const createNaverMap = (
  elementId = 'map',
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
export const addNaverMapMarker = (map = null, markerInfo = null) => {
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
export const addNaverMapMarkerInfo = (map, marker, elementString, style) => {
  const { naver } = window;
  const infowindow = new naver.maps.InfoWindow({
    content: elementString,
    ...style,
  });

  infowindow.close();
  return infowindow;
};

/* Validation Handlers */
export const checkIsLoggedIn = (token, transferToLoginPage) => {
  if (!token) {
    if (
      window.confirm(
        '좋아요를 하기 전에 로그인해주세요. 로그인 창으로 이동하시겠습니까?'
      )
    ) {
      transferToLoginPage('/login');
    }
    return false;
  }
  return true;
};

export const compareAuthorIdWithLoggedInUserId = (authorId, userId, toast) => {
  if (authorId === userId) {
    toast.warn('자신의 글은 좋아요할 수 없습니다.');
    return false;
  }
  return true;
};
