var users = [{
    id: 1,
    name: "ali",
    family: "rabiee",
    age: 21
}, {
    id: 2,
    name: "reza",
    family: "ebrahimy",
    age: 23
}, {
    id: 3,
    name: "ehsan",
    family: "jamali",
    age: 20
}, {
    id: 4,
    name: "abas",
    family: "samani",
    age: 25
}, {
    id: 5,
    name: "ali",
    family: "ghodrati",
    age: 28
}]

var mojaz = users.every(function (user) {
    if (user.age > 18)
        return true
    
})
if(mojaz==true){
    alert("hamegi mojaz hastan")
}
else
alert("mojaz nistan ")


