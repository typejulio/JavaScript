let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
console.log(typeof comparaComThisArrow)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
