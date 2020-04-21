const owner = {name: 'J.M.'}

const carJson = `{
    "color": "red",
    "doors": 2,
    "features": ["convertible", "four-wheel drive"],
    "details": {
        "year": 2019,
        "manufacturer": "Honda"
    },
    "sold": false,
    "owner": null
}`;

var result = JSON.parse(carJson)
console.log(typeof result, result)

var result2 = JSON.stringify(carJson)
console.log(typeof result2, result2)


const car = {
    "color": "red",
    "doors": 2,
    "features": ["convertible", "four-wheel drive"],
    "details": {
        "year": 2019,
        "manufacturer": "Honda"
    },
    "sold": false,
    owner
};

console.log(JSON.stringify(car))

const carClone = JSON.parse(JSON.stringify(car))
const shallowClone = Object.assign({}, car)
car.owner.name = 'D.T.'

console.log('car', car)
console.log('carClone', carClone)
console.log('shallowClone', shallowClone)