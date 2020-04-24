const boomerang = new Promise((resolve, reject) => {
    reject('stuck in a tree')
    setTimeout(() => {
        resolve('returned')
    }, 3000)
})

async function test() {
    try {
        const boomerangStatus = await boomerang

        console.log('boomerangStatus', boomerangStatus)
    } catch(error) {
        console.log('error', error)
    }

}

test()