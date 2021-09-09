function cumprimentar(nome) {
    return console.log(`Olá, ${nome}!`)
}
cumprimentar('Maria')
cumprimentar('João')

//converter Idade Em Anos Para Dias
function convert(idade) {
    const diasdoano = 365
    const diasAMais =  Math.round(idade / 4)
    if(diasAMais > 1) {
        console.log(diasdoano * idade + diasAMais)
    } else {
        console.log(diasdoano * idade)
    }
}
convert(2)
convert(25)


function trabalho(hrsTrabalhadas, RecebeHora) {
    return console.log(`Salário igual a R$ ${hrsTrabalhadas * RecebeHora},00`)
}
trabalho(30, 30)
trabalho(30, 100)


function nomeMes(mes) {
    if(mes > 0 && mes <= 12 ){
       if(mes === 1) {return 'Janeiro'}
       if(mes === 2) {return 'Fevereiro'}     
       if(mes === 3) {return 'Março'} 
       if(mes === 4) {return 'Abril'}
       if(mes === 5) {return 'Maio'}  
       if(mes === 6) {return 'Junho'} 
       if(mes === 7) {return 'Julho'} 
       if(mes === 8) {return 'Agosto'}
       if(mes === 9) {return 'Setembro'} 
       if(mes === 10) {return 'Outubro'} 
       if(mes === 11) {return 'Novembro'} 
       if(mes === 12) {return 'Dezembro'}  
    } else { return 'Inválido'}
}

console.log(nomeMes(2))
console.log(nomeMes(3))
console.log(nomeMes(9))