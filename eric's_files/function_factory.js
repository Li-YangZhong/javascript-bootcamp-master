function makeSuffixer(suffix) {

    const separator = ' '
    function addSuffix(word) {
        return word + separator + suffix
    }

    return addSuffix
}

const addLy = makeSuffixer('ly')

console.log('addLy', addLy)

const smartly = addLy('smart')

console.log('smartly', smartly)

const addNess = makeSuffixer('ness')

const awesomeness = addNess('awesome')
console.log('awesomeness', awesomeness)