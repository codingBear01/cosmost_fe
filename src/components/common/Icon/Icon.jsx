import React from "react";
/* components */
import * as S from "./styled";

function HeaderIcon({ onClick, children }) {
  return <S.StyledHeaderIcon onClick={onClick}>{children}</S.StyledHeaderIcon>;
}

export default HeaderIcon;
