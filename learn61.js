// var user=[
//     'ali',
//     'reza',
//     'amir',
//     'sobhan'
// ]
// user.forEach(function (){
//     console.log(user)
// })
// var score=[19,3,12,14,16]
// score.forEach(function (nomre){
//  console.log(nomre * 2)
// })

var obj = [{
    name: 'ali',
    family: 'rabiee',
    age: 21,
    id: 1
},
{
    name:'arash',
    family:'ehsani',
    age:31,
    id:2
},
{
    name:'farhad',
    family:'rahmani',
    age:53,
    id:3
}
]

obj.forEach(function (user){
    console.log("Name :"+user.name+", Family :"+user.family)
    
})