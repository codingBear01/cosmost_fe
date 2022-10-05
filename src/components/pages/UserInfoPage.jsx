import React from "react";
import { useLocation } from "react-router-dom";
import { UserInfoForm } from "..";

function UserInfoPage() {
  const location = useLocation();
  return <UserInfoForm state={location.state} />;
}

export default UserInfoPage;
