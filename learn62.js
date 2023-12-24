var user=["ali","ahmad","hosein","babak"]

// console.log(user.includes("ali"))
var username=prompt("enter user number :")
var islogin=user.includes(username)
if(islogin===true){
    alert("خوش امدید")
}else{
    alert("ثبت نام را انجام دهید")
}
console.log(islogin)
var scores=[20,12,15,12,6]
var isscore=scores.includes(12,4)
// console.log(ins)