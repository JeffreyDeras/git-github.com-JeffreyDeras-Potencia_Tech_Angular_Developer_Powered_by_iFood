/*Faça um programa para calcular o valor de uma viagem.

Você tera cinco variaveis, sendo elas/;

1 - Preço do etanol;
2 - Preço da Gasolina;
3 - O tipo de combustivel que esta no seu carro;
4 - Gasto medio de combustivel do carro por Km;
5 - Distancia em KM da viagem;

Imprima no consoleo valor que sera gasto para realizar a viagem.
*/

const kmPorLitros = 10;
const precoGasolina = 6.99;
const precoEtanol = 5.79;
const distanciaEmKM = 100;

const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKM / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
    const valorDaViagem = litrosConsumidos * precoGasolina;
    console.log(valorDaViagem);
} else {
    const valorDaViagem = litrosConsumidos * precoEtanol;
    console.log(valorDaViagem);
}