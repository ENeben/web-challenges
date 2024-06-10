import { useEffect, useState } from "react";

console.clear();

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({});
  const [nextURL, setNextURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  console.log("pokemon", pokemon);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(nextURL);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [nextURL]);

  if (!pokemon.results) {
    return <p>...loading</p>;
  }

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setNextURL(pokemon.previous);
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setNextURL(pokemon.next);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
