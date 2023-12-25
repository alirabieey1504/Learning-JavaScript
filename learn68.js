var products = [
    { id: 0, name: "tablet", price: 400000 },
    { id: 1, name: "laptop", price: 400000 },
    { id: 2, name: "phone", price: 400000 },
    { id: 3, name: "tv", price: 400000 },
    { id: 4, name: "flaks", price: 400000 },
    { id: 5, name: "table", price: 400000 },
    { id: 6, name: "char", price: 400000 }
]

var cart = [
    { id: 0, name: "phone", price: 400000 },
    { id: 1, name: "tv", price: 400000 },
    { id: 2, name: "flaks", price: 400000 }
]
console.log(cart);
var operation = +prompt("enter 1|2 plese :\n .1 or remove product\n .2 or add product")


if (operation == 1) {
    var rem = prompt("which product ?please name :")

    var find=cart.findIndex(function (cart){
        return  cart.name===rem
    })
    if(find===-1){
        alert("khata")
    }else(
        cart.splice(find,1)
    )
} else if (operation == 2) {
    var add = +prompt("which product ?please index :")
   
    var isin=products.some(function (product){
        return product.id===add
    })
    if(isin==true){
        cart.push(products[add])
    }
    else(
        alert("mahsol mojod nist")
    )

} else {
    alert("Error, you made a mistake!!")
}

