var user=[
    {id:2,name:"ehsan",family:"fatahi"},
    {id:3,name:"jasem",family:"davidi"},
    {id:4,name:"narges",family:"jafarii"},
    {id:1,name:"ali",family:"rabiee"}
]
// console.log(user.includes({id:1,name:"ali",family:"rabiee"}))

var isinuser= user.some(function (fard){
// console.log(fard)
return fard.name=="babak"
})
console.log(isinuser)