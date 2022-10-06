import DaumPostcode from 'react-daum-postcode';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { COLOR_LIST as color } from '../../../style';
import styled from 'styled-components';
import { Button, FlexDiv } from '../../common';
import { useNavigate } from 'react-router-dom';

const AddressApi = styled(DaumPostcode)`
  height: 100% !important;
`;

const LocationBaseImg = styled(BiCurrentLocation)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  color: ${color.white};
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

function DaumAddressApiModal({ state }) {
  const navigate = useNavigate();

  /* 사용자가 주소창에서 주소를 선택했을 시 호출할 핸들러 
     주소 상세 페이지로 리다이렉트 시켜주며 이 때 사용자가 선택한 주소값을 다음 페이지로 전달시켜준다. */
  const onCompleteAddressModal = (result) => {
    navigate('/detail-address', {
      state: { ...state, address: result.address },
    });
  };

  /*API 모달창에서 현재 위치로 설정 버튼 클릭시 호출할 핸들러
    사용자 현재 위치를 네이버 API를 사용해 주소로 변환시킨다.*/
  const onClickCurrentLocation = (e) => {
    e.preventDefault();
    const { naver } = window;

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        naver.maps.Service.reverseGeocode(
          {
            location: new naver.maps.LatLng(latitude, longitude),
          },
          function (status, response) {
            if (status !== naver.maps.Service.Status.OK) {
              return alert('Something wrong!');
            }

            let result = response.result,
              Address = result.items[1];
            console.log(Address);
            navigate('/detail-address', {
              state: { ...state, address: Address.address },
            });
          }
        );
      },
      (e) => {
        if (e.message === 'User denied Geolocation') {
          alert(
            '현재 사용자가 위치 검색 기능을 허용하지 않았습니다. 위치 검색을 허용해주세요.'
          );
        } else {
          alert('알 수 없는 문제가 발생했습니다. 관리자에게 문의하세요.');
        }
      },
      {
        enableHighAccuracy: true,
      }
    );
  };

  return (
    <Div>
      <FlexDiv justifyContent="right">
        <LocationBaseImg />
        <Button
          width="12rem"
          h="5rem"
          fs="1.5rem"
          col={color.white}
          onClick={onClickCurrentLocation}
        >
          현재 위치로 설정
        </Button>
      </FlexDiv>
      <AddressApi onComplete={onCompleteAddressModal} />
    </Div>
  );
}

export default DaumAddressApiModal;
