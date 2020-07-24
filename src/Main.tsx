import React from 'react';
import { NEWSAPIKEY } from './storages/Main';
import { MiscMaster } from './misc/_MiscMaster';

import "./Main.scss";

export function Main() {
  return (
    <main>
      <RedditFeed />
      {process.env.NODE_ENV === "development" && <MiscMaster />}
      <News />
    </main>
  );
}

function RedditFeed() {

  return (
    <section className="redditfetch">
      <h2>Reddit threads</h2>
    </section>
  );
}

function News() {
  const [news, setNews] = React.useState<NewsAPIResponseJSON["articles"] | null>(null);

  /** News API has 2 main endpoints and a minor one. */
  const endpoint = {
    /** 
     * This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources. You can also search with keywords. Articles are sorted by the earliest date published first. 
     * 
     * This endpoint is great for retrieving headlines for display on news tickers or similar.
      */
    topHeadlines: "/v2/top-headlines",
    /**
     *  Search through millions of articles from over 50,000 large and small news sources and blogs. This includes breaking news as well as lesser articles.
     * 
     * This endpoint suits article discovery and analysis, but can be used to retrieve articles for display, too.
     */
    everything: "/v2/everything",
    /**
     *  Returns the subset of news publishers that top headlines (/v2/top-headlines) are available from. It's mainly a convenience endpoint that you can use to keep track of the publishers available on the API, and you can pipe it straight through to your users.
      */
    sources: "/v2/sources",
  };

  /** 
   * The 2-letter ISO 3166-1 code of the country you want to get headlines for.
   * 
   * Note: can't mix this param with the "source" param.
   */
  const country = {
    ae: "country=ae", 
    ar: "country=ar", 
    at: "country=at", 
    au: "country=au", 
    be: "country=be", 
    bg: "country=bg", 
    br: "country=br", 
    ca: "country=ca", 
    ch: "country=ch", 
    cn: "country=cn", 
    co: "country=co", 
    cu: "country=cu", 
    cz: "country=cz", 
    de: "country=de", 
    eg: "country=eg", 
    fr: "country=fr", 
    gb: "country=gb", 
    gr: "country=gr", 
    hk: "country=hk", 
    hu: "country=hu", 
    id: "country=id", 
    ie: "country=ie", 
    il: "country=il", 
    in: "country=in", 
    it: "country=it", 
    jp: "country=jp", 
    kr: "country=kr", 
    lt: "country=lt", 
    lv: "country=lv", 
    ma: "country=ma", 
    mx: "country=mx", 
    my: "country=my", 
    ng: "country=ng", 
    nl: "country=nl", 
    no: "country=no", 
    nz: "country=nz", 
    ph: "country=ph", 
    pl: "country=pl", 
    pt: "country=pt", 
    ro: "country=ro", 
    rs: "country=rs", 
    ru: "country=ru", 
    sa: "country=sa", 
    se: "country=se", 
    sg: "country=sg", 
    si: "country=si", 
    sk: "country=sk", 
    th: "country=th", 
    tr: "country=tr", 
    tw: "country=tw", 
    ua: "country=ua", 
    us: "country=us", 
    ve: "country=ve", 
    za: "country=za",
  }

  /**
   * The category you want to get headlines for.
   * 
   * Note: you can't mix this param with the "source" param. 
   */
  const category = {
   business: "business", 
   entertainment: "entertainment", 
   general: "general", 
   health: "health", 
   science: "science", 
   sports: "sports", 
   technology: "technology",
  }

  React.useEffect(() => {
    fetchNews();
  }, [setNews]);

  async function fetchNews() {
    const response = await fetch(`http://newsapi.org${endpoint.topHeadlines}?${country.us}&pageSize=5&apiKey=${NEWSAPIKEY}`);
    const json: NewsAPIResponseJSON = await response.json();
    console.log(json);
    
    setNews(json.articles);
  }

  return (
    <aside className="bignews">
      <h2>News</h2>
      <NewsSearchParams />
      <ul>
      {
        news?.map((article) => (
          <li key={article.publishedAt}>
            <article className="newsarticle">
              <h3>{article.title}</h3>
              <a href={article.url}>
                <img 
                  src={article.urlToImage} 
                  alt={article.description || `news article`}
                />
              </a>
              {
                article.content !== "" && article.content && <p className="newscontent" >{article.content}</p>
              }
            </article>
          </li>
        ))
      }
      </ul>
    </aside>
  );
}

function NewsSearchParams() {
  return (
    <form>
        <h3>Search parameters</h3>
        <fieldset>
          <legend>Required</legend>
          <label htmlFor="">Search param:</label>
          <input type="search" name="" id=""/>
        </fieldset>
      </form>
  );
}