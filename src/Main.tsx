import React from 'react';
import { ASIDEFILLER, NEWSAPIKEY } from './storages/Main';
import { MiscMaster } from './misc/_MiscMaster';

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
      {process.env.NODE_ENV === "development" && <MiscMaster />}
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
  const [news, setNews] = React.useState<NewsAPIResponse["articles"] | null>(null);

  React.useEffect(() => {
    fetchNews();

    async function fetchNews() {
      const response = await fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWSAPIKEY}`);
      const json: NewsAPIResponse = await response.json();
      console.log(json);
      
      setNews(json.articles);
    }
  }, [setNews]);

  return (
    <section className="bignews">
      <h2>News</h2>
      <form action="">
        <label htmlFor=""></label>
        <input type="text" name="" id=""/>
      </form>
      <ul>
      {
        news?.map((article) => (
          <li key={article.publishedAt}>
            <article>
              <h3>{article.title}</h3>
              <a href={article.url}><img src={article.urlToImage} alt={article.description}/></a>
              <p>{article.content}</p>
            </article>
          </li>
        ))
      }
      </ul>
    </section>
  );
}