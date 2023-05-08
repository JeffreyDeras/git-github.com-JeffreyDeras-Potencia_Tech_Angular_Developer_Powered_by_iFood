
//Escrever-nome//
function escrevaMeuNome(nome) {
  console.log('Meu nome é:' + nome);
}
escrevaMeuNome('Jeffrey');

//End-Escrever nome//

//Verificar-idade//
function verificarIdade(idade) {

  if (idade >= 18) {
    console.log('Você é maior de idade');
  } else {
    console.log('Voce é menor de idade');
  }
}
verificarIdade(15);
//End-Verificar-idade//


//juros//
function aplicarDesconto(valor, desconto) {
  return (valor - (valor * (desconto / 100)))
}
function aplicarJuros(valor, juros) {
  return (valor + (valor * (juros / 100)))
}

const preçoProduto = 100;
const metodoDePagamento = 4;

if (metodoDePagamento === 1) {
  console.log(aplicarDesconto(preçoProduto, 10));
} else if (metodoDePagamento === 2) {
  console.log(aplicarDesconto(preçoProduto, 15))
} else if (metodoDePagamento === 3) {
  console.log(preçoProduto);
} else {
  console.log(aplicarJuros(preçoProduto, 10))
}

//End-Juros//