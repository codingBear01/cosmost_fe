/* libraries */
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDrag, useDrop } from "react-dnd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
/* components */
import * as S from "./styled";
import { Button, Input, UtilDiv } from "../..";
/* icons */
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Icon } from "../..";
/* static data */
import {
  COLOR_LIST as color,
  FONT_SIZE_LIST as fs,
  BORDER_RADIUS_LIST as br,
} from "../../../style";

import {
  CATEGORIES,
  base64ImgSrcToImgBinaryData,
  addNaverMapMarker,
  createNaverMap,
} from "../../../store";

import styled from "styled-components";
import { FaSleigh } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { MdOutlineNotInterested } from "react-icons/md";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import { HeaderSearchBar } from "../../common/Header";

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

  // 코스 등록 입력값 관련 ref
  const courseTitleRef = useRef();
  const courseDescriptonRef = useRef();
  const locationCategoryRef = useRef();
  const themeCategoryRef = useRef();

  // 등록된 코스 이미지 경로를 나타내는 state
  const [registeredCourseImgState, setRegisteredCourseImgState] = useState({
    imgSrc0: "none",
    imgSrc1: "none",
    imgSrc2: "none",
    imgSrc3: "none",
    imgSrc4: "none",
  });

  const location = useLocation();

  // 백엔드로부터 가져온 카테고리 목록를 나타내는 state
  const [categoryLocalList, setCategoryLocalList] = useState([]);
  const [categoryThemeList, setCategoryThemeList] = useState([]);

  // 사용자가 선택한 카테고리 항목을 나타내는 state
  const [selectCategory, setSelectCategory] = useState({
    locationCategoryName: 1,
    themeCategoryName: 1,
  });

  // 네이버 지도 관련 state
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

  // 코스 수정 관련 state
  const [deletePlaceImgRequestListState, setDeletePlaceImgRequestListState] =
    useState([]);
  const [createPlaceImgRequestListState, setCreatePlaceImgRequestListState] =
    useState([]);
  const [updatePlaceImgRequestListState, setUpdatePlaceImgRequestListState] =
    useState([]);

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
    const url = `${process.env.REACT_APP_SERVER1_IP}/v1/cosmosts?filter=all&category=location`;
    const config = { timeout: 1000 };

    axios
      .get(url, config)
      .then((data) => {
        const CategoryLocalArr = data.data;
        setCategoryLocalList(CategoryLocalArr);
      })
      .catch((e) => {
        console.log(e);
        alert("코스 카테고리의 지역값을 가져오지 못했습니다.");
      });
  };
  /*백엔드와의 API 통신을 위한 함수
    코스 카테고리의 테마값을 가져오는 API */
  const getCategroyTheme = () => {
    const url = `${process.env.REACT_APP_SERVER1_IP}/v1/cosmosts?filter=all&category=theme`;
    const config = { timeout: 1000 };

    axios
      .get(url, config)
      .then((data) => {
        const CategoryThemeArr = data.data;
        setCategoryThemeList(CategoryThemeArr);
      })
      .catch((e) => {
        console.log(e);
        alert("코스 카테고리의 테마값을 가져오지 못했습니다.");
      });
  };

  /* 현재 컴포넌트가 새로운 코스 등록이 아닌 이전에 등록된 코스 수정의 역할일 경우 호출할 함수 
     이전에 등록했던 코스 date값을 state로 전달한다.
  */
  const displayBeforeEditCourseInfo = (beforeCourseInfo) => {
    console.log("beforeCourseInfo", beforeCourseInfo);

    //카테고리를 기존에 등록한 카테고리 값으로 업데이트
    const selectLocationCategoryName =
      beforeCourseInfo.categoryLists[0].locationCategoryName;
    const selectThemeCategoryName =
      beforeCourseInfo.categoryLists[0].themeCategoryName;
    let selectLocationCategoryNumber;
    let selectThemeCategoryNumber;

    categoryLocalList.every((item, index) => {
      if (item.locationCategoryName === selectLocationCategoryName) {
        selectLocationCategoryNumber = item.id;
        return false;
      }
      return true;
    });
    categoryThemeList.every((item, index) => {
      if (item.themeCategoryName === selectThemeCategoryName) {
        selectThemeCategoryNumber = item.id;
        return false;
      }
      return true;
    });
    setSelectCategory({
      locationCategoryName: selectLocationCategoryNumber,
      themeCategoryName: selectThemeCategoryNumber,
    });

    //코스이미지를 기존에 등록한 코스 이미지로 업데이트
    let placeImgListTemp = Object.assign({}, registeredCourseImgState);
    beforeCourseInfo.placeImgList.map((item, index) => {
      placeImgListTemp = {
        ...placeImgListTemp,
        ["imgSrc" + index]: `url(${item.placeImgUrl})`,
      };
    });
    setRegisteredCourseImgState(placeImgListTemp);

    //코스 설명과 코스 제목을 기존에 등록한 코스 설명으로 업데이트
    courseDescriptonRef.current.value = beforeCourseInfo.courseComment;
    courseTitleRef.current.value = beforeCourseInfo.courseTitle;

    //해시태그를 기존에 등록한 해시 태그로 업데이트
    let hashtagListTemp = Object.assign({}, hashTagAdd);
    let tempAddHashTags = Array.from(hashTagAdd.addHashTags);

    beforeCourseInfo.hashtagList.map((item, index) => {
      tempAddHashTags[index] = item.keyword;
      hashtagListTemp = {
        ...hashtagListTemp,
        addHashTags: tempAddHashTags,
      };
    });
    setHashTagAdd(hashtagListTemp);

    // 장소와 좌표, 장소 코멘트를 기존에 등록한 값으로 업데이트
    let placeAddTemp = Object.assign({}, placeAdd);
    let placeAddCoordinateTemp = Array.from(placeAddCoordinate);
    let placeAddCommentTemp = Array.from(placeAddComment);

    beforeCourseInfo.placeDetailList.map((item, index) => {
      placeAddTemp = {
        ...placeAddTemp,
        ["choicePlace" + index]: item.placeName,
      };
      placeAddCoordinateTemp[index] = {
        x: item.placeXCoordinate,
        y: item.placeYCoordinate,
      };
      placeAddCommentTemp[index] = item.placeComment;
    });

    setPlaceAdd(placeAddTemp);
    setPlaceAddCoordinate(placeAddCoordinateTemp);
    setPlaceAddComment(placeAddCommentTemp);

    // 수정에만 사용하는 state 업데이트
    setUpdatePlaceImgRequestListState(beforeCourseInfo.placeImgList);
  };

  /* 코스 등록을 목적으로 컴포넌트 생성시 한번만 호출되는 useEffect
     카테고리 지역 목록과 카테고리 테마 목록을 가져오는 API 함수를 호출한다. */
  useEffect(() => {
    getCategroyLocal();
    getCategroyTheme();
  }, []);

  /* 코스 수정을 목적으로 컴포넌트 생성시 한번만 호출되는 useEffect
     기존에 등록된 데이터를 이용해 화면에 표시한다.*/
  useEffect(() => {
    if (location.state && categoryLocalList) {
      displayBeforeEditCourseInfo(location.state);
    }
  }, [categoryLocalList]);

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

  /* 드래그 앤 드랍을 한 경우 수정 관련 state 값을 변경하는 함수
       targetId : 드랍된 위치 
       SourceId : 드래그한 아이템, 0부터 4번까지 */
  const DropCourseImgState = (targetId, SourceId) => {
    const imageOrderArray = createPlaceImgRequestListState.concat(
      updatePlaceImgRequestListState
    );

    let targetIdIndex = -1;
    let SourceIdIndex = -1;

    imageOrderArray.every((item, index) => {
      if (item.placeImgOrder === SourceId) {
        SourceIdIndex = index;
        return false;
      }
      return true;
    });

    imageOrderArray.every((item, index) => {
      if (item.placeImgOrder === targetId) {
        targetIdIndex = index;
        return false;
      }
      return true;
    });

    if (targetIdIndex !== -1 && SourceIdIndex !== -1) {
      imageOrderArray[SourceIdIndex].placeImgOrder = targetId;
      imageOrderArray[targetIdIndex].placeImgOrder = SourceId;
    }

    const createPlaceImgRequestListStateTemp = imageOrderArray.splice(
      0,
      createPlaceImgRequestListState.length
    );
    const updatePlaceImgRequestListStateTemp = imageOrderArray.splice(
      0,
      updatePlaceImgRequestListState.length
    );

    setCreatePlaceImgRequestListState(createPlaceImgRequestListStateTemp);
    setUpdatePlaceImgRequestListState(updatePlaceImgRequestListStateTemp);
  };

  /* 드래그 앤 드랍을 한 경우 state 값을 변경하는 함수
       targetId : 드랍된 위치 
       SourceID : 드래그한 아이템, 0부터 4번까지
       registeredCourseImgState : 현재 state*/
  const DropCourseImg = (targetId, SourceID, registeredCourseImgState) => {
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
            DropCourseImgState(0, 1);
            break;
          case "2":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc0: registeredCourseImgState.imgSrc2,
              imgSrc2: registeredCourseImgState.imgSrc0,
            });
            DropCourseImgState(0, 2);
            break;
          case "3":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc0: registeredCourseImgState.imgSrc3,
              imgSrc3: registeredCourseImgState.imgSrc0,
            });
            DropCourseImgState(0, 3);
            break;
          case "4":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc0: registeredCourseImgState.imgSrc4,
              imgSrc4: registeredCourseImgState.imgSrc0,
            });
            DropCourseImgState(0, 4);
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
            DropCourseImgState(1, 0);
            break;
          case "2":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc1: registeredCourseImgState.imgSrc2,
              imgSrc2: registeredCourseImgState.imgSrc1,
            });
            DropCourseImgState(1, 2);
            break;
          case "3":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc1: registeredCourseImgState.imgSrc3,
              imgSrc3: registeredCourseImgState.imgSrc1,
            });
            DropCourseImgState(1, 3);
            break;

          case "4":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc1: registeredCourseImgState.imgSrc4,
              imgSrc4: registeredCourseImgState.imgSrc1,
            });
            DropCourseImgState(1, 4);
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
            DropCourseImgState(2, 0);
            break;
          case "1":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc2: registeredCourseImgState.imgSrc1,
              imgSrc1: registeredCourseImgState.imgSrc2,
            });
            DropCourseImgState(2, 1);
            break;
          case "3":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc2: registeredCourseImgState.imgSrc3,
              imgSrc3: registeredCourseImgState.imgSrc2,
            });
            DropCourseImgState(2, 3);
            break;
          case "4":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc2: registeredCourseImgState.imgSrc4,
              imgSrc4: registeredCourseImgState.imgSrc2,
            });
            DropCourseImgState(2, 4);
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
            DropCourseImgState(3, 0);
            break;
          case "1":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc3: registeredCourseImgState.imgSrc1,
              imgSrc1: registeredCourseImgState.imgSrc3,
            });
            DropCourseImgState(3, 1);
            break;
          case "2":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc3: registeredCourseImgState.imgSrc2,
              imgSrc2: registeredCourseImgState.imgSrc3,
            });
            DropCourseImgState(3, 2);
            break;
          case "4":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc3: registeredCourseImgState.imgSrc4,
              imgSrc4: registeredCourseImgState.imgSrc3,
            });
            DropCourseImgState(3, 4);
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
            DropCourseImgState(4, 0);
            break;
          case "1":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc4: registeredCourseImgState.imgSrc1,
              imgSrc1: registeredCourseImgState.imgSrc4,
            });
            DropCourseImgState(4, 1);
            break;
          case "2":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc4: registeredCourseImgState.imgSrc2,
              imgSrc2: registeredCourseImgState.imgSrc4,
            });
            DropCourseImgState(4, 2);
            break;
          case "3":
            setRegisteredCourseImgState({
              ...registeredCourseImgState,
              imgSrc4: registeredCourseImgState.imgSrc3,
              imgSrc3: registeredCourseImgState.imgSrc4,
            });
            DropCourseImgState(4, 3);
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
          "X-Naver-Client-Id": process.env.REACT_APP_X_NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.REACT_APP_X_NAVER_CLIENT_SECRET,
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

          mapMarkerCopy.push(registeredMarker);
        });
        SetNaverMapState({ ...naverMapState, naverMapMarker: mapMarkerCopy });
      })
      .catch((error) => {
        toast.error(
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
      if (item === "") {
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
      toast.error("코스 이미지는 5장까지만 추가 가능합니다.");
    }
  };

  /* 사용자가 대화상자에서 등록할 코스 이미지를 선택했을 때 호출할 핸들러
     선택한 코스 이미지의 URL 경로를 state로 전달한다. */
  const onChangeCourseImg = (e) => {
    const FileReaderObject = new FileReader();
    FileReaderObject.onload = () => {
      Object.values(registeredCourseImgState).every((item, index) => {
        if (item === "none") {
          setRegisteredCourseImgState({
            ...registeredCourseImgState,
            ["imgSrc" + index]: `url(${FileReaderObject.result})`,
          });
          e.target.value = "";
          const createPlaceImgRequestListStateTemp = Array.from(
            createPlaceImgRequestListState
          );
          createPlaceImgRequestListStateTemp.push({ placeImgOrder: index });
          setCreatePlaceImgRequestListState(createPlaceImgRequestListStateTemp);
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

    if (location.state) {
      const deletePlaceImgRequestListStateTemp = Array.from(
        deletePlaceImgRequestListState
      );
      const updatePlaceImgRequestListStateTemp = Array.from(
        updatePlaceImgRequestListState
      );

      const createPlaceImgRequestListStateTemp = Array.from(
        createPlaceImgRequestListState
      );
      let isDelete = false;

      //삭제한 아이템이 이전 DB에 등록된 아이템인 경우 이전 DB를 나나태는 State 변경
      updatePlaceImgRequestListState.every((item) => {
        if (item.placeImgOrder === index) {
          updatePlaceImgRequestListStateTemp.splice(index, 1);
          deletePlaceImgRequestListStateTemp.push(
            updatePlaceImgRequestListState[index].id
          );
          isDelete = true;
          return false;
        }
        return true;
      });

      //삭제한 아이템이 새롭게 추가된 아이템인 경우 새롭게 추가된 아이템을 나타내는 State 변경
      createPlaceImgRequestListState.every((item, index2) => {
        if (item.placeImgOrder === index) {
          createPlaceImgRequestListStateTemp.splice(index2, 1);
          isDelete = true;
          return false;
        }
        return true;
      });

      // 중간 아이템을 삭제했다면 아이템들 인덱스를 왼쪽으로 옮김.
      if (isDelete) {
        createPlaceImgRequestListStateTemp.forEach((item2, index3) => {
          if (item2.placeImgOrder > index)
            item2.placeImgOrder = item2.placeImgOrder - 1;
        });
        updatePlaceImgRequestListStateTemp.forEach((item2, index3) => {
          if (item2.placeImgOrder > index)
            item2.placeImgOrder = item2.placeImgOrder - 1;
        });
      }

      console.log(
        "deletePlaceImgRequestListStateTemp",
        deletePlaceImgRequestListStateTemp
      );
      console.log(
        "updatePlaceImgRequestListStateTemp",
        updatePlaceImgRequestListStateTemp
      );
      console.log(
        "createPlaceImgRequestListStateTemp",
        createPlaceImgRequestListStateTemp
      );
      setDeletePlaceImgRequestListState(deletePlaceImgRequestListStateTemp);
      setUpdatePlaceImgRequestListState(updatePlaceImgRequestListStateTemp);
      setCreatePlaceImgRequestListState(createPlaceImgRequestListStateTemp);
    }
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

  // 카테고리 선택 시 호출할 핸들러
  const onChangeSelectCategory = (e) => {
    setSelectCategory({ ...selectCategory, [e.target.name]: e.target.value });
  };

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
      toast.error("빈 값은 등록할 수 없습니다.");
      return;
    }
    const tempAddHashTags = Array.from(hashTagAdd.addHashTags);

    const result = tempAddHashTags.every((item, index, array) => {
      if (item) return true;
      array[index] = hashTagAdd.inputHashTag;
      return false;
    });

    if (result) {
      toast.error("해시태그는 5개까지만 추가 가능합니다.");
      return;
    }

    setHashTagAdd({
      inputHashTag: hashTagAdd.inputHashTag,
      addHashTags: tempAddHashTags,
    });
  };

  // 사용자가 장소에 대한 코멘트를 입력했을 때 호출되는 핸들러
  const onChangePlaceAddComment = (e, index) => {
    const tempPlaceAddComment = Array.from(placeAddComment);
    tempPlaceAddComment[index] = e.target.value;
    setPlaceAddComment(tempPlaceAddComment);
  };

  // 사용자가 코스 등록 시 입력한 값들의 유효성을 검증하는 핸들러
  const validateCourseRegistrationInput = (input, imgs) => {
    if (imgs[0] === null) {
      toast.error("이미지를 1개 이상 추가해주세요");
      return false;
    }

    if (input.createPlaceDetailRequestList.length === 0) {
      toast.error("장소를 1곳 이상 추가해주세요");
      return false;
    }

    for (let i = 0; i < input.createPlaceDetailRequestList.length; i++) {
      const item = input.createPlaceDetailRequestList[i];
      if (!item.placeComment) {
        toast.error("장소에 대한 한줄평을 1개 이상 입력해주세요");
        return false;
      }
    }

    if (input.createHashtagRequestList.length === 0) {
      toast.error("해시태그를 1개 이상 추가해주세요");
      return false;
    }

    if (!courseTitleRef.current.value) {
      toast.error("코스 제목을 작성해주세요");
      return false;
    }

    if (!courseDescriptonRef.current.value) {
      toast.error("코스 설명을 작성해주세요");
      return false;
    }

    return true;
  };

  // 사용자가 코스 등록 버튼을 클릭할 때 호출되는 핸들러
  const onClickRegisterCourse = (e) => {
    const formData = new FormData();
    const createPlaceDetailRequestList = [];
    const createHashtagRequestList = [];
    const createCategoryListRequestList = [];
    const createPlaceImgRequestList = [];
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
      timeout: 1000,
    };

    e.preventDefault();

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

    //DOM을 직접 참조하여 value를 가져옴.
    createCategoryListRequestList.push({
      locationCategory: +locationCategoryRef.current.value,
      themeCategory: +themeCategoryRef.current.value,
    });

    const updateCategoryListRequestList = Array.from(
      createCategoryListRequestList
    );

    if (location.state) {
      updateCategoryListRequestList.forEach((item, index, array) => {
        array[index] = { ...item, id: location.state.categoryLists[index].id };
      });
    }

    Object.values(registeredCourseImgState).forEach((item, index) => {
      if (item !== "none") {
        createPlaceImgRequestList.push({ placeImgOrder: index });
      }
    });

    let sendData;

    if (location.state) {
      sendData = {
        courseTitle: courseTitleRef.current.value,
        courseComment: courseDescriptonRef.current.value,
        courseStatus: location.state.courseStatus,
        createPlaceDetailRequestList,
        createHashtagRequestList,
        updateCategoryListRequestList,

        createPlaceImgRequestList: createPlaceImgRequestListState,
        deletePlaceImgRequestList: deletePlaceImgRequestListState,
        updatePlaceImgRequestList: updatePlaceImgRequestListState,
      };
    } else {
      sendData = {
        courseTitle: courseTitleRef.current.value,
        courseComment: courseDescriptonRef.current.value,
        createPlaceDetailRequestList,
        createHashtagRequestList,
        createCategoryListRequestList,
        createPlaceImgRequestList,
      };
    }

    const sendJson = JSON.stringify(sendData);
    const jsonblob = new Blob([sendJson], { type: "application/json" });
    const imageblobs = [];

    Object.values(registeredCourseImgState).forEach((item, index) => {
      const [itemBinaryData, itemMimeType] = base64ImgSrcToImgBinaryData(item);
      console.log("itemBinaryData", itemBinaryData);
      console.log("itemMimeType", itemMimeType);
      imageblobs.push(
        itemBinaryData &&
          new Blob([itemBinaryData], {
            type: itemMimeType,
          })
      );
    });

    if (location.state) {
      formData.append("updateCourseRequest", jsonblob);
    } else {
      formData.append("createCourseRequest", jsonblob);
    }

    imageblobs.forEach((item, index) => {
      if (item) {
        if (item.type !== "null") {
          formData.append("file", item);
        }
      }
    });

    if (formData.get("file") === null) {
      formData.append("file", "");
    }

    if (!validateCourseRegistrationInput(sendData, imageblobs)) return;

    console.log("formData");
    for (let key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }

    console.log("sendData", sendData);
    if (location.state) {
      const url = `${process.env.REACT_APP_SERVER1_IP}/v1/cosmosts/${location.state.id}`;
      axios
        .put(url, formData, config)
        .then((response) => {
          alert("코스가 성공적으로 수정되었습니다.");
          navigate(`/course-detail/${location.state.id}`);
        })
        .catch((error) => console.log(error));

      return;
    } else {
      const url = `${process.env.REACT_APP_SERVER1_IP}/v1/cosmosts`;
      axios
        .post(url, formData, config)
        .then((response) => {
          alert("코스가 성공적으로 등록되었습니다.");
        })
        .catch((error) => console.log(error));
      return;
    }
  };

  return (
    <UtilDiv width={"76.8rem"} padding={"7rem 0 0 0"}>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
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
                <S.ItemRemoveButton
                  top={"-1rem"}
                  right={"-1rem"}
                  onClick={(e) => onClickRemoveCourseItem(e, 0)}
                />
              )}
              {isOver0 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,.5)",
                  }}
                ></div>
              )}
              {registeredCourseImgState.imgSrc0 === "none" || (
                <S.FeaturedImageText>대표사진</S.FeaturedImageText>
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
                <S.ItemRemoveButton
                  top={"-1rem"}
                  right={"-1rem"}
                  onClick={(e) => onClickRemoveCourseItem(e, 1)}
                />
              )}
              {isOver1 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,.5)",
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
                <S.ItemRemoveButton
                  top={"-1rem"}
                  right={"-1rem"}
                  onClick={(e) => onClickRemoveCourseItem(e, 2)}
                />
              )}
              {isOver2 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,.5)",
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
                <S.ItemRemoveButton
                  top={"-1rem"}
                  right={"-1rem"}
                  onClick={(e) => onClickRemoveCourseItem(e, 3)}
                />
              )}
              {isOver3 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,.5)",
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
                <S.ItemRemoveButton
                  top={"-1rem"}
                  right={"-1rem"}
                  onClick={(e) => onClickRemoveCourseItem(e, 4)}
                />
              )}
              {isOver4 && (
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,.5)",
                  }}
                ></div>
              )}
            </S.CoursePreviewImg>
          </div>
        </S.UploadedCourseImgsWrap>
      </S.UploadCourseImgArea>
      {/* 코스 카테고리 선택 드랍다운 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>카테고리 선택</S.CourseDetailInfoTitle>
        <S.CourseCategoryWrap>
          <S.CourseCategorySelect
            ref={locationCategoryRef}
            name="locationCategoryName"
            value={selectCategory.locationCategoryName}
            onChange={onChangeSelectCategory}
          >
            {categoryLocalList.length &&
              categoryLocalList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.locationCategoryName}
                </option>
              ))}
          </S.CourseCategorySelect>
          <S.CourseCategorySelect
            ref={themeCategoryRef}
            name="themeCategoryName"
            value={selectCategory.themeCategoryName}
            onChange={onChangeSelectCategory}
          >
            {categoryThemeList.length &&
              categoryThemeList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.themeCategoryName}
                </option>
              ))}
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
            <S.NaverMapOverlay top={window.visualViewport.pageTop}>
              <S.NaverMapForm onSubmit={onChangeNaverMapQuery}>
                <S.NaverMapHeader>
                  <S.CourseCategorySelect
                    marginRight={"0"}
                    name="addressGu"
                    value={naverMapQuery.addressGu}
                    onChange={onChangeNaverMapQuery}
                  >
                    {categoryLocalList.length &&
                      categoryLocalList.map((item) => (
                        <option key={item.id} value={item.locationCategoryName}>
                          {item.locationCategoryName}
                        </option>
                      ))}
                  </S.CourseCategorySelect>
                  <Input
                    type="text"
                    name="keyword"
                    value={naverMapQuery.keyword}
                    onChange={onChangeNaverMapQuery}
                    width={"30rem"}
                    height={"100%"}
                  />
                  <S.NaverMapHeaderButtonBox>
                    <Icon onClick={onClickNaverMapSearch}>
                      <BsIcons.BsSearch />
                    </Icon>
                    <Icon onClick={onClickNaverMapClose}>
                      <AiIcons.AiOutlineClose />
                    </Icon>
                  </S.NaverMapHeaderButtonBox>
                </S.NaverMapHeader>
                <div
                  id="map"
                  style={{
                    width: "100%",
                    height: "40rem",
                    borderRadius: `${br.default}`,
                  }}
                ></div>
              </S.NaverMapForm>
            </S.NaverMapOverlay>
          )}

          <S.AddedLocationOrHashTagsWrap>
            {placeAdd.choicePlace0 && (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace0}
                </S.CourseDetailInfoText>
                <S.ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 0);
                  }}
                />
              </div>
            )}
            {placeAdd.choicePlace1 && (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace1}
                </S.CourseDetailInfoText>
                <S.ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 1);
                  }}
                />
              </div>
            )}
            {placeAdd.choicePlace2 && (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace2}
                </S.CourseDetailInfoText>
                <S.ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 2);
                  }}
                />
              </div>
            )}
            {placeAdd.choicePlace3 && (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace3}
                </S.CourseDetailInfoText>
                <S.ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 3);
                  }}
                />
              </div>
            )}
            {placeAdd.choicePlace4 && (
              <div style={{ position: "relative" }}>
                <S.CourseDetailInfoText>
                  {placeAdd.choicePlace4}
                </S.CourseDetailInfoText>
                <S.ItemRemoveButton
                  top="-1rem"
                  right="-2rem"
                  onClick={(e) => {
                    onClickRemovePlaceItem(e, 4);
                  }}
                />
              </div>
            )}
          </S.AddedLocationOrHashTagsWrap>
        </S.AddDetailCourseInfoWrap>
        {/* 추가한 장소에 대한 코멘트 */}
        <S.PlaceCommentWrap>
          {placeAdd.choicePlace0 && (
            <span style={{ marginBottom: "1rem", fontSize: `${fs.m}` }}>
              장소 한줄평
            </span>
          )}
          {Object.values(placeAdd).map((item, index) => (
            <>
              {item && (
                <Input
                  key={index}
                  placeholder={`${index + 1}번 장소에 대한 한줄평`}
                  value={placeAddComment[index]}
                  onChange={(e) => {
                    onChangePlaceAddComment(e, index);
                  }}
                  margin={"1rem 0"}
                  maxLength={100}
                />
              )}
            </>
          ))}
        </S.PlaceCommentWrap>
      </S.AddDetailCourseInfoArea>
      {/* 해시태그 추가 영역 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>{`해시태그 추가 ${hashTagCount}/5`}</S.CourseDetailInfoTitle>
        <S.AddDetailCourseInfoWrap>
          <S.InputHashTagWrap>
            <Input
              type="text"
              placeholder="해시태그"
              maxLength={15}
              height={"3rem"}
              margin={"0 2rem 0 0"}
              fontSize={fs.m}
              onChange={onChangeHashTag}
            />
            <Button
              type="submit"
              width={"3rem"}
              height={"3rem"}
              color={color.white}
              onClick={onClickAddHashTagButton}
            >
              <AiIcons.AiOutlinePlus />
            </Button>
          </S.InputHashTagWrap>
          <S.AddedLocationOrHashTagsWrap>
            {hashTagAdd.addHashTags.map((item, index) => (
              <div key={index} style={{ position: "relative" }}>
                {item && (
                  <>
                    <S.CourseDetailInfoText>#{item}</S.CourseDetailInfoText>
                    <S.ItemRemoveButton
                      top="-1rem"
                      right="-2rem"
                      onClick={(e) => onClickRemoveHasTagItem(e, index)}
                    />
                  </>
                )}
              </div>
            ))}
          </S.AddedLocationOrHashTagsWrap>
        </S.AddDetailCourseInfoWrap>
      </S.AddDetailCourseInfoArea>
      <S.CourseInputWrap>
        {/* 코스 제목 */}
        <Input
          ref={courseTitleRef}
          type={"text"}
          placeholder={"제목"}
          maxLength={30}
          width={"45rem"}
          height={"5rem"}
          margin={"2rem 0 0 0"}
          fontSize={fs.m}
        />
        {/* 코스 설명 영역 */}
        <S.CourseDescription
          ref={courseDescriptonRef}
          placeholder="코스에 대해 설명해주세요."
          maxLength={1000}
        ></S.CourseDescription>
      </S.CourseInputWrap>

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
