// the following program will run without erro. because eagle evaluates to undefined and the statement eagle.soar() never gets executed.

var eagle

/* eagle = {
    soar: function() {
        console.log('flying like the wind.')
    }
} */

if(eagle) {
    eagle.soar()
}