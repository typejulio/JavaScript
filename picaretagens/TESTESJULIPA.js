/*TESTE 1 = CRIAR OBJ EM UM ARRAY */
const pessoas = [pessoa1, pessoa2]
var pessoa1 = {
    nome: 'Ana',
    idade: 68,
    peso: 130,
    sexo: undefined
}

var pessoa2 = {
    nome: 'Marcos',
    idade: 18,
    peso: 10,
    sexo:'não faz'
}
function imprimir(dados, indice) {
    console.log(`${indice + 1}. ${dados}`)
} 

pessoas.forEach(imprimir)
pessoas.forEach(pessoas => console.log(pessoas))

console.log(`DADOS PESSOAIS:`)
console.log('dados 1 :', pessoa1)
console.log('dados 2 :', pessoa2)

const imprimirResultado = function(nota){
    switch(nota) {
            case 10:
            case 9:
                console.log('Quadro de honra!')
            case 8:
            case 7:
                console.log('Aprovado')
            case 6:
            case 5:
                console.log('Recuperação!')
            case 4:
            case 3:
            case 2:
            case 1:
                console.log('Reprovado!')
    }
}

imprimirResultado(6)
