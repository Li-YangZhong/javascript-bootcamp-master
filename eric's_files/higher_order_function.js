const numbers = [1, 2, 3]

const callback = number => {
    console.log('number', number)
}

numbers.forEach(callback)

function lessThan(y) {
    return function(x) {
        return x < y
    }
}

const lessThan30 = lessThan(30)
console.log(lessThan30(20)) // true