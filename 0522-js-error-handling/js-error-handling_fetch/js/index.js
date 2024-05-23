console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function addStatusCat(status) {
  return `https://http.cat/${status}`;
}

async function fetchUserData(url) {
  try {
    const response = await fetch(url);

    const contentType = response.headers.get("content-type");
    console.log("contentType: ", contentType);

    const mediaType = contentType.split(";")[0];

    if (!response.ok) {
      const statusImage = await addStatusCat(response.status);
      throw {
        message: `Failed to fetch data! Status code: ${response.status}`,
        statusImage,
      };
    }

    if (!contentType.includes("application/json")) {
      throw new Error(
        `Oops, we haven't got JSON! Instead we received: ${mediaType}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error.statusImage) {
      return { error: error.message, statusImage: error.statusImage };
    }
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
      errorElement.innerHTML = result.statusImage
        ? `${result.error}<br><img src="${result.statusImage}" alt="Error Image" style="width: 100%;">`
        : result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});
