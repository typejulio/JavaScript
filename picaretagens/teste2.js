const imprimirResultado = function (nota) {
    switch (nota) {
        case 10:
        case 9:
            console.log('Quadro de honra!')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
            console.log('Recuperação!')
            break
        case 4:
        case 3:
        case 2:
        case 1:
            console.log('Reprovado!')
            break
    }
}


imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(3)
imprimirResultado(2)
imprimirResultado(1)


// lista dos produtos mais caros

const product = function(preco) {
    switch(Math.floor(preco)) {
        case 15000:
                console.log('Esse é caro.')
                    break
        case 11000:
                console.log('Esse é bom.')
                    break
        case 5000:
                console.log('Esse preço é barato.')
                    break
        case 1000:
                console.log('Preço invalido. ')
                    break

    }
}

product(15000)
