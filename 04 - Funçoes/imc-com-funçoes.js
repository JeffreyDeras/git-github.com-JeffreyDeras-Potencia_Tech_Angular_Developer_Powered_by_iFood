/** Refatorando o codigo com funçoes.
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

//main
(function (){
    
    const peso = 91;
    const altura = 1.70;
    
    const imc = calcularImc(peso, altura);
    console.log('Seu IMC é de: '+ imc.toFixed(2));
    console.log(classificarImc(imc));
}) ();

//end-função main//

//função calcular-IMC//
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
//End-função-CalcularIMC


//função-classificar-IMC//
function classificarImc(imc) {
    
    if (imc < 18.5) {
        return 'Você esta Abaixo do peso';
    } else if  (imc>= 18.5 && imc < 25) {
        return 'Você esta no Peso Normal';
    } else if  (imc > 25 && imc < 30){
        return 'Você esta Acima do peso';
    } else if  (imc > 31 && imc < 40) {
        return 'Você esta Obeso';
    } else {
        return 'Você esta tem Obesidade Grave';
    }
}
//End-funçãClassificar-IMC//







