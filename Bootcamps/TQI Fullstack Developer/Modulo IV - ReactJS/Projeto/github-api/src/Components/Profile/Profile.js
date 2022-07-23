import React from 'react';
import useGithub from '../../hooks/GithubHooks';
import * as S from './Styled';

function Profile() {
  const { GitHubstate } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage
        src={GitHubstate.user.avatar_url}
        alt="avatar do usuário"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{GitHubstate.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={GitHubstate.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {GitHubstate.user.login}
            </a>
          </S.WrapperUserGeneric>

          <S.WrapperUserGeneric>
            <h3>Company: </h3>
            <span>{GitHubstate.user.company}</span>
          </S.WrapperUserGeneric>

          <S.WrapperUserGeneric>
            <h3>Location: </h3>
            <span>{GitHubstate.user.location}</span>
          </S.WrapperUserGeneric>

          <S.WrapperUserGeneric>
            <h3>Blog: </h3>
            <a
              href={GitHubstate.user.blog}
              target="_blank"
              rel="noreferrer"
            >
              {GitHubstate.user.blog}
            </a>
          </S.WrapperUserGeneric>
          
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{GitHubstate.user.followers}</span>
          </div>

          <div>
            <h4>Gists</h4>
            <span>{GitHubstate.user.public_gists}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>{GitHubstate.user.following}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{GitHubstate.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;
