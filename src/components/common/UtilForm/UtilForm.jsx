/* hooks */
import React from "react";
/* components */
import * as S from "./styled";

function UtilForm({ j_content, pd, children, onSubmit }) {
  return (
    <>
      <S.StyledUtilForm j_content={j_content} pd={pd} onSubmit={onSubmit}>
        {children}
      </S.StyledUtilForm>
    </>
  );
}

export default UtilForm;
