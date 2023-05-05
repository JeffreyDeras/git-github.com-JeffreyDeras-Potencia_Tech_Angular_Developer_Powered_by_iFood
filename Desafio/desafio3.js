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

const preçoProduto = 10;
const metodoDePagamento = 'Mais2x'

if (metodoDePagamento === 'Vista') {
    const pagVista = preçoProduto * 0.9;
    console.log(pagVista);
} else if (metodoDePagamento === 'Dinheiro') {
    const pagDinheiro = preçoProduto * 0.85;
    console.log(pagDinheiro);
} else if (metodoDePagamento === '2x'){
    const pag2x = preçoProduto / 2;
    console.log(pag2x);
}else {
    const pagMais2x = preçoProduto /0.9;
    console.log(pagMais2x.toFixed(2));
}