import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// const fetcher = (url) => fetch(url).then((response) => response.json());

// hier die gleiche fetcher funktion wie oben nur mit besserem error-handling:

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occured while fetching data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function ISSTracker() {
  const {
    data: coords,
    isLoading,
    error,
    mutate,
  } = useSWR(URL, fetcher, { refreshInterval: 5000 });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.log(`An error occured while fetching data. Status: ${error.status}. Info:
      ${error.info?.message}.`);
    return <p>An error occured.</p>;
  }
  if (!coords) return <p>No data available.</p>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
