// 1 - Crie um programa que dado um numero imprima sua tabuada.//
const numero = 10;

for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
    
}

console.log('_____________________________________');
//End-crie um programa que dado um numero imprima sua tabuada.//

// 2 - crie um programa que seja capaz de percorrer um array de numeros e imprima cada numero par encontrado //

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}