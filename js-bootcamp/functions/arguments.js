let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 4)
console.log(result)

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)

let tips = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tippi = tips(100)
console.log(tippi)