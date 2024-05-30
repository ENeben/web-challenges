import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  return (
    <p>
      {isHappy ? (
        <span aria-label="happy-emoji">😁</span>
      ) : (
        <span aria-label="sad-emoji">😟</span>
      )}
    </p>
  );
}
