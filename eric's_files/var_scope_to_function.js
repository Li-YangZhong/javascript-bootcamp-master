var color = 'blue';

(function() {
    var color = 'red'

    console.log('in block', color)
})()

console.log('out of block', color)