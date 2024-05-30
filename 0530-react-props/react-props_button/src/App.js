import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You have just clicked a button.");
  }

  return <Button color="#f00" text="Click me!" onClick={handleClick} />;
}

function Button({ color, isDisabled, text, onClick }) {
  return (
    <button onClick={onClick} style={{ color: color }} disabled={isDisabled}>
      {text}
    </button>
  );
}

//warum nicht so?
//style="color:{color};"
