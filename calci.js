let random = Math.random()
console.log(random)

let a = prompt("Enter first number")
let b = prompt("Enter operation +,-,*,/")
let c = prompt("Enter second number")

let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "*",
}

console.log(a, b, c)

if (random > 0.1) {
    // correct
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
} else {
    // incorrect
    b = obj[c]
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}