const flip = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve('success')
    } else {
        reject('failure')
    }
})

flip.then(result => console.log('result', result))
    .catch(error => console.log('error', error))

console.log('after flip')