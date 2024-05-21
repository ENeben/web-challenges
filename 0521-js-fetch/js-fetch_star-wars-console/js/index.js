console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log("response: ", response);

  const data = await response.json();
  console.log("data: ", data);

  console.log("all characters:");
  const characters = data.results;
  characters.forEach((character) => {
    console.log(character.name);
  });
}

fetchData();
