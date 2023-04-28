// const dogImageDiv = document.getElementById('dogImage');

// fetch('https://dog.ceo/api/breeds/image/random')
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json.message);
//     dogImageDiv.innerHTML = `<img src='${json.message}' width=200 height=200 />`;
//   });

// required api https://superheroapi.com/api/245487424685494

const SUPERHERO_TOKEN = '245487424685494';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const superbtn = document.getElementById('superbtn');

const heroImageDiv = document.getElementById('heroImage');

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      heroImageDiv.innerHTML += `<img src="${json.image.url}" height=300 width = 300 />`;
    });
};

const getSearchSuperHero = (name) => {
  console.log(searchInput.value);
  fetch(`${BASE_URL}/search/${name}`)
    .then((res) => res.json())
    .then((json) => {
      // console.log(json);
      const hero = json.results[0];
      const superhero = `<h2>${json.name}</h2>`;
      heroImageDiv.innerHTML += `${superhero}<img src="${hero.image.url}" height=300 width = 300 />`;
    });
};

const randomhero = () => {
  const numberofhero = 731;

  return Math.floor(Math.random() * numberofhero) + 1;
};

randomhero();

superbtn.onclick = () => {
  getSuperHero(randomhero());
};

searchButton.onclick = () => {
  getSearchSuperHero(searchInput.value);
};
