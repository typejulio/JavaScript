// Coleção dinânmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira' // Forma de acrescentar topicos dentro de um obj
produto['marca do produto'] = 'Generica' // Outra forma de acrescentar topicos a um obj
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']

const carro = {
    modelo: 'A4',
    valor: 2500,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123,

        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
