console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");
document.body.append(newPost);

const newParagraph = document.createElement("p");
newParagraph.classList.add("post__content");
newParagraph.textContent =
  "This is an uninteresting post that just steals time from the reader.";
newPost.append(newParagraph);

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
newPost.append(newFooter);

const newUsername = document.createElement("span");
newUsername.classList.add("post__username");
newUsername.textContent = "@anonymous";
newFooter.append(newUsername);

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.type = "button";
newButton.setAttribute("data-js", "new-like-button");
newButton.textContent = "♥ Like";
newFooter.append(newButton);

const newLikeButton = document.querySelector('[data-js="new-like-button"]');
newLikeButton.addEventListener("click", handleLikeButtonClick);
