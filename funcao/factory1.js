// Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
// Produto, preço 
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }

}

console.log(criarProduto('Tv 50 polegadas', 4000.99))
console.log(criarProduto('Tv 32 polegadas', 2199.99))

