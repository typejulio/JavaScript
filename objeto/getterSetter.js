const sequencia = {
    _valor1: 1,//"_" é usado para criar uma variavel que sera usada no objeto; uma conveção
    get valor() {return this._valor1++},
    set valor(valor) {
        if(valor > this._valor1) {
            this._valor1 = valor
        }
    } 
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)