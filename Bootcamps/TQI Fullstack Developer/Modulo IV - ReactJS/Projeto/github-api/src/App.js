import React from 'react';
import Layout from './Components/layout/Layout';
import NoSearch from './Components/noSearch/NoSearch';
import Profile from './Components/Profile/Profile';
import Repositories from './Components/repositories/Repositories';
import useGithub from './hooks/GithubHooks';

function App() {
  const { GitHubstate } = useGithub();

  return (
    <Layout>
      {GitHubstate.hasUser ? (
        <>
          {GitHubstate.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
