let greetUser = function () {
    console.log('Welcome user!')
}

greetUser() 

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


let fahrenheitToCalcius = function (celci) {
    let result = (celci -32) * 5/9
    return result
}

let calcius = fahrenheitToCalcius(68)
console.log(calcius);
