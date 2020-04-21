const source = {
    frank: 92,
    elise: 95,
    angie: 96,
    timmy: 100
}

/* console.log(Object.keys(gradeMap))
console.log(Object.values(gradeMap))
console.log(Object.entries(gradeMap)) */

const target = {}

Object.assign(target, source)

console.log(target)

const clone = Object.assign({}, source)
console.log(clone)

const toBeCombined = {
    timmy: 89,
    joyce: 87
}

const source2 = {
    jacob: 91,
    timmy: 200
}
const combined = Object.assign(toBeCombined, source, source2)

console.log('combined: ', combined)