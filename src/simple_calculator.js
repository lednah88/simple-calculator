function add() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += parseFloat(arguments[i])
    }
    return sum
}







function multiply() {
    var product = 1
    for (var i = 0; i < arguments.length; i++) {
        product *= parseFloat(arguments[i])

    }
    return product
}


module.exports = { add, multiply }