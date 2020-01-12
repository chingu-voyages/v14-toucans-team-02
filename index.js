// Flascard Functionality

const words = [
    { es: 'bicicleta', en: 'bicycle'},
    { es: 'hola', en: 'hello'},
    { es: 'cielo', en: 'sky'},
    { es: 'invierno', en: 'winter'},
    { es: 'rápido', en: 'fast'},
    { es: 'amistad', en: 'friendship'}
];

const card = document.querySelector('.card-container');
const frontCardText = document.getElementById('front-card-text');
let text = frontCardText.innerText;
console.log(text);
const backCardText = document.getElementById('back-card-text');

card.addEventListener('mouseenter', () => {
    const item = Math.floor(Math.random() * 5);
    const spanWord = words[item].es;
    const spanText = document.createTextNode(spanWord);
    setTimeout( () => {
        frontCardText.textContent = '';
        frontCardText.appendChild(spanText);
    }, 1000);
});

card.addEventListener('mouseleave', () => {
    const item = frontCardText.textContent;
    let index = words.findIndex( elem => elem.es === item);
    const enWord = words[index].en;
    const engText = document.createTextNode(enWord);
    setTimeout( () => {
        backCardText.textContent = '';
        backCardText.appendChild(engText);
    }, 1000);
});

// Dictionary Functionality

function handleSubmit(event) {
    event.preventDefault();

    const input = document.querySelector('.searchForm-input').value;
    const source = document.getElementById('source').value;
    const target = document.getElementById('target').value;

    const searchQuery = input.trim();
  
    fetchResults(source, target, searchQuery);
}

function fetchResults(source, target, searchQuery) {
    const endpoint = `https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/resources/dictionary/lookup?source=${source}&target=${target}&input=${searchQuery}`;

    fetch(endpoint, { 
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
            "x-rapidapi-key": "b4056e0462msh9ab7208c21c48c5p114908jsn1b32d5567f79"
        }
    })
    .then(response => response.json())
    .then(data => {
        //const results = data.
        console.log(data);
        const partOfSpeech = data.outputs[0].output.matches[0].source.pos;
        const words = data.outputs[0].output.matches[0].targets;
        console.log(words);
        console.log(partOfSpeech);
    })
    .catch(() => console.log('An error occurred'));
}

function displayResults(results) {
    const searchResults = document.getElementById('search-Results');

    searchResults.innerHTML = '';

    results.forEach(result => {
        searchResults.insertAdjacentHTML('beforeend',
            `<div>
                <h2></h2>
                <h2></h2>
            </div>`
        )
    })
}

const form = document.querySelector('.searchForm');

form.addEventListener('submit', handleSubmit);