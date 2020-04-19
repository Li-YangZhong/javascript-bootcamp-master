let x = 1

switch (x) {
    case 1: {
        const message = 'x is one'
        console.log(message)
        break;
    }

    case 2: {
        const message = 'x is two'
        console.log(message)
    }

    default: {
        const message = 'x is' + x
        console.log(message)
    }

}