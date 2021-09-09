const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // "is.Ineteger" é uma funcao que verifica se o numero é inteiro e retorna true ou false.
console.log(Number.isInteger(peso2)) 

const avaliacao1 = 9.878
const avaliacao2 = 6.883

const total = avaliacao1 * peso1 + peso2 * avaliacao2
const media = total / (peso1 + peso2)

console.log(total.toFixed(2)) // ".toFixed" funcao para tirar casas decimais.
console.log(media.toString(2)) // ".toString" valor em bínario.
console.log(typeof media)



