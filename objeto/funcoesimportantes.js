pessoa = {
    nome: 'Ana',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa)) // usado para saber somente as chaves do obj.
console.log(Object.values(pessoa)) // usados para saber somente os valores do obj.
console.log(Object.entries(pessoa)) //usado para saber tudo que está dentro do obj.
 
Object.entries(pessoa).forEach( ([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assing {ECMASScript 2015}
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign( dest, o1, o2 )

Object.freeze( obj )
obj.c = 1234
console.log(obj)
