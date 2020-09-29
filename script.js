const blockWithText = document.getElementById("block-with-text");
const blockWithPhoto = document.getElementById("block-with-photo");

document.addEventListener("DOMContentLoaded", getAlbums);
document.addEventListener("click", clickHandler);

function getAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((result) => createNewDivEl(result))
    .then(() => fetchAlbum(1))
    .catch((error) => console.error("Error occured in getAlbums: ", error));
}

let temporaryAlbumNumber = null;
function fetchAlbum(albumNumber) {
  if (albumNumber !== temporaryAlbumNumber) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumNumber}`)
      .then((response) => response.json())
      .then((result) => createNewImgEl(result))
      .catch((error) => console.error("Error occured in fetchAlbum: ", error));
  }
  temporaryAlbumNumber = albumNumber;
}

function clickHandler(event) {
  if (event.target.matches(".text")) {
    const albumNumber = event.target.getAttribute("data-url");
    fetchAlbum(albumNumber);
  }
}

function createNewDivEl(elements) {
  elements.forEach((el) => {
    const newDivEl = document.createElement("div");
    newDivEl.className = "text";
    newDivEl.innerHTML = el.title;
    newDivEl.setAttribute("data-url", el.id);
    blockWithText.appendChild(newDivEl);
  });
}

function createNewImgEl(elements) {
  const images = document.querySelectorAll(".photo");
  if (images.length > 0) {
    images.forEach((img) => {
      blockWithPhoto.removeChild(img);
    });
  }
  elements.forEach((el) => {
    const newImage = document.createElement("img");
    newImage.className = "photo";
    newImage.setAttribute("src", el.url);
    newImage.setAttribute("alt", el.title);
    blockWithPhoto.appendChild(newImage);
  });
}
