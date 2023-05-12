
// primeiro exemplo//
const irmaos = ['Jeffrey', 'Lindsay', 'Andrew'];

console.log(irmaos[0]);

////////////////////////////////////////////////////////////////

// Segundo-exemplo//

const meses = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'];

console.log(meses[0]);

meses.push('august') // adicionar elemento dinamicamente//

console.log(meses);

meses[8] = 'september'; //adicionar elemento por posiçao//

console.log(meses);

meses.pop();// tirar o ultimo elemento da lista //

console.log(meses);
console.log('///////////////////////////////////////////////////////////////');


meses.shift();// tirar o primeiro elemento da lista //
console.log('///////////////////////////////////////////////////////////////');

console.log(meses);

console.log('__________________________________________________');


/*
// estrutura do for//

const nome = 'Jeffrey Barbosa Deras';

for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  console.log(letra);
}
*/

const notas = [];

notas.push(8.5);
notas.push(6.1);
notas.push(5.8);
notas.push(7.5);
notas.push(8.5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma += nota;
}

console.log(soma);

const media = soma / notas.length;

console.log(media.toFixed(2));
