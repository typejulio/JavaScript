const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome  + '!'
const templete = `
    Olá
    ${nome}!` // substitui o ".concat" e pode haver quebra de linhas.
console.log(concatenacao,templete) 

//expressoes...
console.log(`1 + 1 = ${1+1}`)
const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`) 