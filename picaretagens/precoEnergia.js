// Objetivo, calculcar quanto gasta de energia e quantos kW/h cada aparelho faz.


var kwh = function kwh(aparelho,w, h, d) {
    let tarifaEnergia = 0.6
    cont1 = (w * h * d) / 1000
    cont2 = tarifaEnergia * cont1
    
    console.log(`O aparelho: ${aparelho}, gasta ${cont1} kw/H. E representa R$${cont2}, em sua conta de luz.`)
}

console.log(kwh('Computador',65, 24, 30))
console.log(kwh('Chuveiro', 5500, 0.5, 30))
console.log(kwh('Microondas', 1400, 0.07, 5))
// stand by