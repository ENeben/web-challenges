import React from "react";
import "./styles.css";

console.clear();

export default function App() {
  function handleClick() {
    console.log("You have just clicked a button.");
  }
  return <Button textColor="#f00" text="Click me!" onClick={handleClick} />;
}

function Button({ textColor, isDisabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ color: textColor }}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
