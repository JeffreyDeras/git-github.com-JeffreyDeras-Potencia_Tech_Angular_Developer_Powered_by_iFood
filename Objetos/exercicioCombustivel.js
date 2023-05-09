/*
//Crie uma classe para representar carros.//
 
--- Os carros possuem uma marca, uma cor e uma gasto medio de combustivel por km rodado.---

 Crie um metodo que dado a quantidade de kilometros e o proço do combustivel nos de o valor gasto em reais
 para realizar este percurso.

 */

class Carro {
    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKM * precoCombustivel;
    }
}

const carro1 = new Carro('Fiat', 'Azul', 1 / 10);
const carro2 = new Carro('BMW', 'Verde', 1 / 8);


console.log(carro1.calcularGastoDePercurso(70, 5.20));


