function logMessage() {
    console.log('greetings')

}

function printMessages(callback) {
    callback()
}

printMessages(logMessage)