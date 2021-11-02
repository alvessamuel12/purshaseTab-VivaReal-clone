import createCard from "./createCards.js";

const results = await fetch('https://private-9e061d-piweb.apiary-mock.com/venda?state=rj&city=rio-de-janeiro');
const response = await (await results.json());

console.log(response);

const lista = response.search.result.listings;

console.log(lista);

console.log(lista[0]);
const card = createCard(lista[0]);
const cards = document.querySelector('#results');

cards.appendChild(card);