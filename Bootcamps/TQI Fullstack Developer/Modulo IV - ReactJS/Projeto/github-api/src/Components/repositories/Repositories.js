import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/GithubHooks';
import RepositoryItem from '../repository-item/RepositoryItem';
import * as S from './Styled';

function Repositories() {
  const { GitHubstate, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSeachRepos, setHasUserForSeachRepos] = useState(false);

  useEffect(() => {
    if (GitHubstate.user.login) {
      getUserRepos(GitHubstate.user.login);
      getUserStarred(GitHubstate.user.login);
    }

    setHasUserForSeachRepos(GitHubstate.repositories);
  }, [GitHubstate.user.login]);

  return (
    <>
      {hasUserForSeachRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {GitHubstate.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {GitHubstate.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.owner.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
}

export default Repositories;
