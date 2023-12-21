// var ss = 0

// var number =prompt("enter number :")

// for (i = 0; i < number.length; i++) {
//     ss += parseInt(number[i])

// }

// alert("totul :" + ss)    


var userNumber = +prompt("enter number :")
var sum = 0

for (i = 0; (userNumber / 10) != 0; i++) {
    sum += (userNumber % 10)
    userNumber = Math.floor(userNumber / 10)
}
 

alert(sum)