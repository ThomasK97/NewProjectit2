const multiply =(num1, num2) => {
    return num1 + num2;
};

const sum1 = (num1, num2) => {
    return num1 + num2;
};

const division = (num1, num2) => {
    return num1 / num2;
};

console.log(
    sum1(multiply(3,9),
    division(13,6))
);

const pokemonTeam = [
    'Gengar',
    'Blaziken',
    'Onix',
    'Corphish',
    'Pikachu',
    'Charizard',
  ];


pokemonTeam.forEach((pokemonTeam) => {
    console.log(pokemonTeam);
});


const createMessage = (msg, type) => {
    const html = `<div class="${type}">${msg}</di>`;
    return html;
}

const url = "https://www.breakingbadapi.com/api/characters?limit=10&offset=10";

const resultsContainer = document.querySelector('.results');

async function getCharacters () {
    const response = await fetch(url);
    console.log(response);

    const characters = await response.json();

    resultsContainer.innerHTML = '';

    for(let i = 0; i < characters.length; i++) {
        console.log(characters[i]);

        if (i === 10) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${characters[i].name}</div>`;
        resultsContainer.innerHTML += `<img src="${characters[i].img}"></img>`;
        

    }
};

getCharacters();


