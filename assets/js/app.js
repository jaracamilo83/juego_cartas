import _ from 'underscore';
import { Baraja } from './Baraja.js';

/***
 * 2C   =   Two of Clubs
 * 2D   =   Two of Diamonds
 * 2H   =   Two of Hearts
 * 2S   =   Two of Spades
 */


// const crearBaraja = () => {
//     let deck = [];
//     for(let tipo of tipos) {
//         for(let valor of valores) {
//             deck.push(valor + tipo);
//         }
//     }
//     deck = _.shuffle(deck);
    
//     return deck;
// }

let baraja = new Baraja();

const pedirCarta = () => {
    if(baraja.getBaraja().length === 0)
    {
        throw 'No hay cartas en la baraja';
    }
    let carta = baraja.getBaraja().pop();
    return carta;
}

let carta = pedirCarta();

console.log(carta.getValor() + carta.getTipo());

let valorCarta = (carta) => {
    let valor = carta.getValor();
    return (isNaN(valor)) ? 
            (valor === 'A') ? 1 : (valor === 'J') ? 11 : (valor === 'Q') ? 12 : 13
            : parseInt(valor);
}

console.log(valorCarta(carta));
