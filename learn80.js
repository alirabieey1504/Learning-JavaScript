

var second1 = +prompt("please enter number to start")
var speed = +prompt("please enter spead Based on milliseconds")
var second2 = +prompt("please enter number to end")


var timer = setInterval(function () {
    if (second1 === second2) {
        clearInterval(timer)
        alert("time is out")
    }
    second1--
    console.log(second1);
}, speed)