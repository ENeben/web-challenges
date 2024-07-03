import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: "1", name: "Living Room", isOn: false },
  { id: "2", name: "Kitchen", isOn: false },
  { id: "3", name: "Bedroom", isOn: false },
  { id: "4", name: "Bathroom", isOn: false },
  { id: "5", name: "Garage", isOn: false },
  { id: "6", name: "Porch", isOn: false },
  { id: "7", name: "Garden", isOn: false },
  { id: "8", name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(lightID) {
    setLights(
      lights.map((light) => {
        return light.id === lightID ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  const switchedOnLights = lights.filter((light) => {
    return light.isOn === true;
  });

  const switchedOnSum = switchedOnLights.length;

  const isAllLightsOn = lights.length === switchedOnSum;
  const isAllLightsOff = switchedOnSum === 0;

  // console.log(isAllLightsOn);
  // console.log(isAllLightsOff);

  function handleLightsOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  function handleLightsOff() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  // console.log(lights);

  return (
    <Layout isAllLightsOff={isAllLightsOff}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        onLightsOn={handleLightsOn}
        onLightsOff={handleLightsOff}
        switchedOnSum={switchedOnSum}
        isAllLightsOn={isAllLightsOn}
        isAllLightsOff={isAllLightsOff}
      />
    </Layout>
  );
}
