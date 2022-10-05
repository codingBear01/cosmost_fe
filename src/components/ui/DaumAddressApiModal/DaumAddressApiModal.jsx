import DaumPostcode from "react-daum-postcode";
import { AiFillCloseSquare } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { COLOR_LIST } from "../../../style";
import styled from "styled-components";
import { Button, FlexDiv } from "../../common";
import { useNavigate } from "react-router-dom";

const AddressApi = styled(DaumPostcode)`
  height: 100% !important;
`;

const LocationBaseImg = styled(BiCurrentLocation)`
  width: 5rem;
  height: 5rem;
  background-color: ${COLOR_LIST.white};
  color: black;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

function DaumAddressApiModal() {
  const navigate = useNavigate();

  /* 사용자가 주소창에서 주소를 선택했을 시 호출할 핸들러 
     주소 상세 페이지로 리다이렉트 시켜주며 이 때 사용자가 선택한 주소값을 다음 페이지로 전달시켜준다. */
  const onCompleteAddressModal = (result) => {
    navigate("/util/location-detail", { state: { address: result.address } });
  };

  const onClickCurrentLocation = (e) => {};

  return (
    <Div>
      <FlexDiv justifyContent="right">
        <LocationBaseImg />
        <Button
          width="12rem"
          h="5rem"
          fs="1.5rem"
          col={COLOR_LIST.white}
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
