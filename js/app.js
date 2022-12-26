const select = document.getElementById("breeds");
const cards = document.querySelector(".card");
let current = "";
fetch("https://dog.ceo/api/breeds/list")
  .then((result) => result.json())
  .then((data) => {
    generateBreeds(data.message);
    fetchImage(data.message[0]);
    current = data.message[0];
  });

function generateBreeds(data) {
  data.map((dogBreed) => {
    const html = `<option value = "${dogBreed}">${dogBreed} </option>`;
    select.innerHTML += html;
  });
}

function generateImage(url) {
  const image = `<img src="${url}">`;
  cards.innerHTML += image;
}

function fetchImage(breedType) {
  fetch(`https://dog.ceo/api/breed/${breedType}/images/random`)
    .then((result) => result.json())
    .then((data) => generateImage(data.message));
}

select.addEventListener("change", () => {
  fetchImage(select.value);
  current = select.value;
});
cards.addEventListener("click", () => {
  fetchImage(select.value);
});
