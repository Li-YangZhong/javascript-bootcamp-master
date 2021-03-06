// arrow function
var arrowFunc = () => {
  console.log('hello from an arrow function');
}

arrowFunc()
// syntax shortcuts
// one parameter (no parentheses)
// single-line return (no explicit `return` keyword)

var createLogInfo = info => info + 'info';

console.log(createLogInfo('hello '));
// they can be anonymous functions!
(() => console.log('I am an anonymous arrow function'))();
