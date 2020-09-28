const blockWithText = document.getElementById("block-with-text");
const blockWithPhoto = document.getElementById("block-with-photo");

const urlLinks = [];

document.addEventListener("DOMContentLoaded", getAlbums);
document.addEventListener("click", loadAlbum);

function getAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((json) => createNewEl(json));
}

function loadAlbum(event) {
  if (event.target.matches(".text")) {
    console.log("clicked ", event.target.getAttribute("data-url"));
  }
}

function createNewEl(elements) {
  console.log(elements);
  elements.forEach((el) => {
    const newUserInfoWrapper = document.createElement("div");
    newUserInfoWrapper.className = "text";
    newUserInfoWrapper.innerHTML = el.title;
    newUserInfoWrapper.setAttribute("data-url", el.userId);
    blockWithText.appendChild(newUserInfoWrapper);
  });
}

// fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/photos?albumId=2")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/photos?albumId=3")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/photos?albumId=4")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/photos?albumId=5")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/photos?albumId=6")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
