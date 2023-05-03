

/*

Faça um programa para calcular o valor do combustivel gasto em uma viagem
Voce tera tres variaveis, sendo elas:

1 - Preço do litro de combustivel.
2 - Valor medio de gasto do carro.
3 - Distancia em KM da viagem.
Imprima o valor que sera gasto com combustivel para realizar a viagem.

*/

const kmPorLitros = 10;
const  precoCombustivel = 5.79;
const distanciaEmKM = 100;

let valorDaViagem = (distanciaEmKM / kmPorLitros) * precoCombustivel;

console.log(valorDaViagem);