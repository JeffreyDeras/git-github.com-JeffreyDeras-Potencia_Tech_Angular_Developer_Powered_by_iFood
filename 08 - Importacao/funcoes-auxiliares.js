
const entradas = [5, 50, 35, 105, 23, 15, 48, 63, 72, 36, 43];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };