//Lista de exercicios js coder 1
function contas(a, b) {
    return console.log('Soma:', a + b, 'Subtração:', a - b, 'Moltiplicação:', a * b, 'Divisão:', a / b)
}
contas(2, 3)
contas(14, 6)
contas(-7, 4.22)
console.log('---------------------------------------------------------------------------------')
/*2 Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados.*/

const classificaTrian = function classificaTrian(a, b, c) /*classificação de um triangulo ABC */ {
    if (a == b || b == c) {
        return 'Esse triângulo é Equiláterio.'
    }
    else if (a == b || a == c || b == c) {
        return 'Esse triângulo é Isósceles.'
    } else {
        return 'Esse triangulo é Escaleno.'
    }
}

console.log(classificaTrian(2, 2, 2))
console.log(classificaTrian(2, 5, 4))
console.log(classificaTrian(2, 3, 2))

console.log('---------------------------------------------------------------------------------')

/*3 ) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente*/

function potenciacao(base, expoente) {
    return base ** expoente
}

console.log(potenciacao(2, 3))
console.log(potenciacao(6, 8))

console.log('---------------------------------------------------------------------------------')

/*4 Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function divisao(dividendo, divisor) {
    console.log(` Divisão:${dividendo / divisor} , Resto: ${dividendo % divisor}`)
}

divisao(12, 4)
divisao(4, 5)
divisao(30, 7)

console.log('---------------------------------------------------------------------------------')

/*5 Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 */

function duascasasdecim(a, b,) {
    console.log((a + b).toFixed(2))

}

duascasasdecim(0.1, 0.2)
duascasasdecim(0.3134, 1.89)

console.log('---------------------------------------------------------------------------------')

/*6  */
console.log('---------------------------------------------------------------------------------')
/*7 */

function baskhara(ax2, bx, c) {
   let resultados = []
   let delta = (bx ** 2) - 4 * ax2 * c
    if(delta < 0 ) {
        `O delta é negativo ${delta}`
    }

    let x1 = -bx + (Math.sqrt(delta)) / 2 * ax2
    let x2 = -bx - (Math.sqrt(delta)) / 2 * ax2

    resultados.push(x1)
    resultados.push(x2)

    return resultados
}
  

console.log(baskhara(2, 3, -5))
console.log(baskhara(2, 6, 0))















