class Pessoa {
        constructor(nome, idade) {
                this.nome = nome;
                this.idade = idade;
        }
}

function compararPessoas(pessoa1, pessoa2) {
        if (pessoa1.idade > pessoa2.idade) {
                return `${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`;
        } else if (pessoa1.idade < pessoa2.idade) {
                return `${pessoa1.nome} é mais novo(a) que ${pessoa2.nome}`;
        } else {
                return `${pessoa1.nome} tem a mesma idade que ${pessoa2.nome}`;
        }
}

const pessoa1 = new Pessoa('Jeffrey', 32);
const pessoa2 = new Pessoa('Andrew', 32);

console.log(compararPessoas(pessoa1, pessoa2));











/** Clasee-Exemplo-Principal*/
/*

class pessoa {  
        constructor(nome, idade, anoDeNascimento, sexo) { 
                this.nome = nome;
                this.idade = idade;
                this.anoDeNascimento = 2023 - idade;
                this.sexo = 'Masculino'; 
        }

        descrever (){
                console.log(`Meu nome é ${this.nome} e minha idade ${this.idade} nasci em ${this.anoDeNascimento} do sexo ${this.sexo}`);
        }
}

const pessoa1 = new pessoa('Jeffrey', 32,  2023, 'Masculino');
const pessoa2 = new pessoa('Andrew', 25,  2023, 'Masculino');


console.log(pessoa1);

pessoa1.descrever();

console.log(pessoa2);

pessoa2.descrever();
*/
/**End-Exemplo principal */







/*Sintaxe-normal*/
/*
const pessoa = {
        nome: 'Jeffrey',
        idade: 32,

        descrever: function () {
                console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`);
        }
};

pessoa.descrever = function () {
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`);

}
pessoa.descrever();
*/
/**End-Sintaxe-normal **/





/**Sintaxe-mais-dinamica */
/*
const pessoa1 = {
        nome: 'Jeffrey Deras',
        idade: 32,

        descrever: function () {
                console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`);
        }
};

pessoa1.descrever = function () {
        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`);

}
pessoa1.descrever ();

*/

/**End-Sintaxe-mais-dinamica **/




