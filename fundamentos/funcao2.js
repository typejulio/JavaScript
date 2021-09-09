//Armazenando uma funcao em uma variavel
const imprimirSoma  = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma funcao Arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(4, 5))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 6))