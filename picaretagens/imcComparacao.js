
function s(nome, peso, altura) {
    var imc = peso / altura ** 2
    if (imc < 16){ 
        console.log(`O cliente ${nome} está com Magreza grave!. Com o imc de = ${imc.toFixed(2)}`)

    } if (16 < imc && imc < 17){ 
    console.log(`O cliente ${nome} está com Magreza moderada. Com o imc de = ${imc.toFixed(2)}`) 
} 
if (17 < imc && imc <= 18){ 
    console.log(`O cliente ${nome} está com Magreza leve. Com o imc de = ${imc.toFixed()}`) 
} 
if (18 < imc && imc <= 25){ 
    console.log(`O cliente ${nome} está Saudavél. Com o imc de = ${imc.toFixed(2)}`)
} 
if (25 < imc && imc <= 30){ 
    console.log(`O clinete ${nome} está sobrepeso. Com o imc de = ${imc.toFixed(2)}`)
} 
if (30 < imc && imc <= 35){ 
    console.log(`O cliente ${nome} está com Obesidade Grau I. Com o imc de = ${imc.toFixed(2)}.`)
} 
if (35 < imc && imc < 40){ 
    console.log(`O cliente ${nome} está com Obesidade Grau II. Com o imc de = ${imc.toFixed(2)}`)
} 
if (imc >= 40){ 
    console.log(`O cliente ${nome} está com Obesidade Grau III. Com o imc de = ${imc.toFixed(2)}`)
} 
} // Não abra

s('Ana',130, 1.78)
s('Mariana', 64, 1.76)
s('Paulo', 96, 1.97)
s('Patrick', 77, 1.77)