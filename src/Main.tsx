import React from 'react';
import { SECTIONFILLER, ASIDEFILLER } from './storages/Main';

import "./Main.scss";

export function Main() {
  
  const asideFiller = ASIDEFILLER;
  const [sect, switchSect] = React.useState(false);

  return (
    <main>
      <div className="mainhead">
        <h1>Content section</h1>
        <button 
          className="sectionctrl"
          type="button" 
          onClick={() => switchSect(!sect)}
        >
          Switch section
        </button>
      </div>
      {sect ? <Calendar /> : <News />}
      <aside>
        <h2>Aside</h2>
        {
          asideFiller.map(article => (
            <article key={article.id}>
              <h3>{article.heading}</h3>
              <p>{article.text}</p>
            </article>
          ))
        }
      </aside>
    </main>
  );
}


function Calendar() {
  const currentDate = new Date();

  return (
    <section className="calendar">
      <h2>Calendar</h2>
      <span>{currentDate.toDateString()}</span>
    </section>
  );
}

function News() {
  const sectionFiller = SECTIONFILLER;

  return (
    <section>
        <h2>Content section</h2>
        {
          sectionFiller.map(article => (
            <article key={article.id}>
              <h3>{article.heading}</h3>
              <p>
                {article.text}
              </p>
            </article>
          ))
        }
      </section>
  );
}