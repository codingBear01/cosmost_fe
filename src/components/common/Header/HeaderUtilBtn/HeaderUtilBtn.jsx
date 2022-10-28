/* librarie */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* recoil */
import { useRecoilState } from "recoil";
import { loginStateAtom } from "../../../../store";
/* components */
import { SmallProfilePic, Icon } from "../../../";
/* icons */
import * as AiIcons from "react-icons/ai";
import axios from "axios";
function HeaderUtilBtn() {
  const token = localStorage.getItem("token");
  const [isLoggedIn] = useRecoilState(loginStateAtom);

  //사용자 정보를 나타내는 state.
  const [userInfo, setUserInfo] = useState(null);

  // 사용자 정보 가져오기
  useEffect(() => {
    if (token && isLoggedIn) {
      const url = `${process.env.REACT_APP_SERVER2_IP}/v1/auths`;
      const config = {
        headers: {
          Authorization: token,
        },
        timeout: 1000,
      };
      axios
        .get(url, config)
        .then((resonse) => {
          setUserInfo(resonse.data);
          console.log(resonse);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      {token && isLoggedIn && userInfo ? (
        <Link to={`/user/${userInfo.id}`} state={userInfo}>
          <SmallProfilePic
            src={userInfo.profileImgSaveUrl}
            alt={"profile_pic"}
          />
        </Link>
      ) : (
        <Link to="/login">
          <Icon>
            <AiIcons.AiOutlineLogin style={{ margin: "0" }} />
          </Icon>
        </Link>
      )}
    </>
  );
}

export default HeaderUtilBtn;
