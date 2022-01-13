// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));

    const joke = data.joke;
    return joke;
};

const jokeOnScreen = () => {
    document.querySelector('#jokeContainer').value = joke;
};

window.onload = () => fetchJoke();