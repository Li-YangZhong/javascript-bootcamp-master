const timeoutId = setTimeout(
    () => console.log('bonjour'),
    0
)

clearTimeout(timeoutId)

console.log('timeoutId', timeoutId)