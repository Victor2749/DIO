const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

    return data[0].url;
};

const loadImg = async () => {
  const catImg = document.getElementById('cat');
  catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();
