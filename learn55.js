var numberFirst = +prompt("enter number :")
var numberLast = +prompt("enter number :")
var pow = 1;
// for (i = 0; i < numberLast; i++) {
//    pow *= numberFirst
// }
// alert(`${numberFirst} * ${numberLast} result :` + pow)

var i=0;
while(i<numberLast){
   pow*=numberFirst;
   i++;
}
 alert(`${numberFirst} ** ${numberLast} result :` + pow)
