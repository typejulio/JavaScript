const valores = [8.7, 7.9, 1.4, 12.9]
console.log(valores[0], valores [3])

valores [4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// retirar os elementos do array
console.log(valores.pop()) //  retira a ultima casa.
delete valores[0]
console.log(valores)

console.log(typeof valores)