const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 2995.99
prod1['Desconto legal'] = 0.40 // evitar atributos com espaco.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo' , 
    preco: 87.99
}

console.log(prod2)

prod2 ['Desconto legal'] = 0.5 // evitar atributos cpm espaço
console.log(prod2)