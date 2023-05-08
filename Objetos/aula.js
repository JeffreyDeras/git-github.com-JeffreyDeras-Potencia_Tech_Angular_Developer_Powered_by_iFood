/*Sintaxe-normal*/
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

/**End-Sintaxe-normal **/



/**Sintaxe-mais-dinamica */

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

/**End-Sintaxe-mais-dinamica **/


