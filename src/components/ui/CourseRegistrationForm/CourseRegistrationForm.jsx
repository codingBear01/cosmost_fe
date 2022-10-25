/* libraries */
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";

/* components */
import * as S from "./styled";
import { Button, Input, UtilDiv } from "../..";
/* icons */
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Icon } from "../..";
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from "../../../style";
import {
  base64ImgSrcToImgBinaryData,
  CATEGORIES,
  createNaverMap,
} from "../../../store";
import { useState } from "react";
import styled from "styled-components";
import { FaSleigh } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { MdOutlineNotInterested } from "react-icons/md";
import axios from "axios";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import { HeaderSearchBar } from "../../common/Header";
import { addNaverMapMarker } from "../../../store";

// 등록한 코스이미지 및 해시태그를 삭제하는 X 버튼을 나타내는 컴포넌트
const ItemRemoveButton = styled(AiIcons.AiOutlineClose)`
  position: absolute;
  top: ${({ top }) => top || "0"};
  right: ${({ right }) => right || "0"};
  width: 2rem;
  height: 2rem;
`;

function CourseRegistrationForm() {
  const navigate = useNavigate();

  /* 코스 이미지 업로드에 쓰이는 useRef */
  const courseImgInputRef = useRef();

  //등록된 코스 이미지 경로를 나타내는 state
  const [registeredCourseImgState, setRegisteredCourseImgState] = useState({
    imgSrc0: "none",
    imgSrc1: "none",
    imgSrc2: "none",
    imgSrc3: "none",
    imgSrc4: "none",
  });

  //네이버 지도 관련 state
  const [naverMapState, SetNaverMapState] = useState({
    naverMapEnable: false,
    naverMapHandle: null,
    naverMapMarker: [],
  });

  //네이버 검색 API에 전달할 쿼리(지역구, 키워드)를 나타내는 state
  const [naverMapQuery, SetNaverMapQuery] = useState({
    addressGu: "중구",
    keyword: "",
  });

  //지도에서 장소추가 에서 추가한 장소 5개를 나타내는 state
  const [placeAdd, setPlaceAdd] = useState({
    choicePlace0: "",
    choicePlace1: "",
    choicePlace2: "",
    choicePlace3: "",
    choicePlace4: "",
  });

  //지도에서 장소추가 에서 추가한 장소 5개의 좌표를 나타내는 state
  const [placeAddCoordinate, setPlaceAddCoordinate] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  //지도에서 장소추가 에서 추가한 장소 5개의 코멘트를 나타내는 state
  const [placeAddComment, setPlaceAddComment] = useState(["", "", "", "", ""]);

  //해시태그에서 사용자가 입력한 해시태그와 등록된 해시태그 5개를 나타내는 state
  const [hashTagAdd, setHashTagAdd] = useState({
    inputHashTag: "",
    addHashTags: Array.from(Array(5)),
  });

  //사용자가 입력한 코스 상세정보를 나타내는 state
  const [courseText, setCourseText] = useState("");

  //사용자가 입력한 코스 타이틀을 나타내는 state
  const [courseTitle, setCourseTitle] = useState("");

  //백엔드로부터 가져온 카테고리 목록를 나타내는 state
  const [categoryLocalList, setCategoryLocalList] = useState([]);
  const [categoryThemeList, setCategoryThemeList] = useState([]);

  //사용자가 선택한 카테고리를 나타내는 state
  const [selectCategory, setSelectCategory] = useState({
    local: 1,
    theme: 1,
  });

  // 드래그 관련 state와 ref
  const [{ isDragging0 }, drag0] = useDrag(() => ({
    type: "0",
    collect: (monitor) => ({
      isDragging0: monitor.isDragging(),
    }),
  }));
  const [{ isDragging1 }, drag1] = useDrag(() => ({
    type: "0",
    collect: (monitor) => ({
      isDragging1: monitor.isDragging(),
    }),
  }));
  const [{ isDragging2 }, drag2] = useDrag(() => ({
    type: "0",
    collect: (monitor) => ({
      isDragging2: monitor.isDragging(),
    }),
  }));
  const [{ isDragging3 }, drag3] = useDrag(() => ({
    type: "0",
    collect: (monitor) => ({
      isDragging3: monitor.isDragging(),
    }),
  }));
  const [{ isDragging4 }, drag4] = useDrag(() => ({
    type: "0",
    collect: (monitor) => ({
      isDragging4: monitor.isDragging(),
    }),
  }));
  // 드랍 관련 state와 ref
  const [{ isOver0 }, drop0] = useDrop(
    () => ({
      accept: "0",
      drop: (item, monitor) => {
        const SourceID =
          monitor.internalMonitor.store.getState().dragOperation.sourceId;
        const targetId = monitor.targetId;
        DropCourseImg(targetId, SourceID, registeredCourseImgState);
        return undefined;
      },
      collect: (monitor) => ({
        isOver0: monitor.isOver(),
      }),
    }),
    [registeredCourseImgState]
  );

  const [{ isOver1 }, drop1] = useDrop(
    () => ({
      accept: "0",
      drop: (item, monitor) => {
        const SourceID =
          monitor.internalMonitor.store.getState().dragOperation.sourceId;
        const targetId = monitor.targetId;
        console.log(targetId);
        DropCourseImg(targetId, SourceID, registeredCourseImgState);
        return undefined;
      },
      collect: (monitor) => ({
        isOver1: monitor.isOver(),
      }),
    }),
    [registeredCourseImgState]
  );

  const [{ isOver2 }, drop2] = useDrop(
    () => ({
      accept: "0",
      drop: (item, monitor) => {
        const SourceID =
          monitor.internalMonitor.store.getState().dragOperation.sourceId;
        const targetId = monitor.targetId;
        console.log(targetId);
        DropCourseImg(targetId, SourceID, registeredCourseImgState);
        return undefined;
      },
      collect: (monitor) => ({
        isOver2: monitor.isOver(),
        SourceID2:
          monitor.internalMonitor.store.getState().dragOperation.sourceId,
      }),
    }),
    [registeredCourseImgState]
  );
  const [{ isOver3 }, drop3] = useDrop(
    () => ({
      accept: "0",
      drop: (item, monitor) => {
        const SourceID =
          monitor.internalMonitor.store.getState().dragOperation.sourceId;
        const targetId = monitor.targetId;
        DropCourseImg(targetId, SourceID, registeredCourseImgState);
        return undefined;
      },
      collect: (monitor) => ({
        isOver3: monitor.isOver(),
        SourceID3:
          monitor.internalMonitor.store.getState().dragOperation.sourceId,
      }),
    }),
    [registeredCourseImgState]
  );
  const [{ isOver4 }, drop4] = useDrop(
    () => ({
      accept: "0",
      drop: (item, monitor) => {
        const SourceID =
          monitor.internalMonitor.store.getState().dragOperation.sourceId;
        const targetId = monitor.targetId;
        console.log(targetId);
        DropCourseImg(targetId, SourceID, registeredCourseImgState);
        return undefined;
      },
      collect: (monitor) => ({
        isOver4: monitor.isOver(),
        SourceID4:
          monitor.internalMonitor.store.getState().dragOperation.sourceId,
      }),
    }),
    [registeredCourseImgState]
  );

  /*백엔드와의 API 통신을 위한 함수
    코스 카테고리의 지역값을 가져오는 API */
  const getCategroyLocal = () => {
    const url =
      "http://10.10.10.58:9002/v1/cosmosts?filter=all&category=location";
    const config = { timeout: 3000 };
    axios
      .get(url, config)
      .then((data) => {
        const CategoryLocalArr = data.data;
        setCategoryLocalList(CategoryLocalArr);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  /*백엔드와의 API 통신을 위한 함수
    코스 카테고리의 테마값을 가져오는 API */
  const getCategroyTheme = () => {
    const url = "http://10.10.10.58:9002/v1/cosmosts?filter=all&category=theme";
    const config = { timeout: 3000 };
    axios
      .get(url, config)
      .then((data) => {
        const CategoryThemeArr = data.data;
        setCategoryThemeList(CategoryThemeArr);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /* 컴포넌트 생성시 한번만 호출되는 useEffect
     카테고리 지역 목록과 카테고리 테마 목록을 가져오는 API 함수를 호출한다. */
  useEffect(() => {
    getCategroyLocal();
    getCategroyTheme();
  }, []);

  /* 등록된 코스 이미지들을 검사하여 중간에 빈 칸이 있을 경우 코스 이미지들을 왼쪽으로 당겨
     중간의 빈 칸을 없애는 코드. */
  useEffect(() => {
    Object.values(registeredCourseImgState).every((item, index, Array) => {
      if (item === "none") {
        if (index === Array.length - 1) {
          return false;
        } else if (Array[index + 1] !== "none") {
          setRegisteredCourseImgState({
            ...registeredCourseImgState,
            ["imgSrc" + index]: Array[index + 1],
            ["imgSrc" + (index + 1)]: Array[index],
          });
          return false;
        }
      }
      return true;
    });
  }, [registeredCourseImgState]);

  /* naverMapEnable state값이 변경될때마다 호출되는 Effect
     naverMapEnable이 활성화되면 네이버 지도를 생성한다. */
  useEffect(() => {
    if (naverMapState.naverMapEnable) {
      const map = createNaverMap();
      SetNaverMapState({ ...naverMapState, naverMapHandle: map });
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [naverMapState.naverMapEnable]);

  /* 드래그 앤 드랍을 한 경우 state 값을 변경하는 함수
       targetId : 드랍된 위치 
       SourceID : 드래그한 아이템
       registeredCourseImgState : 현재 state*/
  const DropCourseImg = (targetId, SourceID, registeredCourseImgState) => {
    console.log(targetId[targetId.length - 1]);
    switch (targetId[targetId.length - 1]) {
      //0번칸 드랍
      case "5":
        switch (SourceID[SourceID.length - 1]) {
          case "1":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc0: registeredCourseImgState.imgSrc1,
              imgSrc1: registeredCourseImgState.imgSrc0,
            });
            break;
          case "2":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc0: registeredCourseImgState.imgSrc2,
              imgSrc2: registeredCourseImgState.imgSrc0,
            });
            break;
          case "3":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc0: registeredCourseImgState.imgSrc3,
              imgSrc3: registeredCourseImgState.imgSrc0,
            });
            break;
          case "4":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc0: registeredCourseImgState.imgSrc4,
              imgSrc4: registeredCourseImgState.imgSrc0,
            });
            break;
          default:
            break;
        }
        break;
      //1번칸 드랍
      case "6":
        switch (SourceID[SourceID.length - 1]) {
          case "0":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc1: registeredCourseImgState.imgSrc0,
              imgSrc0: registeredCourseImgState.imgSrc1,
            });
            break;
          case "2":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc1: registeredCourseImgState.imgSrc2,
              imgSrc2: registeredCourseImgState.imgSrc1,
            });
            break;
          case "3":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc1: registeredCourseImgState.imgSrc3,
              imgSrc3: registeredCourseImgState.imgSrc1,
            });
            break;
          case "4":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc1: registeredCourseImgState.imgSrc4,
              imgSrc4: registeredCourseImgState.imgSrc1,
            });
            break;
          default:
            break;
        }
        break;
      //2번칸 드랍
      case "7":
        switch (SourceID[SourceID.length - 1]) {
          case "0":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc2: registeredCourseImgState.imgSrc0,
              imgSrc0: registeredCourseImgState.imgSrc2,
            });
            break;
          case "1":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc2: registeredCourseImgState.imgSrc1,
              imgSrc1: registeredCourseImgState.imgSrc2,
            });
            break;
          case "3":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc2: registeredCourseImgState.imgSrc3,
              imgSrc3: registeredCourseImgState.imgSrc2,
            });
            break;
          case "4":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc2: registeredCourseImgState.imgSrc4,
              imgSrc4: registeredCourseImgState.imgSrc2,
            });
            break;
          default:
            break;
        }
        break;
      //3번칸 드랍
      case "8":
        switch (SourceID[SourceID.length - 1]) {
          case "0":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc3: registeredCourseImgState.imgSrc0,
              imgSrc0: registeredCourseImgState.imgSrc3,
            });
            break;
          case "1":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc3: registeredCourseImgState.imgSrc1,
              imgSrc1: registeredCourseImgState.imgSrc3,
            });
            break;
          case "2":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc3: registeredCourseImgState.imgSrc2,
              imgSrc2: registeredCourseImgState.imgSrc3,
            });
            break;
          case "4":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc3: registeredCourseImgState.imgSrc4,
              imgSrc4: registeredCourseImgState.imgSrc3,
            });
            break;
          default:
            break;
        }
        break;
      //4번칸 드랍
      case "9":
        switch (SourceID[SourceID.length - 1]) {
          case "0":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc4: registeredCourseImgState.imgSrc0,
              imgSrc0: registeredCourseImgState.imgSrc4,
            });
            break;
          case "1":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc4: registeredCourseImgState.imgSrc1,
              imgSrc1: registeredCourseImgState.imgSrc4,
            });
            break;
          case "2":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc4: registeredCourseImgState.imgSrc2,
              imgSrc2: registeredCourseImgState.imgSrc4,
            });
            break;
          case "3":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc4: registeredCourseImgState.imgSrc3,
              imgSrc3: registeredCourseImgState.imgSrc4,
            });
            break;
          default:
            break;
        }
        break;
      default:
        return;
    }
  };

  /* 지정한 쿼리와 지도, 지도에 등록된 마크를 입력받아 쿼리를 검색한 결과를 지도에 찍어주는 함수*/
  const NaverMapSearch = (map, query, mapMarker) => {
    //map copy 하기
    console.log("mapMarker", mapMarker);
    let mapMarkerCopy = Array.from(mapMarker);
    const { naver } = window;
    const URL = "/v1/search/local.json";

    //기존에 지도에 등록된 마커 초기화
    mapMarkerCopy.forEach((Marker) => {
      Marker.setMap(null);
    });

    mapMarkerCopy = [];

    axios
      .get(URL, {
        headers: {
          "X-Naver-Client-Id": process.env.REACT_APP_X_Naver_Client_Id,
          "X-Naver-Client-Secret": process.env.REACT_APP_X_Naver_Client_Secret,
        },
        params: {
          query,
          display: 5,
          start: 1,
          sort: "comment",
        },
      })
      .then(({ data }) => {
        const items = data.items;

        items?.forEach((item, index) => {
          const x = item.mapx;
          const y = item.mapy;
          const tm128 = new naver.maps.Point(x, y);
          var latLng = naver.maps.TransCoord.fromTM128ToLatLng(tm128);

          const eventList = [
            {
              eventName: "mouseover",
              eventListener: (e) => {
                const title = `${item.address} ${item.title}`
                  .replaceAll(/<[/]*b>/g, "")
                  .replaceAll(/&amp;/g, "&");
                e.pointerEvent.target.title = title;
              },
            },
            {
              eventName: "click",
              eventListener: (e) => {
                onClickMarker(e, item);
              },
            },
          ];

          const registeredMarker = addNaverMapMarker(map, {
            latitude: latLng.y,
            longitude: latLng.x,
            eventList,
          });

          // var marker = new naver.maps.Marker({
          //   position: new naver.maps.LatLng(latLng.y, latLng.x),
          //   map: map,
          // });

          // naver.maps.Event.addListener(marker, "mouseover", function (e) {
          //   const title = `${item.address} ${item.title}`.replaceAll(
          //     /<[/]*b>/g,
          //     ""
          //   );
          //   e.pointerEvent.target.title = title;
          // });

          // naver.maps.Event.addListener(marker, "click", (e) => {
          //   onClickMarker(e, item);
          // });

          mapMarkerCopy.push(registeredMarker);
        });
        SetNaverMapState({ ...naverMapState, naverMapMarker: mapMarkerCopy });
      })
      .catch((error) => {
        console.log(error);
        alert(
          "네이버 검색 API와의 통신이 실패했습니다. 관리자에게 문의해주세요"
        );
      });
  };

  //네이버 지도에 등록된 마커를 클릭했을 때 호출할 이벤트 핸들러.
  const onClickMarker = (e, markerItem) => {
    const title = `${markerItem.title}`
      .replaceAll(/<[/]*b>/g, "")
      .replaceAll(/&amp;/g, "&");
    Object.values(placeAdd).every((item, index) => {
      if (item == "") {
        setPlaceAdd({
          ...placeAdd,
          [`choicePlace${index}`]: title,
        });
        SetNaverMapState({ ...naverMapState, naverMapEnable: false });
        return false;
      }
      return true;
    });

    const { naver } = window;
    const tm128 = new naver.maps.Point(markerItem.mapx, markerItem.mapy);
    const latLng = naver.maps.TransCoord.fromTM128ToLatLng(tm128);
    const x = latLng.x;
    const y = latLng.y;

    placeAddCoordinate.every((item, index) => {
      if (item.x === 0) {
        const tempPlaceAddCoordinate = Array.from(placeAddCoordinate);
        tempPlaceAddCoordinate[index].x = x;
        tempPlaceAddCoordinate[index].y = y;
        setPlaceAddCoordinate(tempPlaceAddCoordinate);
        return false;
      }
      return true;
    });
  };

  /*사용자가 코스 이미지 등록 버튼을 클릭한 경우 호출할 핸들러.
    마지막 코스 이미지가 등록되지 않았다면 input[type=file]에 클릭 이벤트를 발생시킨다.*/
  const onClickUploadCourseImg = (e) => {
    e.preventDefault();
    if (registeredCourseImgState.imgSrc4 === "none") {
      courseImgInputRef.current.click();
    } else {
      alert("모든 코스 이미지가 등록되었습니다.");
    }
  };

  /* 사용자가 코스 이미지를 선택했을 때 호출할 핸들러
     선택한 코스 이미지의 URL 경로를 state로 전달한다. */
  const onChangeCourseImg = (e) => {
    const FileReaderObject = new FileReader();
    console.log("B");
    FileReaderObject.onload = () => {
      Object.values(registeredCourseImgState).every((item, index) => {
        if (item === "none") {
          setRegisteredCourseImgState({
            ...registeredCourseImgState,
            ["imgSrc" + index]: `url(${FileReaderObject.result})`,
          });
          e.target.value = "";
          return false;
        }
        return true;
      });
    };
    FileReaderObject.readAsDataURL(e.target.files.item(0));
  };

  /* 사용자가 코스 이미지 삭제 버튼을 클릭했을 때 호출할 핸들러
     인덱스에 해당하는 아이템의 state를 초기값으로 전달한다. */
  const onClickRemoveCourseItem = (e, index) => {
    setRegisteredCourseImgState({
      ...registeredCourseImgState,
      ["imgSrc" + index]: `none`,
    });
  };

  /* 사용자가 장소 삭제 버튼을 클릭했을 때 호출할 핸들러
  인덱스에 해당하는 장소명, 좌표, 코멘트 state를 삭제한 후 빈 state를 추가하여 전달한다. */
  const onClickRemovePlaceItem = (e, index) => {
    let tempPlaceAddArr = Object.values(placeAdd);
    let tempPlaceAddObject = {};

    tempPlaceAddArr.splice(index, 1);
    tempPlaceAddArr.push("");

    tempPlaceAddArr.forEach((item, index) => {
      tempPlaceAddObject["choicePlace" + index] = item;
    });

    setPlaceAdd(tempPlaceAddObject);

    let tempPlaceAddCoordinate = Array.from(placeAddCoordinate);

    tempPlaceAddCoordinate.splice(index, 1);
    tempPlaceAddCoordinate.push({ x: 0, y: 0 });

    setPlaceAddCoordinate(tempPlaceAddCoordinate);

    let tempPlaceAddComment = Array.from(placeAddComment);
    tempPlaceAddComment.splice(index, 1);
    tempPlaceAddComment.push("");
    setPlaceAddComment(tempPlaceAddComment);
  };

  /* 사용자가 해시태그 삭제 버튼을 클릭했을 때 호출할 핸들러
  인덱스에 해당하는 아이템의 state를 초기값으로 전달한다. */
  const onClickRemoveHasTagItem = (e, index) => {
    let tempAddHashTags = Array.from(hashTagAdd.addHashTags);

    tempAddHashTags.splice(index, 1);
    tempAddHashTags.push(null);
    console.log(tempAddHashTags);

    setHashTagAdd({
      ...hashTagAdd,
      addHashTags: tempAddHashTags,
    });
  };

  /* 새로운 장소 추가에서 지도에서 장소 추가 버튼 클릭 시 호출할 이벤트 핸들러 */
  const onClickAddPlace = (e) => {
    e.preventDefault();
    SetNaverMapState({ ...naverMapState, naverMapEnable: true });
  };
  /* 네이버 지도에서 닫기 버튼 클릭 시 호출할 이벤트 핸들러 */
  const onClickNaverMapClose = (e) => {
    e.preventDefault();
    SetNaverMapState({ ...naverMapState, naverMapEnable: false });
  };

  /* 네이버 지도에서 지역구 또는 키워드가 변경되었을 시 호출할 이벤트 핸들러*/
  const onChangeNaverMapQuery = (e) => {
    SetNaverMapQuery({ ...naverMapQuery, [e.target.name]: e.target.value });
  };

  // 네이버 맵 검색창에서 Enter를 입력시 호출할 핸들러
  const onKeyDownNaverMapQueryEnter = (e) => {
    if (e.key === "Enter") onClickNaverMapSearch(e);
  };

  /* 네이버 지도에서 검색버튼을 클릭할 경우 호출할 이벤트 핸들러*/
  const onClickNaverMapSearch = (e) => {
    e.preventDefault();
    const query = `부산광역시 ${naverMapQuery.addressGu} ${naverMapQuery.keyword}`;
    NaverMapSearch(
      naverMapState.naverMapHandle,
      query,
      naverMapState.naverMapMarker
    );
  };

  // 등록된 장소 개수를 계산하는 변수
  const placeCount = Object.values(placeAdd).reduce((count, item) => {
    if (item) {
      return count + 1;
    }
    return count + 0;
  }, 0);

  // 등록된 해시태그 개수를 계산하는 변수
  const hashTagCount = hashTagAdd.addHashTags.reduce((count, item) => {
    if (item) {
      return count + 1;
    }
    return count + 0;
  }, 0);

  // 해시태그 입력시 호출할 핸들러
  const onChangeHashTag = (e) => {
    setHashTagAdd({
      inputHashTag: e.target.value,
      addHashTags: hashTagAdd.addHashTags,
    });
  };

  // 해시태그 추가 버튼 클릭시 호출할 핸들러
  const onClickAddHashTagButton = (e) => {
    e.preventDefault();
    if (hashTagAdd.inputHashTag === "") {
      alert("빈 값은 등록할 수 없습니다.");
      return;
    }
    const tempAddHashTags = Array.from(hashTagAdd.addHashTags);

    const result = tempAddHashTags.every((item, index, array) => {
      if (item) return true;
      array[index] = hashTagAdd.inputHashTag;
      return false;
    });

    if (result) {
      alert("해시태그를 전부 등록하였습니다.");
      return;
    }

    setHashTagAdd({
      inputHashTag: hashTagAdd.inputHashTag,
      addHashTags: tempAddHashTags,
    });
  };

  // 사용자가 카테고리 및 카테고리 text를 선택했을 때 호출되는 핸들러
  const onChangeCategory = (e) => {
    setSelectCategory({
      ...selectCategory,
      [e.target.name]: Number(e.target.value),
    });
  };

  // 사용자가 장소에 대한 코멘트를 입력했을 때 호출되는 핸들러
  const onChangePlaceAddComment = (e, index) => {
    const tempPlaceAddComment = Array.from(placeAddComment);
    tempPlaceAddComment[index] = e.target.value;
    setPlaceAddComment(tempPlaceAddComment);
  };
  // 사용자가 코스 설명글을 입력할 때마다 호출되는 핸들러
  const onChangeCourseText = (e) => {
    setCourseText(e.target.value);
  };

  // 사용자가 코스 타이틀을 입력할 때마다 호출되는 핸들러
  const onChangeCourseTitle = (e) => {
    setCourseTitle(e.target.value);
  };

  // 사용자가 코스 등록 버튼을 클릭할 때 호출되는 핸들러
  const onClickRegisterCourse = (e) => {
    const formData = new FormData();
    const createPlaceDetailRequestList = [];
    const createHashtagRequestList = [];
    const createCategoryListRequestList = [];
    const url = "http://10.10.10.58:9002/v1/cosmosts";
    const config = {
      headers: {
        Authorization: "token",
        "Content-Type": "multipart/form-data",
      },
      timeout: 3000,
    };

    e.preventDefault();

    if (courseTitle == false) {
      alert("코스 제목을 작성해주세요");
      return;
    }

    if (courseText == false) {
      alert("코스 설명을 작성해주세요");
      return;
    }

    Object.values(placeAdd).forEach((item, index) => {
      if (item) {
        createPlaceDetailRequestList.push({
          placeName: item,
          placeXCoordinate: placeAddCoordinate[index].x,
          placeYCoordinate: placeAddCoordinate[index].y,
          placeOrder: index,
          placeComment: placeAddComment[index],
        });
      }
    });

    hashTagAdd.addHashTags.forEach((item, index) => {
      if (item) {
        createHashtagRequestList.push({
          keyword: item,
        });
      }
    });

    createCategoryListRequestList.push({
      locationCategory: selectCategory.local,
      themeCategory: selectCategory.theme,
    });

    if (createPlaceDetailRequestList.length === 0) {
      alert("1개 이상의 장소를 등록해주세요");
      return;
    }

    const placeCommentCheck = createPlaceDetailRequestList.every(
      (item, index) => {
        if (item.placeComment === "") return false;
        return true;
      }
    );

    if (placeCommentCheck == false) {
      alert("등록한 장소 설명을 작성해주세요");
      return;
    }

    if (createHashtagRequestList.length === 0) {
      alert("1개 이상의 해시태그를 등록해주세요");
      return;
    }

    const sendData = {
      courseTitle: courseTitle,
      courseComment: courseText,
      createPlaceDetailRequestList,
      createHashtagRequestList,
      createCategoryListRequestList,
    };

    console.log(sendData);
    const sendJson = JSON.stringify(sendData);
    const jsonblob = new Blob([sendJson], { type: "application/json" });
    const imageblobs = [];

    Object.values(registeredCourseImgState).forEach((item, index) => {
      const [itemUnicodeBinaryData, itemMimeType] =
        base64ImgSrcToImgBinaryData(item);
      // const mimeTypeReg = /data:(.*);/;
      // const Base64DataReg = /,(.*)\)$/;

      // if (item !== "none") {
      //   const itemMimeType = item.match(mimeTypeReg)
      //     ? item.match(mimeTypeReg)[1]
      //     : null;
      //   const itemBase64Data = item.match(Base64DataReg)
      //     ? item.match(Base64DataReg)[1]
      //     : null;
      //   const itemBinaryData = atob(itemBase64Data);

      //   let itemBinaryDataLength = itemBinaryData.length;
      //   let itemUnicodeBinaryData = new Uint8Array(itemBinaryDataLength);
      //   while (itemBinaryDataLength--) {
      //     itemUnicodeBinaryData[itemBinaryDataLength] =
      //       itemBinaryData.charCodeAt(itemBinaryDataLength);
      //   }

      imageblobs.push(
        itemUnicodeBinaryData &&
          new Blob([itemUnicodeBinaryData], {
            type: itemMimeType,
          })
      );
    });

    formData.append("createCourseRequest", jsonblob);
    imageblobs.forEach((item, index) => {
      formData.append("file", item);
    });

    if (imageblobs.length == 0) {
      alert("하나 이상의 코스 이미지를 등록해주세요");
      return;
    }

    axios
      .post(url, formData, config)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <UtilDiv width={"76.8rem"} padding={"7rem 0 0 0"}>
      <S.UploadCourseImgArea>
        {/* 코스 이미지 업로드 버튼 */}
        <S.UploadImgButtonWrap>
          <Button
            type="button"
            width={"9rem"}
            height={"9rem"}
            margin={""}
            fontSize={"3rem"}
            color={color.white}
            bgColor={color.darkBlue}
            hoveredBgColor={color.navy}
            onClick={onClickUploadCourseImg}
          >
            <AiIcons.AiOutlinePlus />
          </Button>
          <S.UploadImgInput
            type="file"
            ref={courseImgInputRef}
            onChange={onChangeCourseImg}
          />
        </S.UploadImgButtonWrap>
        {/* 업로드된 코스 이미지들 */}
        <S.UploadedCourseImgsWrap>
          <div ref={registeredCourseImgState.imgSrc0 === "none" ? null : drop0}>
            <S.CoursePreviewImg
              backgroundImage={registeredCourseImgState.imgSrc0}
              ref={registeredCourseImgState.imgSrc0 === "none" ? null : drag0}
              opacity={isDragging0 ? "0" : "1"}
            >
              {registeredCourseImgState.imgSrc0 === "none" || (
                <ItemRemoveButton
                  onClick={(e) => onClickRemoveCourseItem(e, 0)}
                />
              )}
              {isOver0 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "RGBA(255,255,0,.5)",
                  }}
                ></div>
              )}
            </S.CoursePreviewImg>
          </div>
          <div ref={registeredCourseImgState.imgSrc1 === "none" ? null : drop1}>
            <S.CoursePreviewImg
              backgroundImage={registeredCourseImgState.imgSrc1}
              ref={registeredCourseImgState.imgSrc1 === "none" ? null : drag1}
              opacity={isDragging1 ? "0" : "1"}
            >
              {registeredCourseImgState.imgSrc1 === "none" || (
                <ItemRemoveButton
                  onClick={(e) => onClickRemoveCourseItem(e, 1)}
                />
              )}
              {isOver1 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "RGBA(255,255,0,.5)",
                  }}
                ></div>
              )}
            </S.CoursePreviewImg>
          </div>
          <div ref={registeredCourseImgState.imgSrc2 === "none" ? null : drop2}>
            <S.CoursePreviewImg
              backgroundImage={registeredCourseImgState.imgSrc2}
              ref={registeredCourseImgState.imgSrc2 === "none" ? null : drag2}
              opacity={isDragging2 ? "0" : "1"}
            >
              {registeredCourseImgState.imgSrc2 === "none" || (
                <ItemRemoveButton
                  onClick={(e) => onClickRemoveCourseItem(e, 2)}
                />
              )}
              {isOver2 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "RGBA(255,255,0,.5)",
                  }}
                ></div>
              )}
            </S.CoursePreviewImg>
          </div>
          <div ref={registeredCourseImgState.imgSrc3 === "none" ? null : drop3}>
            <S.CoursePreviewImg
              backgroundImage={registeredCourseImgState.imgSrc3}
              ref={registeredCourseImgState.imgSrc3 === "none" ? null : drag3}
              opacity={isDragging3 ? "0" : "1"}
            >
              {registeredCourseImgState.imgSrc3 === "none" || (
                <ItemRemoveButton
                  onClick={(e) => onClickRemoveCourseItem(e, 3)}
                />
              )}
              {isOver3 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "RGBA(255,255,0,.5)",
                  }}
                ></div>
              )}
            </S.CoursePreviewImg>
          </div>
          <div ref={registeredCourseImgState.imgSrc4 === "none" ? null : drop4}>
            <S.CoursePreviewImg
              backgroundImage={registeredCourseImgState.imgSrc4}
              ref={registeredCourseImgState.imgSrc4 === "none" ? null : drag4}
              opacity={isDragging4 ? "0" : "1"}
            >
              {registeredCourseImgState.imgSrc4 === "none" || (
                <ItemRemoveButton
                  onClick={(e) => onClickRemoveCourseItem(e, 4)}
                />
              )}
              {isOver4 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "RGBA(255,255,0,.5)",
                  }}
                ></div>
              )}
            </S.CoursePreviewImg>
          </div>
        </S.UploadedCourseImgsWrap>
      </S.UploadCourseImgArea>
      {/* 코스 제목 */}
      <div style={{ width: "100%", padding: "0 3rem" }}>
        <input value={courseTitle} onChange={onChangeCourseTitle}></input>
      </div>
      {/* 코스 카테고리 선택 드랍다운 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>카테고리 선택</S.CourseDetailInfoTitle>
        <S.CourseCategoryWrap>
          <S.CourseCategorySelect
            name="local"
            value={selectCategory.local}
            onChange={onChangeCategory}
          >
            {categoryLocalList.length &&
              categoryLocalList.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.locationCategoryName}
                  </option>
                );
              })}
            {/* {CATEGORIES &&
              CATEGORIES[0].gu.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))} */}
          </S.CourseCategorySelect>
          <S.CourseCategorySelect
            name="theme"
            value={selectCategory.theme}
            onChange={onChangeCategory}
          >
            {categoryThemeList.length &&
              categoryThemeList.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.themeCategoryName}
                  </option>
                );
              })}
            {/* {CATEGORIES &&
              CATEGORIES[1].theme.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))} */}
          </S.CourseCategorySelect>
        </S.CourseCategoryWrap>
      </S.AddDetailCourseInfoArea>
      {/* 새로운 장소 추가 영역 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>{`새로운 장소 추가 ${placeCount}/5`}</S.CourseDetailInfoTitle>
        <S.AddDetailCourseInfoWrap>
          <S.AddLocationButton type="button" onClick={onClickAddPlace}>
            <BsIcons.BsMap />
            <S.CourseDetailInfoText>지도에서 장소 추가</S.CourseDetailInfoText>
          </S.AddLocationButton>
          {/* 네이버 지도 */}
          {naverMapState.naverMapEnable && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                position: "absolute",
                top: window.visualViewport.pageTop,
                zIndex: "1",
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "RGBA(0,0,0,.7)",
              }}
            >
              <div style={{ width: "50%", backgroundColor: "black" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <S.CourseCategorySelect
                      marginRight="0"
                      borderBottom="0"
                      name="addressGu"
                      value={naverMapQuery.addressGu}
                      onChange={onChangeNaverMapQuery}
                    >
                      {categoryLocalList.length &&
                        categoryLocalList.map((item) => {
                          return (
                            <option
                              key={item.id}
                              value={item.locationCategoryName}
                            >
                              {item.locationCategoryName}
                            </option>
                          );
                        })}
                      {/* {CATEGORIES &&
                        CATEGORIES[0].gu.map((item) => (
                          <option key={item.id} value={item.value}>
                            {item.name}
                          </option>
                        ))} */}
                    </S.CourseCategorySelect>
                    <input
                      name="keyword"
                      value={naverMapQuery.keyword}
                      onChange={onChangeNaverMapQuery}
                      onKeyDown={onKeyDownNaverMapQueryEnter}
                      style={{ width: "30rem", height: "100%" }}
                    ></input>
                  </div>
                  <div
                    style={{
                      width: "6rem",
                      justifyContent: "space-between",
                      display: "flex",
                    }}
                  >
                    <Icon onClick={onClickNaverMapSearch}>
                      <BsIcons.BsSearch />
                    </Icon>
                    <Icon onClick={onClickNaverMapClose}>
                      <AiIcons.AiOutlineClose />
                    </Icon>
                  </div>
                </div>
                <div id="map" style={{ height: "400px" }}></div>
              </div>
            </div>
          )}

          <S.AddedLocationOrHashTagsWrap>
            {placeAdd.choicePlace0 ? (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace0}
                </S.CourseDetailInfoText>
                <ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 0);
                  }}
                />
              </div>
            ) : (
              <S.CourseDetailInfoText>1번 장소</S.CourseDetailInfoText>
            )}
            {placeAdd.choicePlace1 ? (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace1}
                </S.CourseDetailInfoText>
                <ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 1);
                  }}
                />
              </div>
            ) : (
              <S.CourseDetailInfoText>2번 장소</S.CourseDetailInfoText>
            )}
            {placeAdd.choicePlace2 ? (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace2}
                </S.CourseDetailInfoText>
                <ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 2);
                  }}
                />
              </div>
            ) : (
              <S.CourseDetailInfoText>3번 장소</S.CourseDetailInfoText>
            )}
            {placeAdd.choicePlace3 ? (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace3}
                </S.CourseDetailInfoText>
                <ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 3);
                  }}
                />
              </div>
            ) : (
              <S.CourseDetailInfoText>4번 장소</S.CourseDetailInfoText>
            )}
            {placeAdd.choicePlace4 ? (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace4}
                </S.CourseDetailInfoText>
                <ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 4);
                  }}
                />
              </div>
            ) : (
              <S.CourseDetailInfoText>5번 장소</S.CourseDetailInfoText>
            )}
          </S.AddedLocationOrHashTagsWrap>
        </S.AddDetailCourseInfoWrap>
        {/* 추가한 장소에 대한 코멘트 */}
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          {Object.values(placeAdd).map((item, index) => {
            if (item) {
              return (
                <input
                  key={index}
                  placeholder={`${index + 1}번 장소에 대한 설명`}
                  style={{ marginBottom: "1rem" }}
                  value={placeAddComment[index]}
                  onChange={(e) => {
                    onChangePlaceAddComment(e, index);
                  }}
                ></input>
              );
            }
          })}
        </div>
      </S.AddDetailCourseInfoArea>
      {/* 해시태그 추가 영역 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>{`해시태그 추가 ${hashTagCount}/5`}</S.CourseDetailInfoTitle>
        <S.AddDetailCourseInfoWrap>
          <S.InputHashTagWrap>
            <Input
              type="text"
              name=""
              placeholder="해시태그"
              maxLength={20}
              height={"3rem"}
              margin={"0 2rem 0 0"}
              fontSize={fs.m}
              onChange={onChangeHashTag}
            />
            <Button
              width={"3rem"}
              height={"3rem"}
              color={color.white}
              type="button"
              onClick={onClickAddHashTagButton}
            >
              <AiIcons.AiOutlinePlus />
            </Button>
          </S.InputHashTagWrap>
          <S.AddedLocationOrHashTagsWrap>
            {hashTagAdd.addHashTags.map((item, index) => {
              return item ? (
                <div key={index} style={{ position: "relative" }}>
                  <S.CourseDetailInfoText>#{item}</S.CourseDetailInfoText>
                  <ItemRemoveButton
                    top="-1rem"
                    right="-2rem"
                    onClick={(e) => onClickRemoveHasTagItem(e, index)}
                  />
                </div>
              ) : (
                <S.CourseDetailInfoText key={index}>
                  #해시태그
                </S.CourseDetailInfoText>
              );
            })}
          </S.AddedLocationOrHashTagsWrap>
        </S.AddDetailCourseInfoWrap>
      </S.AddDetailCourseInfoArea>
      {/* 코스 설명 영역 */}
      <S.CourseDescription
        placeholder="코스에 대해 설명해주세요."
        maxLength={1000}
        onChange={onChangeCourseText}
        value={courseText}
      ></S.CourseDescription>
      {/* 코스 등록, 취소 버튼 */}
      <S.CourseRegistrationButtonWrap>
        <Button
          type="button"
          width={"12rem"}
          height={"5rem"}
          margin={"0 4rem 0 0"}
          fontSize={fs.m}
          color={color.black}
          bgColor={color.lightGrey}
          hoveredBgColor={color.grey}
          onClick={() => navigate(-1)}
        >
          취소
        </Button>
        <Button
          type="submit"
          width={"12rem"}
          height={"5rem"}
          margin={"0 0 0 4rem"}
          fontSize={fs.m}
          color={color.white}
          bgColor={color.darkBlue}
          hoveredBgColor={color.navy}
          onClick={onClickRegisterCourse}
        >
          등록
        </Button>
      </S.CourseRegistrationButtonWrap>
    </UtilDiv>
  );
}

export default CourseRegistrationForm;
