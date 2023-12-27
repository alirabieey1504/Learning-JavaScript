
var number1 = prompt("please enter number :")
var number2 = prompt("please enter number :")
var amalgar = prompt("please enter *,/,+,- :")
var sum = 0;
switch (amalgar) {
    case '+': sum = number1 + number2
        break
    case '-': sum = number1 - number2
        break
    case '*': sum = number1 * number2
        break
    case '/': sum = number1 / number2
        break
    default: alert("You made a mistake")


}
console.log("Your math result :)", sum);
