const planets = [
    'mercury', 
    'venus', 
    'earth',
    ['mars', 'phobos', 'deimos']
]

const [one, , , [fourth, moon1, moon2]] = planets

console.log(one, fourth, moon1, moon2)