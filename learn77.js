var users=[
    {id:1,name:'ali',age:33},
    {id:2,name:'davod',age:21},
    {id:3,name:'soheil',age:34},
    {id:4,name:'sina',age:14}
]

var mainuser=users.find(function(user){
 
    return user.name==='sina'
})

console.log(mainuser);