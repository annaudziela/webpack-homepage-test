import '../scss/main.scss';
import moment from 'moment';

console.log(moment().startOf('day').fromNow());
const startOfDay = moment().startOf('day').fromNow();
const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML = startOfDay; 


const firstName = 'Ania';
const age = 26;
const profession = 'tłumacz języka rosyjskiego'

const city = 'Kraków'

console.log(firstName);
console.log(age);
console.log(`Hej! Mam na imię ${firstName} i mam ${age} lat`);
console.log(city)
console.log(`Mieszkam w mieście ${city} od 6 lat.`)




function calculateOld(myNumber) {
myNumber = myNumber * 7;
console.log(`Dostałam ${myNumber} tys. pesos`);
return myNumber*7;
 
}


function greetOld(age, firstName) {
    console.log(`Hej! Mam na imię ${firstName} i mam ${age} lat. Cieszę się, że odwiedziłeś tę stronę`);
}
const greet = (age, firstName) => {
    console.log(`Hej! Mam na imię ${firstName} i mam ${age} lat. Cieszę się, że odwiedziłeś tę stronę`);
}

greetOld(age, firstName);



function translator(profession, city) {
    console.log(`Mój zawód to ${profession} w mieście ${city}`);
}
 translator(profession, city)




 function helloYou() {
     console.log('Miło Cię widzieć')
 }
 helloYou();

const calculate = (myNumber) => myNumber*7

console.log(calculateOld(7))






import {animal as snake, animal2 as tiger, animal3, animal4, ania, animal5} from './animal.js'; 

console.log(snake('lew'));

console.log(tiger('kozy'));
console.log(animal3('psa'));
console.log(animal4('kotom'));
console.log(ania);
console.log(animal5('dziki'));

import chicken from './Ania.js'; 
console.log(chicken);







const button = document.querySelector('.action--js');
console.log(button);

const firstClick = () => {
    console.log('brawo, kliknąłeś!')
}

button.addEventListener('click', () => {
const heading = document.querySelector (".main-page__header--js");
heading.innerHTML = `Cześć, chcesz dowiedzieć się więcej?`;
console.log(heading.classList.add('klasa-z-js'));
});

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click' , () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

document.cookie = 'name = ania'
