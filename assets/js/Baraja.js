import _ from 'underscore';
import { Carta } from './Carta.js';

export class Baraja{
    #tipos = ['C', 'D', 'H', 'S'];
    #valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    #baraja = [];
    
    constructor()
    {
        this.#crearBaraja();
    }

    #crearBaraja()
    {
        for(let tipo of this.#tipos) {
            for(let valor of this.#valores) {
                let carta = new Carta(valor, tipo);
                this.#baraja.push(carta);
            }
        }
        console.log(this.#baraja);
        this.#baraja = _.shuffle(this.#baraja);
    }

    getBaraja()
    {
        return this.#baraja;
    }
}