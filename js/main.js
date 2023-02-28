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

//Inizializzo una variabile indice
let index = 0;

//Ciclo per estrarre dati da array  
while (index < listaSpesa.length) {
    console.log(index);
    console.log(listaSpesa[index]);
    index ++;
}

//Aggiungo all'HTML l'elemento estratto nella lista
//Incremento di 1 la variabile indice