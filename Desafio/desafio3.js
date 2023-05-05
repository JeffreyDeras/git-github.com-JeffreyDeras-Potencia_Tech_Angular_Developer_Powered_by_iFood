/*
Elabore um algoritmo que calcule o que deve ser pago por um produto considerando o preço normal de etiqueta
e a escolha da condição de pagamento.

Utilize os codigos da tabela a seguir para ler qual
condição de pagamento escolhida e efetuar o calculo adequado

Codigo condição de pagamento

- A vista debito, recebe 10% de desconto.
- A vista no Dinheiro ou PIX recebe 15% de desconto.
- Em duas vezes Preço normal de etiqueta sem juros.
- Acima de duas vezes, preço de etiqueta mais 10% de juros.*/

const preçoProduto = 100;
const metodoDePagamento = 4;

if (metodoDePagamento === 1) {
         console.log(preçoProduto - (preçoProduto * 0.10));
} else if (metodoDePagamento === 2) {
    console.log(preçoProduto - (preçoProduto * 0.15))
} else if (metodoDePagamento === 3){
    console.log(preçoProduto);
}else {
    console.log(preçoProduto + (preçoProduto * 0.10))
}