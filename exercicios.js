//spread operator
//agrupa arrays em um novo array e tambem agrupa objeto literal ou funcao

//estrutura com array
// let nomeVariavel = ["lista1, lista2, lista3"];
// let nomeVariavel2 = ["lista4", "lista5", "lista6"];
// let agrupaLista = [...nomeVariavel, ...nomeVariavel2];
// console.log(agrupaLista)

let frutas = ["maca", "banana", "uva"];
let frustasDois = ["laranja", "abacate", "goiaba"];
let listaCompleta = [...frutas,  ...frustasDois];
console.log(listaCompleta);

//estrutura com objeto literal
// let nomeVariavel = {
//     propriedade1: valor,
//     propriedade2: valor,
// }
// let nomeVariavel2 = {
//     propriedade3: valor,
//     propriedade4: valor,
// }
// let listaValor = {
//     ...nomeVariavel,
//     ...nomeVariavel2
// }
// console.log(listaValor)

let pessoa = {
    nome: "Vinicius",
    idade: 22
}
let infoPessoal = {
    tel: 99999999,
    rg: 2222222,
}
let pessoaCompleta = {
    ...pessoa,
    ...infoPessoal
}
console.log(pessoaCompleta);

//estrutura com funcao
// function nomeFuncao(...params) {
//     console.log(params[posicaoArray])
// }
// nomeFuncao("lista1", "lista2", "lista3")

function letras(...paramns) {
    console.log(paramns[2])
}
letras("a", "b", "c")
