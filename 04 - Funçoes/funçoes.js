// função-escrever-nome //
function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Jennifer')
sayMyName('Verenice')
// End - função escrever nome ** Sem return** //



// Função de potencia //
function quadrado(valor) {
    return valor = Math.pow(valor, 2);
    //Exemplo de return : returno valor * valor; //
}
console.log(quadrado(10) + quadrado(5));


// Exemplo-1 //
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);
//End-exemplo-1//

// Exemplo-2 //
const quadradoDeCinco = quadrado(05);
console.log(quadradoDeCinco);
//End-exemplo-2//



// Função-potencia // 
function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}
console.log(incrementarJuros(100, 10));
// End-função-potencia//

//função main//

function main(params) {
    
}