const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //forma de atribuir um valor a um obj
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // forma de atribuir um valor a um obj
console.log(obj4)

const obj5 = {
    funcao1: function() { //jeito antigo de criar uma funcao em um obj
        //...
    }, 
    funcao2() {  //novo jeito de criar uma funcao dentro de um obj 

    }
}

console.log(obj5)