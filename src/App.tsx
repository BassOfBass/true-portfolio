import React from 'react';
import './App.scss';
import { sunflowerMandala } from './img/imgObjects';
import { Main } from './Main';

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

function Header() {
  return (
    <header>
        <h1>
          Peter's corner 
          <img src={sunflowerMandala.png} alt="sunflower logo" />
        </h1>
        <small>The application is running in <b>{process.env.NODE_ENV}</b> mode.</small>
        <nav>
          {/* <h2>Navigation</h2> */}
          <ul>
            <li><a href="#">Section 1</a></li>
            <li><a href="#">Section 2</a></li>
            <li><a href="#">Section 3</a></li>
            <li><a href="#">Section 4</a></li>
            <li><a href="#">Section 5</a></li>
            <li><a href="#">Section 6</a></li>
            <li><a href="#">Section 7</a></li>
            <li><a href="#">Section 8</a></li>
            <li><a href="#">Section 9</a></li>
            <li><a href="#">Section 10</a></li>
          </ul>
        </nav>
      </header>
  );
}

