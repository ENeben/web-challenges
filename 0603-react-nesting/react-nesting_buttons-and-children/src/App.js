import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Read me.</Button>
      <Button>Click me.</Button>
      <Button>Go to the next page.</Button>
      <Button>Confetti!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
