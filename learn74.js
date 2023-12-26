var ostan={
    markazi:["arak","save","mahallat","khomein"],
    esfahan:["chadegan","shahinshahr","esfahan"],
    tehran:["varamin","zaferaniee","arghantin"]
}
var mabda=prompt("please enter origin index:")

var xs=ostan[mabda]

if(Array.isArray(xs)){
   xs.forEach(function(s){
    console.log("shahr hae shome :",s)
   })
}else{
    console.log("Not available in the list");
}