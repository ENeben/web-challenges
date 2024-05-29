import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Ich bin die h1.</h1>
      <p>Ich bin der Paragraph.</p>
    </article>
  );
}
