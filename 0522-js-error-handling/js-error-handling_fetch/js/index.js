console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url);
    //hier Abfrage von contentType uns Ausloggen in der Console:
    const contentType = response.headers.get("content-type");
    console.log("contentType: ", contentType);
    //console.log("contentType.media-type: ", contentType.media - type);

    //hier if-Abfrage, throwing custom error
    if (!response.ok) {
      throw new Error(`Failed to fetch data! Status code: ${response.status}`);
    }

    //hier if-Abfrage, falls der Content-Type nicht JSON ist
    if (!contentType.includes("application/json")) {
      throw new Error(
        `Oops, we haven't got JSON! Instead we received: ${contentType}`
      );
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      //hier anpassen von textContent zum jeweiligen error
      errorElement.textContent = result.error;
    }
  });
});
