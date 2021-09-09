// Cadeia de prototipos ( prototype chain)

Object.prototype.at0 = '0' // não faça isso em casa!


const avo = { at1: 'A' } //at1 = atributo 1 
const pai = { __proto__: avo, at2: 'B' }
const filho = { __proto__: pai, at3: 'C' }

console.log(filho.at0, filho.at1, filho.at2)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) { // delta = variacao de velocidade
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h. de ${this.velMax}Km/h.`
    }
}

const ferrari = {
    modelo: 'M40',
    Velmax: 324, // shadowing
}

const volvo = {
    modelo: 'F40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)


volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())