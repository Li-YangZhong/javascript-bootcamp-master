const source = {
    kim: 99,
    tom: 92
}

const clone = {
    bob: 89,
    ann: 95,
    ...source,
    ron: 85
}

console.log('clone', clone)

const elements = ['fire', 'water']

const newElements = [...elements, 'air', 'earth']

console.log(newElements)

/************ */

const sumXYZ = function(x, y, z) {
    return x + y +z
}

const numbers = [3, 5, 9]

console.log(sumXYZ(...numbers))