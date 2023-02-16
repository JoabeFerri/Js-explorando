console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curibita`);// adicionando item na lista


console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,2);
console.log(listaDeDestinos);

console.log(listaDeDestinos[2]);// exibir um elemento de um array
//lembrando que um array começa com 0

