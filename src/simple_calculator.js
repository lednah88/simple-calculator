function add(num1, num2) {
    sum = num1 + num2
    return sum
}
//console.log(add(-1, -1))


function add() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += parseFloat(arguments[i])
    }
    return sum
}
// console.log(add(1, 2, 3, 4, 5))



function multiply(num1, num2) {
    return num1 * num2
}
// console.log(multiply(-2, 3))



function multiply() {
    var product = 1
    for (var i = 0; i < arguments.length; i++) {
        product *= parseFloat(arguments[i])

    }
    return product
}
// console.log(multiply(1, 2, 3, 4, 5))

module.exports = { add, multiply }