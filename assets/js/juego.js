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
let turnoComputadora = (puntajeMinino) => {

    do{

        let carta = pedirCarta();
        let valor = valorCarta(carta);
        puntajeMaquina += valor;
        console.log({puntajeMinino, puntajeMaquina});
        maquina.querySelector('small').textContent = puntajeMaquina;
        insertarCarta(carta, 'maquina');

        if(puntajeMinino > 21)
        {
            console.warn('La computadora gana');
            break;
        }
        


    }while(puntajeMaquina < puntajeMinino && puntajeMinino <= 21);

    setTimeout(() => {
        if(puntajeMaquina > 21){
            alert('Jugador gana 🤷‍♂️');
        }
        else if(puntajeMaquina === puntajeMinino){
            alert('Empate 🤝');
        }else{
            alert("Computadora gana 🤖");
        }
    }, 100);
}

function insertarCarta(carta, turno = 'jugador')
{
    let imgCarta = document.createElement('img');
    imgCarta.src = `assets/img/cartas/${carta.getValor()}${carta.getTipo()}.png`;
    imgCarta.classList.add('carta');
    if(turno === 'jugador')
    {
        jugador.append(imgCarta);
    }
    else
    {
        maquina.append(imgCarta);
    }
}


btnPedirCarta.addEventListener('click', () => {
    let carta = pedirCarta();
    let valor = valorCarta(carta);
    puntajeJugador += valor;
  
    jugador.querySelector('small').textContent = puntajeJugador;
    insertarCarta(carta, 'jugador');
    if(puntajeJugador > 21)
    {
        console.log('Perdiste');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntajeJugador);
    }else if(puntajeJugador === 21)
    {
        console.log('Ganaste');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntajeJugador);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntajeJugador);
});

btnNuevoJuego.addEventListener('click', () => {
    baraja = new Baraja();
    puntajeJugador = 0;
    puntajeMaquina = 0;
    jugador.querySelector('small').textContent = 0;
    maquina.querySelector('small').textContent = 0;
    jugador.querySelectorAll('img').forEach(img => { if(img.id !== 'logoJugador') img.remove()});
    maquina.querySelectorAll('img').forEach(img => {if(img.id !== 'logoMaquina') img.remove()});
    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;
});
