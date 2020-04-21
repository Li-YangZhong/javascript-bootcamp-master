const wizard = {
    name: 'Harry',
    age: 17,
    info: {
        hobby: 'Quidditch',
        spells: ['Expelliarmus']
    }
}

const {
    name, 
    age, 
    house='Gryffindor',
    info: {hobby},
    info
} = wizard

console.log(name, age, house, hobby, info)