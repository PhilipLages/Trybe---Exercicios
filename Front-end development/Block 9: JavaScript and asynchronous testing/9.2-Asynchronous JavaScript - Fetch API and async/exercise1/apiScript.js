// apiScript.js
const url = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const obj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(url, obj)
  .then(response => response.json())
  .then(data => {
    jokeContainer.innerText = data.joke;
  }) 
  .catch(error => error);
};

window.onload = () => fetchJoke();