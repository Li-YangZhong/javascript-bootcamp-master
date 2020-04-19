/* (function () {
    var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
console.log(aName) // throws "Uncaught ReferenceError: aName is not defined" */

/* var result = (function () {
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
console.log(result); // "Barry" */

(function () {
    var aName = "Barry";
})()