const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callBack
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callBack
const notasBaixas2 = notas.filter( notas  => {
    return notas < 7
    
})
console.log(notasBaixas2)

const notasMenoresQue7 = nota => nota < 7
const notasBaixas3= notas.filter(notasMenoresQue7)
console.log(notasBaixas3)