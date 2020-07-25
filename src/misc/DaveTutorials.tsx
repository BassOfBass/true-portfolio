import React from "react";
import "./DaveTutorials.scss";

export function DaveTutorials() {
  /** Set up a piece of state, so that we have a way to trigger a re-render. */
  const [random, setRandom] = React.useState(Math.random());
  /** Set up another piece of state to keep track of whether the LifecycleDemo is shown or hidden */
  const [mounted, setMounted] = React.useState(true);

  /**
   * This function will change the random number, and trigger a re-render (in the console, you'll see a "render!" from LifecycleDemo).
   */
  function reRender() {
    setRandom(() => Math.random());
  }

  /**
   * This function will unmount and re-mount the LifecycleDemo, so you can see its cleanup function being called.
   */
  function toggle() {
    setMounted((s) => !s);
  }

  return (
    <article className="davetutorials">
      <h3>Dave tutorials</h3>
      <section className="lifecycledemo">
        <h4>Lifecycle Demo</h4>
        <button onClick={reRender} >Re-render</button>
        <button onClick={toggle} >Show/hide {LifecycleDemo.name}</button>
        {mounted && <LifecycleDemo />}
      </section>
      <section className="renderqueue">
        <h4>Render Queue</h4>
        <Top />
      </section>
      <section className="statechange">
        <h4>State Change</h4>
        <ThreeCounts />
      </section>
      <section className="propchange">
        <h4>Props Change</h4>
        <PropChangeDemo />
      </section>
      <section className="focusonmount">
        <h4>Focus on Mount</h4>
        <FocusOnMount />
      </section>
      <section className="fetcheffect">
        <h4>Fetch Data with useEffect</h4>
        <RedditFeeder />
      </section>
      <section className="freefall">
        <h4>Sandbox</h4>
        <Sandbox />
        <HookedFetcher />
      </section>
    </article>
  );
}

function LifecycleDemo() {
  const [value, setValue] = React.useState("initial");

  React.useEffect(() => {
    // This effect uses the `value` variable, so it "depends on" `value`.
    console.log(value);
  }, [value]);

  // Pass useEffect a function. 
  React.useEffect(() => {
    // This gets called after every render, by default (the first one, and every one after that)
    console.log("Render!");

    // If you want to implement componentWillUnmount, return a function from here, and React will call it prior to unmounting.
    return () => {console.log("Unmounting...");
    }
  });

  return (
    <p>
      "I am a lifecycle demo"
    </p>
  );
};

function Top() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Top rendered");
  });

  return (
    <>
      <div onClick={() => setCount(count + 1)}>Top Level {count}</div>
      <Middle />
    </>
  );
}

function Middle() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Middle rendered");
  });

  return (
    <>
      <div onClick={() => setCount(count + 1)}>Middle Level {count}</div>
      <Bottom />
    </>
  );
}

function Bottom() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Bottom rendered");
  });

  return <div onClick={() => setCount(count + 1)}>Bottom Level {count}</div>;
}

function ThreeCounts() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  React.useEffect(() => {
    console.log("count2 changed!");
  }, [count2]);

  return (
    <div>
      <p>{count1} {count2} {count3}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
      <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
    </div>
  );
}

function PropChangeDemo() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return (
    <div>
      <PropChangeWatch a={count1} b={count2} />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </div>
  );
}

interface PropChangeWatch {
  a: number;
  b: number;
}

function PropChangeWatch({a, b}: PropChangeWatch) {
  React.useEffect(() => {
    console.log("value of 'a' changed to", a);
  }, [a]);

  return (
    <div>
      I've got 2 props: a={a} and b={b}
    </div>
  );
}

function FocusOnMount() {
  /** Store a reference to the input's DOM node. */
  const inputRef = React.useRef();

	// Store the input's value in state.
  const [value, setValue] = React.useState("");

  React.useEffect(
    () => {
      // This runs AFTER the first render,
      // so the ref is set by now.
      console.log("render");
      // inputRef.current.focus();
    },
		// The effect "depends on" inputRef
    [inputRef]
  );

  return (
    <input
      // @ts-ignore
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

function RedditFeeder() {
  const [inputValue, setValue] = React.useState("reactjs");
  const [subreddit, setSubreddit] = React.useState(inputValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubreddit(() => inputValue);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          value={inputValue}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <RedditFetcher subreddit={subreddit}/>
    </>
  );
}

interface RedditFetcherArg {
  subreddit: string;
}

function RedditFetcher({ subreddit }: RedditFetcherArg) {
  // Initialize state to hold the posts
  const [posts, setPosts] = React.useState([]);

  // effect functions can't be async, so declare the async function inside the effect, then call it
  React.useEffect(() => {
    async function fetchData() {
      /**  Call fetch as usual */
      const res = await fetch(
        `https://www.reddit.com/r/${subreddit}.json`
      );

      /** Pull out the data as usual */ 
      const json = await res.json();

      // Save the posts into state (look at the Network tab to see why the path is like this)
      // @ts-ignore
      setPosts(json.data.children.map(c => c.data));
    }

    fetchData();
  }, [subreddit, setPosts]);

  // Render as usual
  return (
    <ul>
      {posts.map(post => (
        // @ts-ignore
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function Sandbox() { // TODO fix onChange input rerendering
  const inputRef = React.useRef(document.title);
  const [inputValue, changeInputValue] = React.useState(inputRef.current)
  const [formValue, changeFormValue] = React.useState(document.title);

  React.useEffect(() => {
    document.title = formValue;
  }, [formValue]);

  React.useEffect(() => {
    console.log("form rerendered");
  })

  function handleSubmit(e:React.FormEvent) {
    e.preventDefault();
    changeFormValue(() => inputValue);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="titlechanger">Change the document title:</label>
      <input 
        // @ts-ignore 
        ref={inputRef}
        type="text" 
        name="title" 
        id="titlechanger" 
        value={inputValue}
        onChange={(e) => changeInputValue(e.target.value)}
      />
    </form>
  );
}

function HookedFetcher() {
  return (
    <>
      HookedFetcher
    </>
    );
}