/**
 O IMC - Indice de massa corporal é um criterio da organização mundial da saude 
 para dar uma indicação sobre a condição de peso de uma pessoa adulta.

 Formula IMC
 IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto mostre a sua condição fisica
de acordo com a tabela abaixo.

IMC adulto condição:

- Abaixo de 18.5 abaixo do peso.
- Entre 18.5 e 25 peso normal.
- Entre 25 e 30 acima do peso.
- Entre 31 e 40 obeso.
- Acima de 40 obesidade Grave
 */

const peso = 63;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);


console.log('Seu IMC é: ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('Você esta Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você esta no Peso Normal');
} else if (imc > 25 && imc < 30) {
    console.log('Você esta Acima do peso');
} else if (imc > 31 && imc < 40) {
    console.log('Você esta Obeso');
} else {
    console.log('Você esta tem Obesidade Grave');
}