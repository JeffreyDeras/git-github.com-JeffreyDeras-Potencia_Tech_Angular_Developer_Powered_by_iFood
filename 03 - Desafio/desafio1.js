/** Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre de 
 faculdade calcule e imprima a sua media e classificação conforme a tabela abaixo
 
 Classificação:
 Media menor que 5 - reprovação.
 Media entre 5 e 7 recuperação. 
 Media acima de 7 aprovado.
 
 */
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

resultadoTotal = media;
console.log(resultadoTotal.toFixed(1));


if (media < 5) {
    console.log('reprovado');
} else if (media <= 7) {
    console.log('recuperação');
} else {
    console.log('aprovado');
}