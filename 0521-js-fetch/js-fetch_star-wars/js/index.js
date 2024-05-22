import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

const EXAMPLE_DATA = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hairColor: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

// Create dom element for a card and append it to the root

const firstCard = Card(EXAMPLE_DATA);
renderElement(firstCard);

// --v-- your code below this line --v--

const URL = "https://swapi.py4e.com/api/people/";

async function fetchDataAndRender() {
  let counter = 1;
  let hasNextPage = true;

  try {
    while (hasNextPage) {
      const response = await fetch(`${URL}?page=${counter}`);

      if (!response.ok) {
        throw new Error(
          `Error at page ${counter}. Failed to fetch data! Status code: ${response.status}`
        );
      }

      const data = await response.json();
      console.log("data: ", data);

      const characters = data.results;
      characters.forEach((character) => {
        const card = Card(character);
        renderElement(card);
      });

      hasNextPage = data.next !== null;
      counter++;
    }
  } catch (error) {
    console.log("error: ", error);
    return { error: error };
  }
}

fetchDataAndRender();
