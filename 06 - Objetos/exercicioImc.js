
/**
 * Criar uma classe para representar pessoas.
 * Para cada pesso teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC  = peso / (altura * altura)).
 * Instancie uma pesso chamada Jose que tenha 70kg  e 1.75 de altura e peça ao jose dizer o valor do seu IMC.
 */

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    } 
    
    calcularImc() {
        //return this.peso / (this.altura ** 2); 
        //return this.peso / (this.altura * this.altura);
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {

        const imc = this.calcularImc();


        if (imc < 18.5) {
            return 'Você esta Abaixo do peso';
        } else if  (imc >= 18.5 && imc < 25) {
            return 'Você esta no Peso Normal';
        } else if  (imc> 25 && imc < 30){
            return 'Você esta Acima do peso';
        } else if  (imc> 31 && imc < 40) {
            return 'Você esta Obeso';
        } else {
            return 'Você esta tem Obesidade Grave';
        }
    }

}

const jose = new Pessoa('jose', 85, 1.75);

console.log(jose);
console.log('Jose tem IMC de : ' + jose.calcularImc().toFixed(2));
console.log(jose.classificarImc());




