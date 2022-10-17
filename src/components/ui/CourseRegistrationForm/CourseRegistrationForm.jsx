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
import { CATEGORIES } from "../../../store";
import { useState } from "react";
import styled from "styled-components";
import { FaSleigh } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { MdOutlineNotInterested } from "react-icons/md";
import axios from "axios";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import { HeaderSearchBar } from "../../common/Header";

// 등록한 코스이미지 및 해시태그를 삭제하는 X 버튼을 나타내는 컴포넌트
const ItemRemoveButton = styled(AiIcons.AiOutlineClose)`
  position: absolute;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
`;

const a = "AAA";
const b = "CCC";

function CourseRegistrationForm() {
  const navigate = useNavigate();

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
        console.log(targetId);
        console.log(SourceID);
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

  const aaaaa = (address) => {
    let { naver } = window;
    naver?.maps?.Service?.geocode(
      {
        address,
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert("Something wrong!");
        }

        let result = response.result, // 검색 결과의 컨테이너
          items = result.items; // 검색 결과의 배열

        console.log(result);
        var map = new naver.maps.Map("map", {
          center: new naver.maps.LatLng(35.179816, 129.0750223),
          zoom: 11,
        });

        items?.forEach((item) => {
          var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(item.point.y, item.point.x),
            map: map,
          });
        });

        // naver.maps.Event.addListener(marker, "click", function (e) {
        //   console.log("AAAAA");
        // });
      }
    );
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
        // withCredentials: true,
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

        console.log(items);
        items?.forEach((item) => {
          const x = item.mapx;
          const y = item.mapy;
          const tm128 = new naver.maps.Point(x, y);
          var latLng = naver.maps.TransCoord.fromTM128ToLatLng(tm128);

          var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(latLng),
            map: map,
          });

          mapMarkerCopy.push(marker);
        });
        SetNaverMapState({ ...naverMapState, naverMapMarker: mapMarkerCopy });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // aaaaa("부산광역시 남구");
  /* 코스 이미지 업로드에 쓰이는 useRef */
  const courseImgInputRef = useRef();

  /* 등록된 코스 이미지들을 검사하여 중간에 빈 칸이 있을 경우 코스 이미지들을 왼쪽으로 당겨
     중간의 빈 칸을 없애는 코드. */
  useEffect(() => {
    console.log("A");
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

  /* naverMapEnable의 enable state가 true인 경우에만 호출되는 Effect*/
  useEffect(() => {
    if (naverMapState.naverMapEnable) {
      const { naver } = window;
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(36.179816, 128.0750223),
        zoom: 7,
      });
      SetNaverMapState({ ...naverMapState, naverMapHandle: map });
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
    }
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
        if (item == "none") {
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

  /* 사용자가 코스 이미지 또는 해시태그 삭제 버튼을 클릭했을 때 호출할 핸들러
     인덱스에 해당하는 아이템의 state를 초기값으로 전달한다. */
  const onClickRemoveItem = (e, index) => {
    setRegisteredCourseImgState({
      ...registeredCourseImgState,
      ["imgSrc" + index]: `none`,
    });
  };

  /* 새로운 장소 추가에서 지도에서 장소 추가 버튼 클릭 시 호출할 이벤트 핸들러 */
  const onClickAddPlace = (e) => {
    e.preventDefault();
    SetNaverMapState({ ...naverMapState, naverMapEnable: true });
    document.querySelector("body").style.overflow = "hidden";
  };
  /* 네이버 지도에서 닫기 버튼 클릭 시 호출할 이벤트 핸들러 */
  const onClickNaverMapClose = (e) => {
    e.preventDefault();
    SetNaverMapState({ ...naverMapState, naverMapEnable: false });
    document.querySelector("body").style.overflow = "visible";
  };

  /* 네이버 지도에서 지역구 또는 키워드가 변경되었을 시 호출할 이벤트 핸들러*/
  const onChangeNaverMapQuery = (e) => {
    SetNaverMapQuery({ ...naverMapQuery, [e.target.name]: e.target.value });
  };

  /* 네이버 지도에서 검색버튼을 클릭할 경우 호출할 이벤트 핸들러*/
  const onClickNaverMapSearch = (e) => {
    e.preventDefault();
    const query = `${naverMapQuery.addressGu} ${naverMapQuery.keyword}`;
    NaverMapSearch(
      naverMapState.naverMapHandle,
      query,
      naverMapState.naverMapMarker
    );
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
                <ItemRemoveButton onClick={(e) => onClickRemoveItem(e, 0)} />
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
                <ItemRemoveButton onClick={(e) => onClickRemoveItem(e, 1)} />
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
                <ItemRemoveButton onClick={(e) => onClickRemoveItem(e, 2)} />
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
                <ItemRemoveButton onClick={(e) => onClickRemoveItem(e, 3)} />
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
                <ItemRemoveButton onClick={(e) => onClickRemoveItem(e, 4)} />
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
      {/* 코스 카테고리 선택 드랍다운 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>카테고리 선택</S.CourseDetailInfoTitle>
        <S.CourseCategoryWrap>
          <S.CourseCategorySelect>
            {CATEGORIES &&
              CATEGORIES[0].gu.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))}
          </S.CourseCategorySelect>
          <S.CourseCategorySelect>
            {CATEGORIES &&
              CATEGORIES[1].theme.map((item) => (
                <option key={item.id} value={item.value}>
                  {item.name}
                </option>
              ))}
          </S.CourseCategorySelect>
        </S.CourseCategoryWrap>
      </S.AddDetailCourseInfoArea>
      {/* 새로운 장소 추가 영역 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>새로운 장소 추가 0/5</S.CourseDetailInfoTitle>
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
                      {CATEGORIES &&
                        CATEGORIES[0].gu.map((item) => (
                          <option key={item.id} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                    </S.CourseCategorySelect>
                    <input
                      name="keyword"
                      value={naverMapQuery.keyword}
                      onChange={onChangeNaverMapQuery}
                      style={{ width: "10rem", height: "100%" }}
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
            <S.CourseDetailInfoText>1번 장소</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>2번 장소</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>3번 장소</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>4번 장소</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>5번 장소</S.CourseDetailInfoText>
          </S.AddedLocationOrHashTagsWrap>
        </S.AddDetailCourseInfoWrap>
      </S.AddDetailCourseInfoArea>
      {/* 해시태그 추가 영역 */}
      <S.AddDetailCourseInfoArea>
        <S.CourseDetailInfoTitle>해시태그 추가 0/5</S.CourseDetailInfoTitle>
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
            />
            <Button
              width={"3rem"}
              height={"3rem"}
              color={color.white}
              type="button"
            >
              <AiIcons.AiOutlinePlus />
            </Button>
          </S.InputHashTagWrap>
          <S.AddedLocationOrHashTagsWrap>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
            <S.CourseDetailInfoText>#해시태그</S.CourseDetailInfoText>
          </S.AddedLocationOrHashTagsWrap>
        </S.AddDetailCourseInfoWrap>
      </S.AddDetailCourseInfoArea>
      {/* 코스 설명 영역 */}
      <S.CourseDescription
        placeholder="코스에 대해 설명해주세요."
        maxLength={1000}
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
          // 임시로 메인 페이지로 redirect되게 해놓음 추후 수정
          onClick={() => navigate("/")}
        >
          등록
        </Button>
      </S.CourseRegistrationButtonWrap>
    </UtilDiv>
  );
}

export default CourseRegistrationForm;
