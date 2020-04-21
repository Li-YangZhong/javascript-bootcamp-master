console.log(Object.is('bar', 'bar')) // true
console.log(Object.is('foo', 'bar')) // false
console.log(Object.is(1, 1)) // true
console.log(Object.is(false, false)) // true
console.log(Object.is(undefined, undefined)) // true
console.log(Object.is(null, null)) // true
console.log(Object.is(1, '1')) // false
console.log(1 == '1') // true
console.log(+0 === -0) // true
console.log(Object.is(+0, -0)) // false
console.log(Object.is([], [])) // false

const object1 = {}
console.log(Object.is(object1, object1)) // true

const ref1 = object1
console.log(Object.is(object1, ref1)) // true
