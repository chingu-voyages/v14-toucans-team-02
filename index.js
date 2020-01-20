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

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Toggle button on mobile functionality

function toggleHamburger() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }