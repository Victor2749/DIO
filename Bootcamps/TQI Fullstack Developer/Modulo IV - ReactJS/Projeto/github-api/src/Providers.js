import React from 'react';
import App from './App';
import GitHubProvider from './Components/Providers/GitHubProvider';
import { ResetCSS } from './Global/ResetCSS';

function Providers() {
  return (
    <main>
      <GitHubProvider>
        <ResetCSS />
        <App />
      </GitHubProvider>
    </main>
  );
}

export default Providers;
