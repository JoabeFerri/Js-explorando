console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 15;
let estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade.");
//     listaDeDestinos.splice(1, 1);//remover um item
// }
// else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado.");
//     listaDeDestinos.splice(1, 1);//remover um item
// } else {
//     console.log("Não é maior de idade não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade, ou está acompanhado.");
    listaDeDestinos.splice(1, 1);//remover um item
}
else {
    console.log("Não é maior de idade não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
}else {
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);

// console.log(idadeComprador > 18); //maior que
// console.log(idadeComprador < 18); //menor que
// console.log(idadeComprador >= 18); //maior igual que
// console.log(idadeComprador <= 18); //menor igual que
// console.log(idadeComprador == 18); //exatamente igual
// console.log(idadeComprador != 18); //diferente de
