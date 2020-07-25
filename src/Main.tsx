import React from 'react';
import { NEWSAPI } from './storages/Main';
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
  const [inputValue, setValue] = React.useState("reactjs");
  const [subreddit, setSubreddit] = React.useState(inputValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubreddit(() => inputValue);
  }

  return (
    <section className="redditfeed">
      <h2>Reddit threads</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subredditsearch">Search subreddit:</label>
        <input 
          type="search"
          id="subredditsearch"
          value={inputValue}
          onChange={e => setValue(e.target.value)}
          name="subredditsearch"
        />
      </form>
      <RedditFetcher subreddit={subreddit}/>
    </section>
  );
}

function RedditFetcher({ subreddit }: RedditFetcherArg) {
  const [posts, setPosts] = React.useState<RedditAPIThreadData[]>([]);

  React.useEffect(() => {
    fetchData();

    async function fetchData() {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddit}.json`
      );
      const json: RedditAPIResponseJSON = await response.json();
      console.log(json);
      setPosts(json.data.children.map(thread => thread.data));
    }
  }, [subreddit, setPosts]);

  return (
    <ul className="rdthreads">
      {
        posts?.map(post => (
          <li key={post.id} className="rdthread">
            <a href={post.url}>{post.title}</a> by <b>{post.author}</b>
          </li>
        ))
      }
    </ul>
  );
}

function News() {
  const [news, setNews] = React.useState<NewsAPIResponseJSON["articles"]>([]);
  const {endpoint, country, apiKey} = NEWSAPI;

  React.useEffect(() => {
    fetchNews();
  }, [setNews]);

  async function fetchNews() {
    const response = await fetch(`http://newsapi.org${endpoint.topHeadlines}?${country.us}&pageSize=5&apiKey=${apiKey}`);
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