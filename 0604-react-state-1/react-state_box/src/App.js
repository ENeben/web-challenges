import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    console.log("button clicked");
    setIsActive(!isActive);
    // setIsActive PLANT nur die Zustandsänderung
    console.log(isActive);
  }

  // erst NACH der Funktion, in der die Zustandsänderung geplant wird,
  // wird die Zustandsänderung und das erneute Rendern ausgeführt.

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
