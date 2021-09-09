function getPreco(imposto = 0, moeda = `R$`) {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco: 3490,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.nome, produto.getPreco())

const carro = { preco: 15999, desc: 0.20 }

console.log(getPreco.call(carro)) /*.call chama a function à direcionando para o objeto */ 
console.log(getPreco.apply(carro)) /* .apply chama a function à direcionando para o objeto */
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$'])) /*.apply precisa dos params em um array[] */
