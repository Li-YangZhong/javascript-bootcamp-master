/* var abc = function(){
    console.log("hello");
    } // ERROR, missing semicolon
    
    (function(){
      console.log("welcome");
    })(); */

var abc = function () {
    console.log("hello");
}

    (function () {
        console.log("welcome");
    }()); // output welcome hello

