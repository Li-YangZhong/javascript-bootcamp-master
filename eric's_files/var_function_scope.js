console.log('1 zoo:', zoo) // ReferenceError: zoo is not defined


function test() {
    zoo = {}

    console.log('2 zoo:', zoo)

    var zoo
}