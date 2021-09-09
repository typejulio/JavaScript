//pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} objects não podem ser substituidos, somente seus subtopicos. EX pessoa.nome

Object.freeze(pessoa) /* .freeze serve para travar o object e ele não pode ser alterado posteriormente */

pessoa.nome = 'Maria' /*.freeze ignorou a alteracao de pessoa.nome */
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})

pessoaConstante.nome = 'Maria'

console.log(pessoaConstante)
