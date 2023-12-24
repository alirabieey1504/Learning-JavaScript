var ages=[15,14,5,14]
var isall=ages.every(function (age){
    console.log(age)
    return age>13
})
console.log(isall)