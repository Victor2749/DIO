import React from 'react';
import * as S from "./Styled"
function RepositoryItem({name,linkToRepo,fullName}) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>FullName:</S.WrapperFullName>
      <S.Wrapperlink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.Wrapperlink>
    </S.Wrapper>
  );
}

export default RepositoryItem;
