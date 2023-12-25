var products = [
    { id: 1, name: "laptop", price: 3400000 },
    { id: 2, name: "phone", price: 5600 },
    { id: 3, name: "tablet", price: 640000 },
    { id: 4, name: "milk", price: 320000 },
    { id: 5, name: "lavashak", price: 7700 },
    { id: 6, name: "abnabat", price: 1300 }

]
var sum1 = 0;
var sum2 = 0;

var totul = products.filter(function (prod) {
    return prod.price < 100000
})
var totul2 = products.filter(function (prods) {
    return prods.price > 100000
})
 var ss1=totul.map(function(pro){
    return pro.price+1000
 })
 
 var ss2=totul2.map(function(pro){
    return pro.price
 })

    var ss3=ss1.map(function(ds){
        return sum1+=ds
    })

 var ss4=ss2.map(function(pr){
    return sum2+=pr
 })
 var sum3=sum1+sum2

 console.log(ss2);

console.log(ss1);

console.log("total :",sum2)
console.log("totul all :",sum3,"total hazine post :",ss1.length*1000)


