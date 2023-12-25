// var number=132
// var as=[23,532,63,34,54,15,63]
// console.log(Array.isArray(as))
// console.log(as.lastIndexOf(63,4));
// // console.log(as.slice(1,3));
// // console.log(as.join("/"));
// // console.log(as.reverse());

// var str="ali/amir/hosein/babak"

// console.log(str.split('/'));


var str=prompt("enter your word")
var ss=str.split('')
var test=ss.join('')
console.log(test);
console.log(ss);
var sd=ss.reverse()
var pp=sd.join('')

console.log(pp)

console.log(sd);

if(test===pp){
    alert("yes it is ")
}
else {
    alert("no is not")
}
