//함수 집합

// base64ImgSrc 이미지 경로를 바이너리 데이터로 변환한 뒤 변환한 바이너리 데이터와 MIME-Type을 배열로 반환하는 함수.
const base64ImgSrcToImgBinaryData = (imgSrc) => {
  let returnArr = [];
  const mimeTypeReg = /data:(.*);/;
  const Base64DataReg = /,(.*)/;
  if (imgSrc !== "none") {
    const itemMimeType = imgSrc.match(mimeTypeReg)
      ? imgSrc.match(mimeTypeReg)[1]
      : null;
    const itemBase64Data = imgSrc.match(Base64DataReg)
      ? imgSrc.match(Base64DataReg)[1]
      : null;
    const itemBinaryData = atob(itemBase64Data);

    let itemBinaryDataLength = itemBinaryData.length;
    let itemUnicodeBinaryData = new Uint8Array(itemBinaryDataLength);
    while (itemBinaryDataLength--) {
      itemUnicodeBinaryData[itemBinaryDataLength] =
        itemBinaryData.charCodeAt(itemBinaryDataLength);
    }

    returnArr.push(itemUnicodeBinaryData);
    returnArr.push(itemMimeType);
    return returnArr;
  }

  return null;
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
 *
 *  반환값 : 추가설명을 나타내는 Element(object)
 * */
const displayNaverMapMarkerInfo = (map, marker, elementString) => {
  const { naver } = window;
  const infowindow = new naver.maps.InfoWindow({
    content: elementString,
  });

  infowindow.open(map, marker);

  return infowindow;
};
export {
  base64ImgSrcToImgBinaryData,
  createNaverMap,
  addNaverMapMarker,
  displayNaverMapMarkerInfo,
};
