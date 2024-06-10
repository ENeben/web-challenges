import { useEffect, useState } from "react";

console.clear();

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [data, setData] = useState({});
  const [nextURL, setNextURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  console.log("data", data);
  console.log("pokemon", pokemon);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(nextURL);
        const data = await response.json();
        setPokemon(data.results);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [nextURL]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setNextURL(data.previous);
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setNextURL(data.next);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
