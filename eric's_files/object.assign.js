const inner = {
    zoo: 10,
    zar: 11
}

const source = {
    foo: 5,
    bar: 6,
    tee: inner // a reference

}

const shallowClone = Object.assign({}, source) // shallow clone
const spreadClone = {...source} // another shallow clone

shallowClone.foo = -1
shallowClone.tee.zar = -5

inner.zoo = -88

console.log('source', source)
console.log('shallowClone', shallowClone)
console.log('spreadClone', spreadClone)

console.log(Object.is(inner, shallowClone.tee)) // true
console.log(Object.is(inner, source.tee)) // true