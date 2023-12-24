
var mahsol = [{
    id: 1,
    name: "sumsong",
    gheymat: 3200
}, {
    id: 2,
    name: "apple",
    gheymat: 2300

}, {
    id: 3,
    name: "xiaomi",
    gheymat: 5400

}, {
    id: 4,
    name: "Howavi",
    gheymat: 2500

}, {
    id: 5,
    name: "galecsi",
    gheymat: 5700

}, {
    id: 6,
    name: "motorala",
    gheymat: 3800

}, {
    id: 7,
    name: "LG",
    gheymat: 9700

}]
var sabadkharid = [{
    id: 1,
    name: "galecsi",
    gheymat: 5700
}, {
    id: 2,
    name: "Howavi",
    gheymat: 2500
}]
alert("khosh amadin mahsolat ma sumsong apple, xiaomi,Howavi,galecsi,motorala,LG hastan")

var darkhast = prompt("please enter mahsol :")
var request;
var sabad = mahsol.some(function (mahsolat) {
    if (mahsolat.name == darkhast) {
        request = mahsolat
        return true
    }


})
var totul = 0;
if (sabad == true) {
    var newpro = {
        id: 3,  
        name: request.name,
        gheymat: request.gheymat
    }
    sabadkharid.push(newpro)
    console.log(sabadkharid)
    console.log("be sabad kharid ezafe shod .")
    sabadkharid.forEach(function (product) {
        totul += product.gheymat
        
    })
    alert("sabad kharid shoma barabar ast ba :" + totul)
    
}

else {
    console.log("etmam mojodi")
}