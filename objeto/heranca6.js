function Aula(nome, videoid) {
    this.nome = nome
    this.videoid = videoid
}

const aula1 = new Aula('Bem Vindo!', 123)
const aula2 = new Aula('Até Breve',456)
const aula56 = new Aula('Paulinho', 678)
console.log(aula1, aula2, aula56)

// simula o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vondo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)