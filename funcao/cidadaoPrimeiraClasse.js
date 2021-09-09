// Funcao em JS é Fast-Class Object (Citizens)
//  Higher-order function

//criar funca de forma literal
function fun1() { }

// armazenar em uma variavel
const fun2 = function () { }

//armzenar me um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//amarzenar em um atributo de objeto
const obj = {}
obj.falar = function() {return `Opa`}
console.log(obj.falar())

//passar funcao com parametros
function run(fun) {
    fun()
}

run(function () {console.log(`Executando...`)})

//Uma funcao pode rotornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)