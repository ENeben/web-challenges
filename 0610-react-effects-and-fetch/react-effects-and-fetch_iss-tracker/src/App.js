import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function getISSCoords() {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch data! Status Code: ${response.status}`
          );
        }

        const data = await response.json();

        setCoords(data);
      } catch (error) {
        alert("An error occurred: ", error);
      }
    }

    getISSCoords();

    const intervalID = setInterval(getISSCoords, 5000);

    return function cleanup() {
      clearInterval(intervalID);
    };
  }, []);

  // Wann wird die cleanup funktion ausgeführt?
  // wie kann der Refresh-Button wieder funktionieren?

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
