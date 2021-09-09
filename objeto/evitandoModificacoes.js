// Object.preventExtencions
const prod = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(prod))

prod.nome = 'Borracha'
prod.descricao = 'Borracha de Escola, branca'
delete prod.tag
console.log(prod)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes

