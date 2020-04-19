logResult(10) // ReferenceError: Cannot access 'logResult' before initialization

const logResult = function(result) {
    console.log('the result is', result)
}