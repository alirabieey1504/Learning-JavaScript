var quis=[
    {id:1,answer:"tehran",response:false},
    {id:2,answer:"ghom",response:false},
    {id:3,answer:"arak",response:false},
    {id:4,answer:"mashhad",response:false},
]
var result1=prompt("پایتخت ایران کدام شهر است ؟")
var result2=prompt("ضریح حضرت معصومه س در کدام شهر است؟")
var result3=prompt("کدام شهر صنعتی ترین شهر ایران است؟")
var result4=prompt("ضریح امام رضا ع در کدام شهر است ؟")

var ex1=quis.some(function(ex){
    if(ex.answer===result1){
        ex.response=true
        return true
    }
})
if(ex1){
    console.log("افرین!");
}
else{
    console.log("نه خیرم");
}

var ex2=quis.some(function(ex1){
    if(ex1.answer===result2){
        ex1.response=true
        return true
    }
})
if(ex2){
    console.log("افرین!");
}
else{
    console.log("نه خیرم");
}
var ex3=quis.some(function(ex2){
    if(ex2.answer===result3){
        ex2.response=true
        return true
    }
})
if(ex3){
    console.log("افرین!");
}
else{
    console.log("نه خیرم");
}
var ex4=quis.some(function(ex3){
    if(ex3.answer===result4){
        ex3.response=true
        return true
    }
})
if(ex4){
    console.log("افرین!");
}
else{
    console.log("نه خیرم");
}
console.log(quis);

