
// var number = prompt("enter number :")
// var totul=0;
// for (var i = 0; i < number.length; i++) {
//     var ss = parseInt(number[i])

//     totul += ss;
    
// }
// alert(totul)

// var number=prompt("enter number :")
// var totul=0;
// var i=0;
// while(i<number.length){
//     var ss=parseInt(number[i])
//     i++
//     totul+=ss;
// }
// alert(totul)
var sum=0;
var number=prompt("enter number :")


if(isNaN(number)){
    alert("eshteb zadi dadash !!")
}
else if(number==="")
{
    alert("yechi vared mikardi !")
}
else{
    alert(number.length)
    number=Number(number)
}