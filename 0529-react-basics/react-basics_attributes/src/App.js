import React from "react";
import "./styles.css";

export default function App() {
  return <ArticleComponent />;
}

function ArticleComponent() {
  return (
    <article className="article">
      <h2 className="article__title">I am the second headline.</h2>
      <label htmlFor="keksdose"></label>
      <input id="keksdose"></input>
      <a className="article__link" href="https://react.dev/">
        Discover React!
      </a>
    </article>
  );
}
