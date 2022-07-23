import React, { useState } from 'react';
import * as S from './Styled';
import useGithub from '../../hooks/GithubHooks';

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState(undefined);

  const submitGetUser = () => {
    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
