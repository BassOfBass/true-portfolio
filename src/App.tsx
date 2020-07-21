import React from 'react';
import './App.scss';
import { Main } from './Main';
import { Header } from './Header';

export function App() {
  return (
    <>
      <Header />
      <Main />
      <footer>
        <address>
          <p>This site was created by Pete Buttgig</p>
          <p>
            E-mail: <a href="mailto: vinniethepooloo@protonmail.com">vinniethepoolooATprotonmail.com</a>
          </p>
        </address>
      </footer>
    </>
  );
}
