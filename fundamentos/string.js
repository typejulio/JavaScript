const escola = "Cod3r"

console.log(escola.charAt(4)) // mostra a quarta letra da palavra.
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) // Busca o numero na tabela Unicode.
console.log(escola.indexOf("3")) // acha a casa onde está o caracter.

console.log(escola.substring(1)) // ".substring" Mostra os caracteres menos o que está na primeira posição.
console.log(escola.substring(0, 3)) // ".substring" mostra os caracteres que estão entr0 0 e 3 (Cod).

console.log('Escola '. concat(escola).concat("!")) // ".concat" conecta caracteres a uma variavel sem precisar criar outras.
console.log('Escola ' + escola + "!") // "+" em alguns casos pode fazer a função de .concat

console.log(escola)
console.log(escola.replace(3, 'e')) // ".replace" troca a casa escolida pelo caracter desejado na variavel.
console.log("Ana,Maria,Pedro".split(',')) // ".split" separa as variaveis em agrupamentos transformando em "Array". De acordo com a condição que nesse caso é a virgula.(',')

