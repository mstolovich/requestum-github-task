import React, { FC, ReactElement } from 'react';
import './App.scss';
import { SearchPanel } from "../SearchPanel";
import { RepositoryList } from "../RepositoryList";
import { Header } from '../Header';

export const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <Header />
      <div id="appContainer">
        <SearchPanel />
        <RepositoryList />
      </div>
    </div>
  );
}

