// //iife 
// (function (){
//     alert("yes")
// })()

var i = 19
var timer = setInterval(function () {
    if (i === -100) {
        clearInterval(timer)
        alert("game over")
    }
    console.log(i);
    i--

}, 100);

