export class Carta{
    constructor(valor, tipo)
    {
        this.valor = valor;
        this.tipo = tipo;
    }

    getValor()
    {
        return this.valor;
    }

    getTipo()
    {
        return this.tipo;
    }

    setValor(valor)
    {
        this.valor = valor;
    }

    setTipo(tipo)
    {
        this.tipo = tipo;
    }
}