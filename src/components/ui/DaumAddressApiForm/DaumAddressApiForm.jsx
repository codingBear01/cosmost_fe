/* libraries */
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* components */
import * as S from './styled';
import { Button } from '../../';
/* icons */
import * as BiIcons from 'react-icons/bi';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import './style.css';

function DaumAddressApiModal({ state }) {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  /* 사용자가 주소창에서 주소를 선택했을 시 호출할 핸들러 
     주소 상세 페이지로 리다이렉트하며 이 때 사용자가 선택한 주소값을 다음 페이지로 전달한다. */
  const onCompleteAddressModal = (result) => {
    if (path.includes('edit')) {
      navigate('/user/edit/detail-address', {
        state: { ...state, address: result.address },
      });
    } else if (path.includes('naver')) {
      navigate('/naver/detail-address', {
        state: { ...state, address: result.address },
      });
    } else {
      navigate('/detail-address', {
        state: { ...state, address: result.address },
      });
    }
  };

  /*API 모달창에서 현재 위치로 설정 버튼 클릭시 호출할 핸들러
    사용자 현재 위치를 네이버 API를 사용해 주소로 변환한다.*/
  const onClickCurrentLocation = (e) => {
    e.preventDefault();
    const { naver } = window;

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        naver.maps.Service.reverseGeocode(
          {
            location: new naver.maps.LatLng(latitude, longitude),
          },
          function (status, response) {
            if (status !== naver.maps.Service.Status.OK) {
              toast.error(
                '위치 정보를 불러올 수 없습니다. 주소를 직접 입력해주세요.',
                { autoClose: 3000 }
              );
            }

            let result = response.result,
              Address = result.items[1];

            if (path.includes('edit')) {
              navigate('/user/edit/detail-address', {
                state: { ...state, address: Address.address },
              });
            } else if (path.includes('naver')) {
              navigate('/naver/detail-address', {
                state: { ...state, address: Address.address },
              });
            } else {
              navigate('/detail-address', {
                state: { ...state, address: Address.address },
              });
            }
          }
        );
      },
      (e) => {
        if (e.message === 'User denied Geolocation') {
          toast.error(
            '위치 검색 기능을 허용하지 않았습니다. 위치 검색을 허용해주세요.',
            { autoClose: 3000 }
          );
        } else {
          toast.error(
            '알 수 없는 문제가 발생했습니다. 관리자에게 문의하세요.',
            { autoClose: 3000 }
          );
        }
      },
      {
        enableHighAccuracy: true,
      }
    );
  };

  return (
    <S.AddressApiWrap>
      <S.GettingCurrentLocationButtonWrap>
        <BiIcons.BiCurrentLocation />
        <Button
          height="5rem"
          margin={'0 0 0 10px'}
          fontSize="14px"
          color={color.white}
          onClick={onClickCurrentLocation}
        >
          현재 위치로 설정
        </Button>
      </S.GettingCurrentLocationButtonWrap>
      <S.AddressApiContent onComplete={onCompleteAddressModal} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
        limit={1}
      />
    </S.AddressApiWrap>
  );
}

export default DaumAddressApiModal;
