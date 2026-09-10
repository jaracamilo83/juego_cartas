import _ from 'underscore';
import { Baraja } from './Baraja.js';

/***
 * 2C   =   Two of Clubs
 * 2D   =   Two of Diamonds
 * 2H   =   Two of Hearts
 * 2S   =   Two of Spades
 */

const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const btnPedirCarta = document.querySelector('#btnPedirCarta');
const btnDetener = document.querySelector('#btnDetener');
const jugador = document.querySelector('#jugador');
const maquina = document.querySelector('#maquina');

let puntajeJugador = 0, puntajeMaquina = 0;

let baraja = new Baraja();

const pedirCarta = () => {
    if(baraja.getBaraja().length === 0)
    {
        throw 'No hay cartas en la baraja';
    }
    let carta = baraja.getBaraja().pop();
    return carta;
}

let valorCarta = (carta) => {
    let valor = carta.getValor();
    return (isNaN(valor)) ? 
            (valor === 'A') ? 1 : (valor === 'J') ? 11 : (valor === 'Q') ? 12 : 13
            : parseInt(valor);
}

function insertarCarta(carta)
{
    let imgCarta = document.createElement('img');
    imgCarta.src = `assets/img/cartas/${carta.getValor()}${carta.getTipo()}.png`;
    imgCarta.classList.add('carta');
    jugador.append(imgCarta);
}


btnPedirCarta.addEventListener('click', () => {
    let carta = pedirCarta();
    let valor = valorCarta(carta);
    puntajeJugador += valor;
  
    jugador.querySelector('small').textContent = puntajeJugador;
    insertarCarta(carta);
    if(puntajeJugador > 21)
    {
        alert('Perdiste');
        btnPedirCarta.disabled = true;
    }else if(puntajeJugador === 21)
    {
        alert('Ganaste');
        btnPedirCarta.disabled = true;
    }
});