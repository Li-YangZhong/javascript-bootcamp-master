function logMessage() {
    console.log('greetings')

}

var callback = logMessage

function printMessages() {
    callback()
}

printMessages(logMessage)