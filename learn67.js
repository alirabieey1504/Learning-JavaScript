var numbers=[3,532,34,73,64,21,676,3256,845,2,3]
console.log(numbers)
numbers.splice(1,5,44,44,44)
console.log(numbers)
var index=numbers.findIndex(function (number){
    //console.log(number)
    return number==845
})
console.log(index)

var users=[
    {id:1,name:"ali",age:32},
    {id:2,name:"arash",age:35},
    {id:3,name:"ehsan",age:24},
    {id:4,name:"saman",age:62}
]
var ins=users.findIndex(function(user){
    return user.name==="ehsan"
})

console.log(ins);