'use strict';

//Inizializzo una variabile contenente gli elementi "spesa"
const listaSpesa = [
    'marmellata',
    'piselli',
    'sedano',
    'birra',
    'vino',
    'patate'
]

const ul = document.getElementById('list');
//Inizializzo una variabile indice
let index = 0;

//Ciclo per estrarre dati da array  
// while (index < listaSpesa.length) {
//     const li = document.createElement('li');
//     li.innerHTML = listaSpesa[index];
//     ul.append(li);
//     index ++;
// }

do {
    const li = document.createElement('li');
    li.innerHTML = listaSpesa[index];
    if (listaSpesa[index] === undefined){
        li.innerText = 'La lista è vuota';
    }
    ul.append(li);
    index ++;
} while (index < listaSpesa.length);
